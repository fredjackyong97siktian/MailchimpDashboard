import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Metrics} from './metrics'
import { Subchart } from "./subchart";
import { VisualizationPresentation } from "./visualpresentation";
import { Platform } from "./platform";

@Entity('dashboard')
export class Dashboard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dashboard_id : string;

    @Column()
    platformId : number;

    @Column()
    dashboard_name : string;

    @Column()
    isactive: boolean;
 
    @Column()
    iscustom: boolean;

    @ManyToOne(type=>Platform, p=>p.dashboards)
    platform:Platform;

    @OneToMany(type=>VisualizationPresentation, vp=>vp.dashboard)
    visualizationpresentations:VisualizationPresentation[];

}