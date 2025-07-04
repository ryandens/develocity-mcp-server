# Develocity MCP Server

A Model Context Protocol (MCP) server for accessing the Develocity API.

## Features

- **Version API**: Get version information from your Develocity instance
- **Authentication**: Support for Develocity access keys
- **Error Handling**: Comprehensive error handling for API failures
- **TypeScript**: Full TypeScript support with proper types

## Usage

### Environment Variables

- `DEVELOCITY_BASE_URL`: Base URL for your Develocity instance (required)
- `DEVELOCITY_ACCESS_KEY`: Your Develocity access key for authentication

### Running the Server

```bash
npm start
```

### Adding to Claude Desktop

Add the following to your Claude Desktop configuration file:
  - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "develocity": {
        "command": "npx",
        "args": ["-y", "@ryandens/develocity-mcp-server"],
        "env": {
          "DEVELOCITY_BASE_URL": "https://develocity.example.com",
          "DEVELOCITY_ACCESS_KEY": "your-access-key"
        }
      }
    }
  }
  ```

### Adding to Claude Code

Add the MCP server configuration to your Claude Code settings:
  - Open Claude Code settings
  - Navigate to MCP Servers section
  - Add a new server with:
    - **Name**: `develocity`
    - **Command**: `npx`
    - **Args**: `["-y", "@ryandens/develocity-mcp-server"]`
    - **Environment Variables**:
      - `DEVELOCITY_BASE_URL`: Your Develocity instance URL
      - `DEVELOCITY_ACCESS_KEY`: Your access key


### Available Tools

#### `develocity_get_version`

Get the version of the Develocity instance.

**Parameters:** None (uses server configuration)

**Example Response:**
```json
{
  "string": "2025.1",
  "year": 2025,
  "release": 1,
  "patch": 0
}
```
