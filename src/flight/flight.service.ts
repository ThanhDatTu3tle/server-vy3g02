import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Chuyenbay as Flight } from '../../output/entities/Chuyenbay';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {

  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>
  ) {}

  async create(createFlightDto: CreateFlightDto) {
       //create new flight
       const newFlight = this.flightRepository.create();
       newFlight.maChuyenBay = createFlightDto.maChuyenBay;
       newFlight.tenChuyenBay = createFlightDto.tenChuyenBay;
       newFlight.soGhe = createFlightDto.soGhe;
       newFlight.loaiVe = createFlightDto.loaiVe;
       newFlight.tenHang = createFlightDto.tenHang;
       newFlight.noiDi = createFlightDto.noiDi;
       newFlight.noiDen = createFlightDto.noiDen;
       newFlight.gioCatCanh = createFlightDto.gioCatCanh;
       newFlight.gioHaCanh = createFlightDto.gioHaCanh;
       newFlight.thoiGianBay = createFlightDto.thoiGianBay;
       newFlight.donGia = createFlightDto.donGia;
       await this.flightRepository.save(newFlight);
  }

  findAll() {
    return `This action returns all flight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
