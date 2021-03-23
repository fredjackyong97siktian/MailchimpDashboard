import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn,  OneToOne, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Application} from './application';
import {AuthenticationService} from './authenticationservice';
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
    
    @UpdateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
    
    //relations
    @ManyToOne((type => Application), application => application.authentications)
    application: Application;     

    @ManyToOne((type => Platform), platform => platform.authentications)
    platform: Platform;

    @ManyToOne((type=>UserAccount),useraccount => useraccount.authentications)
    userAccount : UserAccount;    
    
    @OneToMany((type => AuthenticationService), ap => ap.authentication)
    authenticationServices : AuthenticationService[] ;
}