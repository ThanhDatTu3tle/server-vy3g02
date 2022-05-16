import { Column, Entity, Index, OneToMany } from "typeorm";
import { Hoadon } from "./Hoadon";
import { Vechuyenbay } from "./Vechuyenbay";

// @Index("PK__HANHKHAC__A955A0ABB27E9D48", ["cccd"], { unique: true })
@Entity("HANHKHACH", { schema: "dbo" })
export class Hanhkhach {
  @Column("char", { primary: true, name: "CCCD", length: 10 })
  cccd: string;

  @Column("char", { name: "TenHanhKhach", nullable: true, length: 10 })
  tenHanhKhach: string | null;

  @Column("char", { name: "SoDienThoai", nullable: true, length: 10 })
  soDienThoai: string | null;

  @OneToMany(() => Hoadon, (hoadon) => hoadon.cccd2)
  hoadons: Hoadon[];

  @OneToMany(() => Vechuyenbay, (vechuyenbay) => vechuyenbay.cccd2)
  vechuyenbays: Vechuyenbay[];
}
