import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn,OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import {Service} from './service';
import {Authentication} from './authentication';
import {AuthenticationService} from './authenticationservice';
import {Metrics} from './metrics';
import { VisualizationPresentation } from "./visualizationpresentation";

@Entity('authenticationmetrics')
export class AuthenticationMetrics {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    metrics_id:string;
    
    @Column()
    metricsId: number;

    @Column()
    authenticationserviceId: number;

    @UpdateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
    //relations
    @ManyToOne((type => Metrics), metrics => metrics.authenticationMetrics)
    metrics: Metrics      

    @ManyToOne((type => AuthenticationService), authenticationservice => authenticationservice.authenticationMetrics)
    authenticationservice: AuthenticationService  

    @OneToMany((type=>VisualizationPresentation),vp=>vp.authenticationmetrics)
    visualizationpresentation: VisualizationPresentation;
}