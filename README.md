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

- `DEVELOCITY_BASE_URL`: Base URL for your Develocity instance (default: https://scans.gradle.com)
- `DEVELOCITY_ACCESS_KEY`: Your Develocity access key for authentication

### Running the Server

```bash
npm start
```

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
