import { Behaviour } from "src/behaviour/entities/behaviour.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name : "users"})
export class User {

        @PrimaryGeneratedColumn()
        id : number ;

        @Column()
        username : string;

        @Column()
        email : string;

        @Column()
        password : string;

        @Column()
        createdAt : Date

        @Column()
        role : string 

        @OneToMany(() => Behaviour , (behaviours) => behaviours.user )
        behaviours : Behaviour[]

}
