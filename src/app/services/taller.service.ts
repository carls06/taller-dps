import { Injectable } from '@angular/core';
import { Taller } from '../models/cliente.model';


@Injectable({
    providedIn: 'root',
})
export class TallerService {
    clientes: Taller[] = [];
    constructor() {
        this.cargarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.clientes));
    }

    crearCliente(dui:string){
        const nuevaLista=new Taller(dui);
        this.clientes.push(nuevaLista);
        this.guardarStorage();
        return nuevaLista.dui;
        
    
       }

    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.clientes = JSON.parse(localStorage.getItem('data'));
        }
    }











}


