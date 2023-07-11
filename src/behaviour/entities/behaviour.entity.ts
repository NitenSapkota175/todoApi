import { ImproveBehaviour } from "src/improve-behaviour/entities/improve-behaviour.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Behaviour {

        @PrimaryGeneratedColumn()
        id : number;

        @Column()    
        title  : string;

        @Column()
        createdAt : Date;

        @ManyToOne(()=> User , (user) => user.behaviours)
        user : User    


        @OneToMany(() => ImproveBehaviour , (improveBehaviours) => improveBehaviours.behaviour )
        improveBehaviours : ImproveBehaviour[]
    }
