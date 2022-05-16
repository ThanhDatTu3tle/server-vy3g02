import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Chuyenbay } from "./Chuyenbay";
import { Hanhkhach } from "./Hanhkhach";
import { Phieudatcho } from "./Phieudatcho";

// @Index(
//   "PK__VECHUYEN__91600A6026C60543",
//   ["maVeChuyenBay", "maChuyenBay", "maPhieuDatCho", "cccd"],
//   { unique: true }
// )
@Entity("VECHUYENBAY", { schema: "dbo" })
export class Vechuyenbay {
  @Column("char", { primary: true, name: "MaVeChuyenBay", length: 10 })
  maVeChuyenBay: string;

  @Column("char", { name: "GiaVe", nullable: true, length: 10 })
  giaVe: string | null;

  @Column("char", { primary: true, name: "MaChuyenBay", length: 10 })
  maChuyenBay: string;

  @Column("char", { primary: true, name: "MaPhieuDatCho", length: 10 })
  maPhieuDatCho: string;

  @Column("char", { primary: true, name: "CCCD", length: 10 })
  cccd: string;

  @ManyToOne(() => Chuyenbay, (chuyenbay) => chuyenbay.vechuyenbays)
  @JoinColumn([{ name: "MaChuyenBay", referencedColumnName: "maChuyenBay" }])
  maChuyenBay2: Chuyenbay;

  @ManyToOne(() => Hanhkhach, (hanhkhach) => hanhkhach.vechuyenbays)
  @JoinColumn([{ name: "CCCD", referencedColumnName: "cccd" }])
  cccd2: Hanhkhach;

  @ManyToOne(() => Phieudatcho, (phieudatcho) => phieudatcho.vechuyenbays)
  @JoinColumn([
    { name: "MaPhieuDatCho", referencedColumnName: "maPhieuDatCho" },
    { name: "MaChuyenBay", referencedColumnName: "maChuyenBay" },
  ])
  phieudatcho: Phieudatcho;
}
