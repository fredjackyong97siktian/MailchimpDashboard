import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Platform} from './platform';
import {OauthLogin} from './oauth_login';
import { IsEmail, IsNotEmpty} from "class-validator";
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

@Entity('user_account')
export class UserAccount {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_account_id: string;
    
    @Column({name: 'email'})
    @IsEmail({},{ message: 'Incorrect email'})
    @IsNotEmpty({ message: 'The email is required' })
    email : string; 

    @Column()
    password : string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

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
    mobile : string;

    @Column()
    forget_passcode : string;

    @Column()
    forget_passcode_receive_at : Date;

    @Column()
    email_verification_code: string;

    @Column()
    email_verification_code_sent_at : Date;

    @Column()
    email_verification_code_received_at : Date;
    
    @Column()
    isactive : boolean;

    @Column()
    last_login_at: Date;

    @Column()
    oauth_login_id: number;

    @Column()
    oauth_profile_id: string;

    @Column()
    accesstoken : string;
    
    //relations
    @OneToMany((type => Platform), platform => platform.user_account_id)
    platform: Platform[]

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if(this.password){
            const SALT_ROUNDS = 10
            this.password = await bcrypt.hashSync(this.password, SALT_ROUNDS);
        }
    }

    /*@BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        if(this.password){
            this.password = createHmac('sha256', this.password).digest('hex');
        }
    }*/

    @BeforeInsert()
    @BeforeUpdate()
    emailVerification() {
        if(!this.oauth_login_id && !this.oauth_profile_id){
            this.email_verification_code = uuidv4();
            this.email_verification_code_sent_at = new Date();
        }
    }

    

}