
import { Behaviour } from "src/behaviour/entities/behaviour.entity";
import { Collection, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImproveBehaviour {

        @PrimaryGeneratedColumn()
         id : number;
         
         @Column()
         title : string;

         @Column()
         createdAt : Date;

         @ManyToOne(()=>Behaviour , (behaviour) => behaviour.improveBehaviours)
         behaviour : Behaviour;

}
