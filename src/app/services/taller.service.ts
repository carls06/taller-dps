import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
    providedIn: 'root',
})
export class TallerService {
    clientes: Cliente[] = [];
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

    getCliente()
    {
        return this.clientes;
    }

    eliminarCliente( dui: string ) {
        this.clientes = this.clientes.filter( listaCliente => listaCliente.dui !== dui );
        this.guardarStorage();

        return this.clientes;
    }











}


