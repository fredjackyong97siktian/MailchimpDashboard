import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Service} from './service';
import {Authentication} from './authentication';

@Entity('authentication_permission')
export class AuthenticationPermission {
    
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
    @ManyToOne((type => Service), service => service.authenticationPermissions)
    service: Service      

    @ManyToOne((type => Authentication), authentication => authentication.authenticationPermission)
    authentication: Authentication  
}