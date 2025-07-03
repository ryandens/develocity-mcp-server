#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  DevelocityVersion,
  DevelocityConfig,
  DevelocityError,
} from './types.js';

class DevelocityMCPServer {
  private server: Server;
  private config: DevelocityConfig;

  constructor() {
    this.server = new Server({
      name: 'develocity-mcp-server',
      version: '0.1.1',
    });

    this.config = {
      baseUrl: process.env.DEVELOCITY_BASE_URL,
      accessKey: process.env.DEVELOCITY_ACCESS_KEY,
    };

    this.setupHandlers();
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'develocity_get_version',
            description: 'Get the version of the Develocity instance',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name } = request.params;

      if (name === 'develocity_get_version') {
        return await this.getVersion();
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  private async getVersion() {
    const baseUrl = this.config.baseUrl;
    const accessKey = this.config.accessKey;

    if (!baseUrl) {
      throw new Error(
        'Base URL is required. Set DEVELOCITY_BASE_URL environment variable.'
      );
    }

    const url = `${baseUrl}/api/version`;
    const headers: Record<string, string> = {
      Accept: 'application/json',
    };

    if (accessKey) {
      headers['Authorization'] = `Bearer ${accessKey}`;
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

        try {
          const errorJson = JSON.parse(errorText) as DevelocityError;
          errorMessage = errorJson.message || errorMessage;
        } catch (parseError) {
          // If error response is not JSON, use the default message
        }

        throw new Error(`Failed to fetch version: ${errorMessage}`, {
          cause: { status: response.status, statusText: response.statusText }
        });
      }

      const version = (await response.json()) as DevelocityVersion;

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(version, null, 2),
          },
        ],
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';

      return {
        content: [
          {
            type: 'text',
            text: `Error: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Develocity MCP Server running on stdio');
  }
}

const server = new DevelocityMCPServer();
server.run().catch(console.error);
