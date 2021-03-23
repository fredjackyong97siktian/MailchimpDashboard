import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Application} from './application';
import {Service} from './service';
import {AuthenticationMetrics} from './authenticationmetrics';

@Entity('metrics')
export class Metrics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    metrics_id : number;

    @Column()
    serviceId: number;

    @Column()
    name : string;

    @Column()
    detail : string;

    @Column()
    component: string;

    @Column()
    isactive: boolean;

    @Column()
    create_at: Date;

    @ManyToOne(type => Service, service => service.metrics)
    service : Service;

    @OneToMany(type=>AuthenticationMetrics, am=>am.metrics)
    authenticationMetrics:AuthenticationMetrics[]

}