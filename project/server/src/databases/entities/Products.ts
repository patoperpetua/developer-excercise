import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { BasicEntity } from "./basics/BasicEntity";
import { Discounts } from "./Discounts";
import { Orders } from "./Orders";

@Entity("Products")
export class Products extends BasicEntity {

    @Column("int",{name: "name", nullable: false})
    public name!: string;

    @Column("float", {name: "price", nullable: false
    })
    public price: number;

    @ManyToMany(() => Discounts, discount => discount.products)
    public discounts?: Array<Discounts>;

    @ManyToMany(() => Orders, order => order.products)
    public orders?: Array<Orders>;

    public sanitize?(): Products {
        this.orders = null;
        this.discounts = null;
        this.createdAt = null;
        this.modifiedAt = null;
        return this;
    }

    public constructor(init?: Partial<Products>) {
        super(init);
    }

    protected assign(init?: Partial<Products>) {
        Object.assign(this, init);
    }
}
