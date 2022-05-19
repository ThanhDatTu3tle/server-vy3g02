import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Chuyenbay } from "./Chuyenbay";
import { Phieudatcho } from "./Phieudatcho";
import { Hanhkhach } from "./Hanhkhach";

// @Index(
//   "PK__VECHUYEN__91600A60E9D87684",
//   ["maVeChuyenBay", "maChuyenBay", "maPhieuDatCho", "cccd"],
//   { unique: true }
// )
@Entity("VECHUYENBAY", { schema: "dbo" })
export class Vechuyenbay {
  @Column("char", { primary: true, name: "MaVeChuyenBay", length: 10 })
  maVeChuyenBay: string;

  @Column("decimal", { name: "GiaVe", precision: 18, scale: 0 })
  giaVe: number;

  @Column("char", { primary: true, name: "MaChuyenBay", length: 6 })
  maChuyenBay: string;

  @Column("char", { primary: true, name: "MaPhieuDatCho", length: 6 })
  maPhieuDatCho: string;

  @Column("char", { primary: true, name: "CCCD", length: 12 })
  cccd: string;

  @ManyToOne(() => Chuyenbay, (chuyenbay) => chuyenbay.vechuyenbays)
  @JoinColumn([{ name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }])
  maChuyenBay2: Chuyenbay;

  @ManyToOne(() => Phieudatcho, (phieudatcho) => phieudatcho.vechuyenbays)
  @JoinColumn([
    { name: "MaPhieuDatCho", referencedColumnName: "maPhieuDatCho" },
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" },
  ])
  phieudatcho: Phieudatcho;

  @ManyToOne(() => Hanhkhach, (hanhkhach) => hanhkhach.vechuyenbays)
  @JoinColumn([{ name: "CCCD", referencedColumnName: "cccd" }])
  cccd2: Hanhkhach;
}
