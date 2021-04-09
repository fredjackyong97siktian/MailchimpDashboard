import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Metrics} from './metrics'
import { Subchart } from "./subchart";
import {VisualizationPresentation} from './visualpresentation';

@Entity('visualization')
export class Visualization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    metricsId : number;

    @Column()
    subchartId : number;

    @Column()
    default : boolean;

    @Column()
    api: string;

    @ManyToOne(type=>Subchart, sc=>sc.visualizations)
    subchart:Subchart;

    @ManyToOne(type=>Metrics, m=>m.visualizations)
    metrics:Subchart;

    @OneToMany(type=>VisualizationPresentation, vp=>vp.visualization)
    visualizationpresentations:VisualizationPresentation[];

}