import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Application} from './application';
import {Category} from './category';
import {AuthenticationPermission} from './authentication_permission';

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

    @ManyToOne(type => Application, application => application.services)
    application : Application;

    @OneToMany(type => AuthenticationPermission, ap => ap.service)
    authenticationPermissions : AuthenticationPermission[];
}