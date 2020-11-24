import { AfterUpdate, Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Discounts, Products } from "@databases/index"
import { BasicEntity } from "./basics/BasicEntity";
@Entity("Orders")
export class Orders extends BasicEntity {

    @Column("int",{name: "name", nullable: true})
    public name?: string;

    @ManyToMany(() => Products, (products: Products) => products.orders)
    @JoinTable()
    public products?: Array<Products>;

    @ManyToMany(() => Discounts, (discounts: Discounts) => discounts.orders)
    @JoinTable()
    public discounts?: Array<Discounts>;
}
