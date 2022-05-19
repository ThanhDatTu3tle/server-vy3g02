import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Hanhkhach } from "./Hanhkhach";

// @Index("PK__HOADON__29CB8B31299463EF", ["maHoaDon", "cccd"], { unique: true })
@Entity("HOADON", { schema: "dbo" })
export class Hoadon {
  @Column("char", { primary: true, name: "MaHoaDon", length: 6 })
  maHoaDon: string;

  @Column("datetime", { name: "NgayLapHoaDon" })
  ngayLapHoaDon: Date;

  @Column("decimal", { name: "ThanhTien", precision: 18, scale: 0 })
  thanhTien: number;

  @Column("char", { primary: true, name: "CCCD", length: 12 })
  cccd: string;

  @ManyToOne(() => Hanhkhach, (hanhkhach) => hanhkhach.hoadons)
  @JoinColumn([{ name: "CCCD", referencedColumnName: "cccd" }])
  cccd2: Hanhkhach;
}
