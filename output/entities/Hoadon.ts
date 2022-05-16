import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Hanhkhach } from "./Hanhkhach";

// @Index("PK__HOADON__29CB8B311FF437AB", ["maHoaDon", "cccd"], { unique: true })
@Entity("HOADON", { schema: "dbo" })
export class Hoadon {
  @Column("char", { primary: true, name: "MaHoaDon", length: 10 })
  maHoaDon: string;

  @Column("char", { name: "NgayLapHoaDon", nullable: true, length: 10 })
  ngayLapHoaDon: string | null;

  @Column("char", { name: "ThanhTien", nullable: true, length: 10 })
  thanhTien: string | null;

  @Column("char", { primary: true, name: "CCCD", length: 10 })
  cccd: string;

  @ManyToOne(() => Hanhkhach, (hanhkhach) => hanhkhach.hoadons)
  @JoinColumn([{ name: "CCCD", referencedColumnName: "cccd" }])
  cccd2: Hanhkhach;
}
