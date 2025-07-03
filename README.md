# Develocity MCP Server

A Model Context Protocol (MCP) server for accessing the Develocity API.

## Features

- **Version API**: Get version information from your Develocity instance
- **Authentication**: Support for Develocity access keys
- **Error Handling**: Comprehensive error handling for API failures
- **TypeScript**: Full TypeScript support with proper types

## Installation

```bash
npm install
npm run build
```

## Usage

### Environment Variables

- `DEVELOCITY_BASE_URL`: Base URL for your Develocity instance (required)
- `DEVELOCITY_ACCESS_KEY`: Your Develocity access key for authentication

### Running the Server

```bash
npm start
```

### Adding to Claude Desktop

1. Build the server:
   ```bash
   npm run build
   ```

2. Add the following to your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "develocity": {
         "command": "node",
         "args": ["/path/to/develocity-mcp-server/dist/index.js"],
         "env": {
           "DEVELOCITY_BASE_URL": "https://your-develocity-instance.com",
           "DEVELOCITY_ACCESS_KEY": "your-access-key"
         }
       }
     }
   }
   ```

3. Restart Claude Desktop to load the new server.

### Adding to Claude Code

1. Build the server:
   ```bash
   npm run build
   ```

2. Add the MCP server configuration to your Claude Code settings:
   - Open Claude Code settings
   - Navigate to MCP Servers section
   - Add a new server with:
     - **Name**: `develocity`
     - **Command**: `node`
     - **Args**: `["/path/to/develocity-mcp-server/dist/index.js"]`
     - **Environment Variables**:
       - `DEVELOCITY_BASE_URL`: Your Develocity instance URL
       - `DEVELOCITY_ACCESS_KEY`: Your access key

3. Restart Claude Code to load the new server.

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

## Development

```bash
npm run dev
```

## License

MIT
