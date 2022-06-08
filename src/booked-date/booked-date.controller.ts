import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookedDateService } from './booked-date.service';
import { CreateBookedDateDto } from './dto/create-booked-date.dto';
import { UpdateBookedDateDto } from './dto/update-booked-date.dto';

@Controller('booked-date')
export class BookedDateController {
  constructor(private readonly bookedDateService: BookedDateService) {}

  @Post()
  create(@Body() createBookedDateDto: CreateBookedDateDto) {
    return this.bookedDateService.create(createBookedDateDto);
  }

  @Get()
  findAll() {
    return this.bookedDateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookedDateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookedDateDto: UpdateBookedDateDto) {
    return this.bookedDateService.update(+id, updateBookedDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookedDateService.remove(+id);
  }
}
