import {EntityRepository, Repository} from "typeorm";
import {Products} from "../index";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {

    findByName(name: string) {
        return this.findOne({ name });
    }

    findByPrice(price: number) {
        return this.find({ price });
    }

}