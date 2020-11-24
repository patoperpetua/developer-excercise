import { AfterUpdate, Column, PrimaryGeneratedColumn } from "typeorm";

export class BasicEntity {

    @PrimaryGeneratedColumn({name: "id"})
    public id!: number;
    
    @Column({
        default: () => "(0)",
        name: "deleted",
        nullable: false
    })
    public deleted?: boolean;

    @Column({
        default: () => "CURRENT_TIMESTAMP",
        name: "createdAt",
        nullable: false
    })
    public createdAt?: Date;

    @Column({
        default: () => "CURRENT_TIMESTAMP",
        name: "modifiedAt",
        nullable: false
    })
    public modifiedAt?: Date;

    @AfterUpdate()
    async updateModifiedDate(): Promise<void> {

    }
}