import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Service} from './service';
import {Authentication} from './authentication';

@Entity('application')
export class Application {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    auth_method: string;

    @Column()
    direct_url_component: string;

    @Column()
    imglocation : string;

    //relations
    @OneToMany((type => Service), service => service.application)
    services: Service[]      

    @OneToMany((type => Authentication), authentication => authentication.application)
    authentications: Authentication[]   

}