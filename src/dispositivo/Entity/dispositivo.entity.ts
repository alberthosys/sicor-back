import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('dispositivo')
export class DispositivoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ip: string

    @Column()
    usuario: string

    @Column()
    clave: string

    @Column()
    fechaRegistro: Date;
}
