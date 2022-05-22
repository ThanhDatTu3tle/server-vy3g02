
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: '139.59.225.244',
  port: 1434, 
  username: 'sa',
  password: 'dat27032001',
  database: 'server_flight',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: ['dist/output/entities/*js'], 
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  } 
};

export default config;
