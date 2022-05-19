
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1444,
  username: 'sa',
  password: '!dat27032001',
  database: 'server_vy3_g02',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: ['dist/output/entities/*js'], 
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  } 
};

export default config;
