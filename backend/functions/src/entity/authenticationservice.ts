import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Service} from './service';
import {Authentication} from './authentication';
import {AuthenticationMetrics} from './authenticationmetrics';

@Entity('authenticationservice')
export class AuthenticationService {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    ap_id:string;
    
    @Column()
    authenticationId: number;

    @Column()
    serviceId: number;

    @UpdateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
    //relations
    @ManyToOne((type => Service), service => service.authenticationServices)
    service: Service      

    @ManyToOne((type => Authentication), authentication => authentication.authenticationServices)
    authentication: Authentication  

    @OneToMany(type=>AuthenticationMetrics,am=>am.authenticationservice)
    authenticationMetrics : AuthenticationMetrics[]
}