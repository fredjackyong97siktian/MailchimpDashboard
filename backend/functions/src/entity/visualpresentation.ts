import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Metrics} from './metrics'
import { Subchart } from "./subchart";
import { Visualization } from "./visualization";
import { Dashboard } from "./dashboard";

@Entity('visualization_presentation')
export class VisualizationPresentation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    visualizationId : number;

    @Column()
    business_informationId : string;

    @Column()
    dashboardId : number;

    @Column()
    position: number;

    @ManyToOne(type=>Visualization, v=>v.visualizationpresentations)
    visualization:Visualization;

    @ManyToOne(type=>Dashboard, d=>d.visualizationpresentations)
    dashboard:Dashboard;

}