import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Service} from './service';

@Entity('category')
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isactive : boolean

    //relations
    @OneToMany((type => Service), service => service.category)
    services: Service[]    
   
}