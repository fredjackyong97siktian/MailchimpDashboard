import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne } from "typeorm";
import {UserAccount} from './user_account';
import {Oauth} from './oauth';
@Entity('oauth_login')
export class OauthLogin{
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    userAccountId : number;

    @Column()
    oauthId : number;

    @Column()
    oauth_profile_id : string;

    @Column()
    access_token : string;

    @Column()
    refresh_token : string;

    @UpdateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;

    @ManyToOne(type => UserAccount, useraccount => useraccount.oauthlogins)
    userAccount : UserAccount;

    @ManyToOne(type => Oauth, oauth => oauth.oauthlogins)
    oauth : Oauth;
    
}