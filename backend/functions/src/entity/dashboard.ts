import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Metrics} from './metrics'
import { Subchart } from "./subchart";
import { VisualizationPresentation } from "./visualizationpresentation";
import { Platform } from "./platform";
import { Service } from "./service";

@Entity('dashboard')
export class Dashboard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dashboard_id : string;

    @Column()
    platformId : number;

    @Column()
    serviceId : number;

    @Column("int", { array: true })
    position: number[];

    @Column()
    dashboard_name : string;

    @Column()
    isactive: boolean;
 
    @ManyToOne(type=>Platform, p=>p.dashboards)
    platform:Platform;

    @ManyToOne(type=>Service,s=>s.dashboards)
    service:Service

    @OneToMany(type=>VisualizationPresentation, vp=>vp.dashboard)
    visualizationpresentations:VisualizationPresentation[];



}