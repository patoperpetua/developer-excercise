import { AfterUpdate, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BasicEntity {

    @PrimaryGeneratedColumn({name: "id"})
    public id!: number;
    
    @Column({
        default: () => "(0)",
        name: "deleted",
        nullable: false
    })
    public deleted?: boolean;

    @CreateDateColumn({
        default: () => "CURRENT_TIMESTAMP",
        name: "createdAt",
        nullable: false,
        insert: false,
        update: false
    })
    public createdAt?: Date;

    @UpdateDateColumn({
        default: () => "CURRENT_TIMESTAMP",
        name: "modifiedAt",
        nullable: false,
        insert: false,
        update: false
    })
    public modifiedAt?: Date;

    public constructor(init?: Partial<BasicEntity>) {
        this.assign(init);
        Object.assign(this, init);
        if(this.modifiedAt)
            this.modifiedAt = new Date(this.modifiedAt);
        if(this.createdAt)
            this.createdAt = new Date(this.createdAt);
    }

    protected abstract assign(init?: Partial<BasicEntity>);
}