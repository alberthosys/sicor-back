import {Body, Controller, Post} from '@nestjs/common';
import {Datos} from "../Modelo/Datos";
import {DispositivoService} from "./dispositivo.service";

@Controller('dispositivo')
export class DispositivoController {

    constructor(
      public  dispositivoService:DispositivoService
    ) {
    }

    @Post('sendcomands')
    async sendcomands(@Body() datos: Datos):Promise<any>{
        return await this.dispositivoService.sendcomands(datos);
    }


}



