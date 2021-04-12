import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany, OneToOne} from "typeorm";
import {Metrics} from './metrics'
import { Subchart } from "./subchart";
import { Visualization } from "./visualization";
import { Dashboard } from "./dashboard";
import {AuthenticationMetrics} from './authenticationmetrics';

@Entity('visualizationpresentation')
export class VisualizationPresentation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    visualizationId : number;

    @Column()
    authenticationmetricsId : number;

    @Column()
    business_informationId : string;

    @Column()
    dashboardId : number;

    @ManyToOne(type=>Visualization, v=>v.visualizationpresentations)
    visualization:Visualization;

    @ManyToOne(type=>Dashboard, d=>d.visualizationpresentations)
    dashboard:Dashboard;

    @ManyToOne(type=>AuthenticationMetrics,am=>am.visualizationpresentation,{
        cascade: true, // <= here
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    authenticationmetrics: AuthenticationMetrics;
}