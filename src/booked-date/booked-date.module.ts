import { Module } from '@nestjs/common';
import { BookedDateService } from './booked-date.service';
import { BookedDateController } from './booked-date.controller';

@Module({
  controllers: [BookedDateController],
  providers: [BookedDateService]
})
export class BookedDateModule {}
