import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enum";

@Entity()

export class User extends BaseEntity{


    @Column()
    public nickname : string;

    @Column({unique:true})
    public email : string;

    @Column()
    public password : string;

    @Column({

        type : 'enum',
        enum : Role,
        array : true,
        default : [Role.USER]
    })
    public roles : Role[]


}
