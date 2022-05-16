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

// @Index("PK__PHIEUDAT__F94E1AB576B24A49", ["maPhieuDatCho", "maChuyenBay"], {
//   unique: true,
// })
@Entity("PHIEUDATCHO", { schema: "dbo" })
export class Phieudatcho {
  @Column("char", { primary: true, name: "MaPhieuDatCho", length: 10 })
  maPhieuDatCho: string;

  @Column("char", { name: "SoGhe", nullable: true, length: 10 })
  soGhe: string | null;

  @Column("char", { name: "LoaiVe", nullable: true, length: 10 })
  loaiVe: string | null;

  @Column("char", { name: "NgayDat", nullable: true, length: 10 })
  ngayDat: string | null;

  @Column("char", { name: "ThanhTien", nullable: true, length: 10 })
  thanhTien: string | null;

  @Column("char", { primary: true, name: "MaChuyenBay", length: 10 })
  maChuyenBay: string;

  @ManyToOne(() => Chuyenbay, (chuyenbay) => chuyenbay.phieudatchos)
  @JoinColumn([{ name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }])
  maChuyenBay2: Chuyenbay;

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.phieudatcho)
  vechuyenbays: Vechuyenbay[];
}
