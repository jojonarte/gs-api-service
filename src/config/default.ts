import { Config, getEnvironmentValue } from '.';

const config: Config = {
  appName: 'api-service',
  env: 'local',
  database: {
    url: getEnvironmentValue('DATABASE_URL', 'postgres')
  },
  // {
  //   user: getEnvironmentValue('POSTGRES_USER', 'postgres'),
  //   password: getEnvironmentValue('POSTGRES_PASSWORD', 'password'),
  //   database: getEnvironmentValue('POSTGRES_DB', 'development'),
  //   port: Number(getEnvironmentValue('POSTGRES_PORT', '5432'))
  // },
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