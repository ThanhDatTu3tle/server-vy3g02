import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './entities/flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Flight')
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  @ApiCreatedResponse({ type: Flight })
  @ApiBadRequestResponse()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Get()
  async getAll() {
    return this.flightService.getAll();
  }

  @ApiQuery({ name: 'ngayCatCanh', required: true })
  @ApiQuery({ name: 'maNoiDi', required: true })
  @ApiQuery({ name: 'maNoiDen', required: true })
  @ApiQuery({ name: 'maLoaiVe', required: true })
  @ApiCreatedResponse({ type: Flight, isArray: true })
  @ApiBadRequestResponse()
  @Get('details')
  async search(
    @Query('ngayCatCanh') ngayCatCanh?: string,
    @Query('maNoiDi') maNoiDi?: string,
    @Query('maNoiDen') maNoiDen?: string,
    @Query('maLoaiVe') maLoaiVe?: string,
  ): Promise<Flight[]> {
    const flights = this.flightService.search(ngayCatCanh, maNoiDi, maNoiDen, maLoaiVe);
    if (!flights) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    return flights;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
  //   return this.flightService.update(+id, updateFlightDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.flightService.remove(+id);
  // }
}
