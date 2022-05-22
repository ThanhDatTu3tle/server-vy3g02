import { Column, Entity, Index, OneToMany } from "typeorm";
import { Phieudatcho } from "./Phieudatcho";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__CHUYENBA__9B5036A3DF2D0DCC", ["maChuyenBay"], { unique: true })
@Entity("CHUYENBAY", { schema: "dbo" })
export class Chuyenbay {
  @Column("char", { primary: true, name: "MaChuyenBay", length: 6 })
  maChuyenBay: string;

  @Column("nvarchar", { name: "LoaiVe", length: 250 })
  loaiVe: string;

  @Column("nvarchar", { name: "TenHang", length: 250 })
  tenHang: string;

  @Column("nvarchar", { name: "NoiDi", length: 250 })
  noiDi: string;

  @Column("nvarchar", { name: "NoiDen", length: 250 })
  noiDen: string;

  @Column("nvarchar", { name: "GioCatCanh", length: 250 })
  gioCatCanh: string;

  @Column("nvarchar", { name: "GioHaCanh", length: 250 })
  gioHaCanh: string;

  @Column("nvarchar", { name: "NgayCatCanh", length: 250 })
  ngayCatCanh: string;

  @Column("nvarchar", { name: "NgayHaCanh", length: 250 })
  ngayHaCanh: string;

  @Column("nvarchar", { name: "ThoiGianBay", length: 25 })
  thoiGianBay: string;

  @Column("decimal", { name: "DonGia", precision: 18, scale: 3 })
  donGia: number;

  @Column("nvarchar", { name: "ImageHang", length: 250 })
  imageHang: string;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maChuyenBay2)
  phieudatchos: Phieudatcho[];

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.maChuyenBay2)
  vechuyenbays: Vechuyenbay[];
}
