export interface DevelocityVersion {
  string: string;
  year: number;
  release: number;
  patch: number;
}

export interface DevelocityConfig {
  baseUrl?: string;
  accessKey?: string;
}

export interface DevelocityError {
  error: string;
  message: string;
  statusCode?: number;
}
