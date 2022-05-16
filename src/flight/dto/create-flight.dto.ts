import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightDto {

  @ApiProperty()
  maChuyenBay: string;

  @ApiProperty()
  tenChuyenBay: string | null;

  @ApiProperty()
  soGhe: string | null;

  @ApiProperty()
  loaiVe: string | null;

  @ApiProperty()
  tenHang: string | null;

  @ApiProperty()
  noiDi: string | null;

  @ApiProperty()
  noiDen: string | null;

  @ApiProperty()
  gioCatCanh: string | null;

  @ApiProperty()
  gioHaCanh: string | null;

  @ApiProperty()
  thoiGianBay: string | null;

  @ApiProperty()
  donGia: string | null;
}
