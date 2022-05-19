import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightDto {

  @ApiProperty()
  maChuyenBay: string;
  @ApiProperty()
  tenChuyenBay: string;
  @ApiProperty()
  soGhe: number;
  @ApiProperty()
  loaiVe: string;
  @ApiProperty()
  tenHang: string;
  @ApiProperty()
  noiDi: string;
  @ApiProperty()
  noiDen: string;
  @ApiProperty()
  gioCatCanh: Date;
  @ApiProperty()
  gioHaCanh: Date;
  @ApiProperty()
  thoiGianBay: string;
  @ApiProperty()
  donGia: number;
}
