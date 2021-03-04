import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, BeforeInsert, BeforeUpdate, AfterLoad, OneToMany} from "typeorm";
import {OauthLogin} from './oauth_login';

@Entity('oauth')
export class Oauth {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    oauth_name : string;

    @UpdateDateColumn()
    created_at : Date;

    @OneToMany((type => OauthLogin), oauthlogin => oauthlogin.oauth)
    oauthlogins: OauthLogin[]   
}