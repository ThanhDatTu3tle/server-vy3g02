import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chuyenbay as Flight } from '../../output/entities/Chuyenbay';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
