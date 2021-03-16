import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Application} from './application';
import {Service} from './service';
import {Category} from './category';
import {AuthenticationPermission} from './authentication_permission';

@Entity('scope')
export class Scope {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    scope_id: string;

    @Column()
    serviceId : number;

    @Column()
    name: string;

    @Column()
    term: string;

    @Column()
    api: string;

    @Column()
    method: string;

    @Column()
    isactive: boolean;

    @Column()
    created_at: Date;

    @ManyToOne(type => Service, service => service.scopes)
    service: Service;

}