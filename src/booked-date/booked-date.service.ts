import { Injectable } from '@nestjs/common';
import { CreateBookedDateDto } from './dto/create-booked-date.dto';
import { UpdateBookedDateDto } from './dto/update-booked-date.dto';

@Injectable()
export class BookedDateService {
  create(createBookedDateDto: CreateBookedDateDto) {
    return 'This action adds a new bookedDate';
  }

  findAll() {
    return `This action returns all bookedDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookedDate`;
  }

  update(id: number, updateBookedDateDto: UpdateBookedDateDto) {
    return `This action updates a #${id} bookedDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookedDate`;
  }
}
