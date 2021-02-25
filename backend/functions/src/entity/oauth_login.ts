import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, BeforeInsert, BeforeUpdate, AfterLoad, OneToMany} from "typeorm";
import {UserAccount} from './user_account';

@Entity('oauth_login')
export class OauthLogin {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    oauth_name : string;

    @UpdateDateColumn()
    created_at : Date;

}