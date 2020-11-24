import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { DiscountType } from "@models/index"
import { Products } from "./Products";
import { Orders } from "..";
import { BasicEntity } from "./basics/BasicEntity";

@Entity("Discounts")
export class Discounts extends BasicEntity {

    @Column("int",{name: "name", nullable: false})
    public name!: string;

    @Column("nvarchar",{ default: () => "'CHEAPEST'", name: "discountType", nullable: false})
    public discountType!: DiscountType;

    @Column("int", {name: "itemsXQuantity", nullable: false
    })
    public itemsXQuantity?: number;

    @Column("int", {name: "itemsYQuantity", nullable: false
    })
    public itemsYQuantity?: number;

    @Column("float", {name: "discount", nullable: false
    })
    public discount?: number;

    @Column("int", {name: "maxDiscountToApply", nullable: false
    })
    public maxDiscountToApply?: number;

    @ManyToMany(() => Products, product => product.discounts)
    @JoinTable()
    public products: Array<Products>;

    @ManyToMany(() => Orders, order => order.discounts)
    orders: Array<Orders>;
}
