import { Column, Entity, Index, OneToMany } from "typeorm";
import { Phieudatcho } from "./Phieudatcho";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__CHUYENBA__9B5036A3DF2D0DCC", ["maChuyenBay"], { unique: true })
@Entity("CHUYENBAY", { schema: "dbo" })
export class Chuyenbay {
  @Column("char", { primary: true, name: "MaChuyenBay", length: 6 })
  maChuyenBay: string;

  @Column("nvarchar", { name: "TenChuyenBay", length: 250 })
  tenChuyenBay: string;

  @Column("int", { name: "SoGhe" })
  soGhe: number;

  @Column("nvarchar", { name: "LoaiVe", length: 250 })
  loaiVe: string;

  @Column("nvarchar", { name: "TenHang", length: 250 })
  tenHang: string;

  @Column("nvarchar", { name: "NoiDi", length: 250 })
  noiDi: string;

  @Column("nvarchar", { name: "NoiDen", length: 250 })
  noiDen: string;

  @Column("datetime", { name: "GioCatCanh" })
  gioCatCanh: Date;

  @Column("datetime", { name: "GioHaCanh" })
  gioHaCanh: Date;

  @Column("nvarchar", { name: "ThoiGianBay", length: 25 })
  thoiGianBay: string;

  @Column("decimal", { name: "DonGia", precision: 18, scale: 0 })
  donGia: number;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maChuyenBay2)
  phieudatchos: Phieudatcho[];

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.maChuyenBay2)
  vechuyenbays: Vechuyenbay[];
}
