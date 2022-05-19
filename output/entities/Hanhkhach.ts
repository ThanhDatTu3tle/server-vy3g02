import { Column, Entity, Index, OneToMany } from "typeorm";
import { Hoadon } from "./Hoadon";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__HANHKHAC__A955A0AB5AA3FD95", ["cccd"], { unique: true })
@Entity("HANHKHACH", { schema: "dbo" })
export class Hanhkhach {
  @Column("char", { primary: true, name: "CCCD", length: 12 })
  cccd: string;

  @Column("nvarchar", { name: "TenHanhKhach", length: 250 })
  tenHanhKhach: string;

  @Column("char", { name: "SoDienThoai", length: 10 })
  soDienThoai: string;

  @OneToMany(() => Hoadon, (hoadon) => hoadon.cccd2)
  hoadons: Hoadon[];

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.cccd2)
  vechuyenbays: Vechuyenbay[];
}
