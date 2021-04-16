import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Subchart} from './subchart';
import { Chart } from "./chart";

@Entity('charttype')
export class ChartType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @OneToMany(type=>Chart, c=>c.charttype)
    charts:Chart[]

}