import { Module } from '@nestjs/common';
import { DispositivoController } from './dispositivo.controller';
import { DispositivoService } from './dispositivo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DispositivoEntity} from "./Entity/dispositivo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DispositivoEntity])],
  controllers: [DispositivoController],
  providers: [DispositivoService]
})
export class DispositivoModule {}
