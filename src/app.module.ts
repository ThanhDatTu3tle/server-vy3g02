import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
