export interface Config {
  appName: string
  env: string
  database: {
    // user: string,
    // database: string,
    // password: string,
    // port: number,
    url: string
  }
  logging: {
    stdout: {
      enabled: boolean,
      level: string;
    }
  }
  server: {
    port: number;
  }
}

export const getEnvironmentValue = (key: string, defaultValue?: string): string => {
  const envVal = process.env[key] || defaultValue

  if (!envVal) {
    throw new Error(`env variable ${key} should be defined`)
  }

  return envVal
}

const defaultConfig = require('./default');
export const config = defaultConfig as Config;