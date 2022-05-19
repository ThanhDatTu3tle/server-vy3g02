import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Chuyenbay } from "./Chuyenbay";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__PHIEUDAT__F94E1AB5900C49E7", ["maPhieuDatCho", "maChuyenBay"], {
//   unique: true,
// })
@Entity("PHIEUDATCHO", { schema: "dbo" })
export class Phieudatcho {
  @Column("char", { primary: true, name: "MaPhieuDatCho", length: 6 })
  maPhieuDatCho: string;

  @Column("int", { name: "SoGhe" })
  soGhe: number;

  @Column("nvarchar", { name: "LoaiVe", length: 250 })
  loaiVe: string;

  @Column("datetime", { name: "NgayDat" })
  ngayDat: Date;

  @Column("decimal", { name: "ThanhTien", precision: 18, scale: 0 })
  thanhTien: number;

  @Column("char", { primary: true, name: "MaChuyenBay", length: 6 })
  maChuyenBay: string;

  @ManyToOne(() => Chuyenbay, (chuyenbay) => chuyenbay.phieudatchos)
  @JoinColumn([{ name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }])
  maChuyenBay2: Chuyenbay;

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.phieudatcho)
  vechuyenbays: Vechuyenbay[];
}
