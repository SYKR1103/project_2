import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()

export class Product extends BaseEntity {


    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name : string;


    @Column()
    public price : number;

    @Column({default:true})
    public isSealed : boolean;


}
