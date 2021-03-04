import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn} from "typeorm";
import {Application} from './application';
import {Category} from './category';

@Entity('service')
export class Service {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId : number;

    @Column()
    applicationId : number;

    @Column()
    description : string;

    @ManyToOne(type => Category, category => category.services)
    category : Category;

    @ManyToOne(type => Application, application => application.service)
    application : Application;
}