import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Chuyenbay as Flight } from '../../output/entities/Chuyenbay';
import { Repository, getManager } from 'typeorm';
// import * as moment from 'moment';

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
       newFlight.loaiVe = createFlightDto.loaiVe;
       newFlight.maLoaiVe = createFlightDto.maLoaiVe;
       newFlight.tenHang = createFlightDto.tenHang;
       newFlight.noiDi = createFlightDto.noiDi;
       newFlight.maNoiDi = createFlightDto.maNoiDi;
       newFlight.noiDen = createFlightDto.noiDen;
       newFlight.maNoiDen = createFlightDto.maNoiDen;
       newFlight.gioCatCanh = createFlightDto.gioCatCanh;
       newFlight.gioHaCanh = createFlightDto.gioHaCanh;
       newFlight.ngayCatCanh = createFlightDto.ngayCatCanh;
       newFlight.ngayHaCanh = createFlightDto.ngayHaCanh;
       newFlight.thoiGianBay = createFlightDto.thoiGianBay;
       newFlight.donGia = createFlightDto.donGia;
       newFlight.imageHang = createFlightDto.imageHang;
       await this.flightRepository.save(newFlight);
  }

  async getAll() {
    return this.flightRepository.find();
  }

  async search(ngayCatCanh: string, maNoiDi: string, maNoiDen: string, maLoaiVe: string): Promise<Flight[]> {

    const manager = getManager();
    const dateQuery = await manager.query(
      `SELECT * from CHUYENBAY where (NgayCatCanh = '${ngayCatCanh}' AND MaNoiDi = '${maNoiDi}' AND MaNoiDen = '${maNoiDen}' AND MaLoaiVe = '${maLoaiVe}')`,
    );

    dateQuery.map((item: any) => {
      const ngayCatCanh = item.ngayCatCanh;
      const maNoiDi = item.maNoiDi;
      const maNoiDen = item.maNoiDen;
      const maLoaiVe = item.maLoaiVe;

      return ngayCatCanh && maNoiDi && maNoiDen && maLoaiVe;
    });

    if (ngayCatCanh && maNoiDi && maNoiDen) {
      const findByName = await this.flightRepository.find({
        where: {
          ngayCatCanh: ngayCatCanh,
          maNoiDi: maNoiDi,
          maNoiDen: maNoiDen,
          maLoaiVe: maLoaiVe,
        },
      });

      return findByName;
    }
  }

  // update(id: number, updateFlightDto: UpdateFlightDto) {
  //   return `This action updates a #${id} flight`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} flight`;
  // }
}
