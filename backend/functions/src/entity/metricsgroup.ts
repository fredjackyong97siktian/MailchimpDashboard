import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Metrics} from './metrics'

@Entity('metricsgroup')
export class MetricsGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @OneToMany(type=>Metrics, m=>m.metricsgroup)
    metrics:Metrics[]

}