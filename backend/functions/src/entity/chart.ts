import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Subchart} from './subchart';

@Entity('chart')
export class Chart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @OneToMany(type=>Subchart, sc=>sc.chart)
    subcharts:Subchart[]

}