import { Config, getEnvironmentValue } from '.';

const config: Config = {
  appName: 'api-service',
  env: 'local',
  database: {
    url: getEnvironmentValue('DATABASE_URL', 'postgres://postgres:password@postgres/development')
  },
  logging: {
    stdout: {
      enabled: true,
      level: 'debug'
    }
  },
  server: {
    port: Number(getEnvironmentValue('PORT', '3002'))
  }
}

export = config