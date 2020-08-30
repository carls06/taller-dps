import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';



@Injectable({
    providedIn: 'root',
})
export class TallerService {
    clientes: Cliente[] = [];
    clienteTem:Cliente[] = [];
    clienteTem2:Cliente[] = [];

    
    constructor() {
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.clientes));
    }

    crearCliente(data: Cliente){
        this.clientes.push(data);
        this.guardarStorage();        
    }

    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.clientes = JSON.parse(localStorage.getItem('data'));
        }
        return this.clientes;
    }

    

    eliminarCliente( dui: string ) {
        this.clientes = this.clientes.filter( listaCliente => listaCliente.dui !== dui );
        this.guardarStorage();

        return this.clientes;
    }

    actualizarVisitas(dui:string){

         this.clienteTem = this.clientes.filter(visitaCliente=>visitaCliente.dui===dui);

         this.eliminarCliente(dui);
         this.clienteTem=this.clienteTem.map((dato:Cliente)=>{
              
            if(dato.dui === dui){
                
                dato.visita = dato.visita+1;
                
              }
              return dato;
            });
         
           // console.log(this.clienteTem);
            
        return this.crearCliente(this.clienteTem[0]);

         //return this.clienteTem;


    }



    monto:number=0;
    calculoPago(pago:number,dui:string){

        this.clientes.map((dato:Cliente)=>{

            if (dato.dui===dui) {
                if (dato.visita>=0 &&dato.visita<3) {
                    this.monto=pago;

                    return this.monto;
                }
                else if (dato.visita>=3 &&dato.visita<4) {
                    let desc= 0;          
                    desc=pago*0.05;

                    return this.monto = pago-desc;
                }
                else if (dato.visita>=4 ) {
                    let desc= 0;          
                    desc=pago*0.10;
                    return this.monto= pago-desc;
                }
                
            }
        });

        console.log(this.monto);
        

        return this.monto;
    }







}


