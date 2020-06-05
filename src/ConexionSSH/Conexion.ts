import {Datos} from "../Modelo/Datos";
import SSH2Promise = require('ssh2-promise');
import {retry} from "rxjs/operators";
import retryTimes = jest.retryTimes;

export class Conexion {

    async sendComands(datos: Datos): Promise<any> {
        try {
            var SSH = require('simple-ssh');
            var ssh = new SSH({
                host: '187.226.13.174',
                user: 'root',
                pass: 'W01fM3xic0+1'
            });


            datos.comandos.forEach((comand) => {
                console.log('---------------------' + comand + '-----------------------')
                ssh
                    .exec(comand, {
                        out: async function (stdout) {
                            console.log("UNO->" + stdout);
                            return await true;
                        },
                        err: async function (stderr) {
                            console.log("DOS->" + stderr);
                            return await false;
                        }
                    })

            })
            ssh.start()
        } catch (e) {
            return await {error: true, message: "Algo salio mal con la llamada SSH"}
        }
    }

    async sendComands2(datos: string): Promise<any> {

        var sshconfig2 = {
            host: '187.225.201.209',
            username: 'root',
            password: 'W01fM3xic0+1'
        }

        var ssh = new SSH2Promise([sshconfig2]);

        try {
            //Get a shell session
           return await (async function(){
               var data = await ssh.exec(datos);
               console.log(data); //ubuntu
               return true;
           })().catch(err=> {
               console.log("ERROR->",err)
               return  false
           });

        } catch (err) {
            return await {error: true}
        }

    }

}
