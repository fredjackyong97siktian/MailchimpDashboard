import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Application} from './application';
import {Category} from './category';
import {AuthenticationService} from './authenticationservice';
import {Metrics} from './metrics';
import { Dashboard } from "./dashboard";

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

    @Column()
    service_name: string;

    @ManyToOne(type => Category, category => category.services)
    category : Category;

    @ManyToOne(type => Application, application => application.services)
    application : Application;

    @OneToMany(type =>AuthenticationService, ap => ap.service)
    authenticationServices : AuthenticationService[];

    @OneToMany(type =>Metrics, metrics => metrics.service)
    metrics : Metrics[];

    @OneToMany(type=>Dashboard,dashboard=>dashboard.service)
    dashboards : Dashboard[]
}