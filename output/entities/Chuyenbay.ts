import { Column, Entity, Index, OneToMany } from "typeorm";
import { Phieudatcho } from "./Phieudatcho";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__CHUYENBA__9B5036A3138D1A5C", ["maChuyenBay"], { unique: true })
@Entity("CHUYENBAY", { schema: "dbo" })
export class Chuyenbay {
  @Column("char", { primary: true, name: "MaChuyenBay", length: 10 })
  maChuyenBay: string;

  @Column("char", { name: "TenChuyenBay", nullable: true, length: 10 })
  tenChuyenBay: string | null;

  @Column("char", { name: "SoGhe", nullable: true, length: 10 })
  soGhe: string | null;

  @Column("char", { name: "LoaiVe", nullable: true, length: 10 })
  loaiVe: string | null;

  @Column("char", { name: "TenHang", nullable: true, length: 10 })
  tenHang: string | null;

  @Column("char", { name: "NoiDi", nullable: true, length: 10 })
  noiDi: string | null;

  @Column("char", { name: "NoiDen", nullable: true, length: 10 })
  noiDen: string | null;

  @Column("char", { name: "GioCatCanh", nullable: true, length: 10 })
  gioCatCanh: string | null;

  @Column("char", { name: "GioHaCanh", nullable: true, length: 10 })
  gioHaCanh: string | null;

  @Column("char", { name: "ThoiGianBay", nullable: true, length: 10 })
  thoiGianBay: string | null;

  @Column("char", { name: "DonGia", nullable: true, length: 10 })
  donGia: string | null;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maChuyenBay2)
  phieudatchos: Phieudatcho[];

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.maChuyenBay2)
  vechuyenbays: Vechuyenbay[];
}
