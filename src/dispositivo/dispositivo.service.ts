import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DispositivoEntity} from "./Entity/dispositivo.entity";
import {Conexion} from "../ConexionSSH/Conexion";
import {Datos} from "../Modelo/Datos";

@Injectable()
export class DispositivoService {
public conexion = new Conexion();
    constructor(
        @InjectRepository(DispositivoEntity)
        private readonly dispositivoRepository: Repository<DispositivoEntity>
    ) {}


    async sendcomands(comandos:Datos):Promise<any>{
        if(!comandos){
            return {error:true,message:"Objeto de datos mal formado"}
        }
        let bandera:boolean=false;
      this.conexion.sendComands(comandos)
        // comandos.comandos.forEach((comand)=>{
        //   let response=  this.conexion.sendComands2(comand);
        //   if(!response){
        //       bandera=true;
        //       return
        //   }
        // })
        if(bandera){
            return await false
        }
        return await true
    }


}
