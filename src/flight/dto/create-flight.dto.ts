import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightDto {

  @ApiProperty()
  maChuyenBay: string;
  @ApiProperty()
  loaiVe: string;
  @ApiProperty()
  tenHang: string;
  @ApiProperty()
  noiDi: string;
  @ApiProperty()
  noiDen: string;
  @ApiProperty()
  gioCatCanh: string;
  @ApiProperty()
  gioHaCanh: string;
  @ApiProperty()
  ngayCatCanh: string;
  @ApiProperty()
  ngayHaCanh: string;
  @ApiProperty()
  thoiGianBay: string;
  @ApiProperty()
  donGia: number;
  @ApiProperty()
  imageHang: string;
}
