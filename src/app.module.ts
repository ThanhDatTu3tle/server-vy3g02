import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import config from 'ormconfig';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), 
    FlightModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        STRIPE_SECRET_KEY: Joi.string(),
        STRIPE_CURRENCY: Joi.string(),
        FRONTEND_URL: Joi.string(),
        // ...
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
