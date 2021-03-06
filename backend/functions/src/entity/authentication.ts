import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn,  OneToOne, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Application} from './application';
import {AuthenticationPermission} from './authentication_permission';
import {Platform} from './platform';
import {UserAccount} from './user_account';
@Entity('authentication')
export class Authentication {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    authentication_id: string;

    @Column()
    userAccountId: number;

    @Column()
    applicationId: number;

    @Column()
    platformId : number;

    @Column()
    access_token : string;

    @Column()
    token_type : string;

    @Column()
    expired_in : number;

    @Column()
    refresh_token : string;
    
    @UpdateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
    
    //relations
    @ManyToOne((type => Application), application => application.authentication)
    application: Application;     

    @OneToMany((type => AuthenticationPermission), ap => ap.authentication)
    authenticationPermission : AuthenticationPermission[] ;

    @ManyToOne((type => Platform), platform => platform.authentications)
    platform: Platform;

    @ManyToOne((type=>UserAccount),useraccount => useraccount.authentications)
    userAccount : UserAccount;    
}