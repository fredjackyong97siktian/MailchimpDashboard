import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {UserAccount} from './user_account';
import {Authentication} from './authentication';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

@Entity('platform')
export class Platform {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    platform_id: string;
    
    @Column()
    platform_name : string; 

    @Column()
    userAccountId : number;

    @Column()
    company_name: string;

    @Column()
    company_website: string;

    @Column()
    address1 : string;

    @Column()
    address2 : string;

    @Column()
    city : string;

    @Column()
    state : string;

    @Column()
    postal_code : string;

    @Column()
    country : string;

    @Column()
    phone_code : string;

    @Column()
    mobile : string;

    @ManyToOne(type => UserAccount, user_account => user_account.platforms)
    userAccount : UserAccount;

    @OneToMany(type => Authentication , authentication => authentication.platform)
    authentications: Authentication[];

}