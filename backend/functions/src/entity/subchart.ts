import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Visualization} from './visualization'
import {Chart} from './chart'

@Entity('subchart')
export class Subchart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chartId : number;

    @Column()
    subchart_name: string;

    @Column()
    reference_component : string;

    @ManyToOne(type=>Chart, c=>c.subcharts)
    chart: Chart;

    @OneToMany(type=>Visualization, v=>v.subchart)
    visualizations:Visualization[]

}