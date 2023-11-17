import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { Role } from "./role.enum";
import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';


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


    @BeforeInsert()
    async hashedPassword() : Promise<void>  {
        try{
            const saltValue = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password, saltValue)

        } catch(e) 
        {console.log(e)
         throw new InternalServerErrorException()
        }
    }

    async checkPassword(aPassword: string): Promise<boolean>  {

        try {
            const isMatched = await bcrypt.compare(aPassword, this.password)
            return isMatched

        } catch(e) {
            console.log(e)
            throw new InternalServerErrorException()
        }


    }



}
