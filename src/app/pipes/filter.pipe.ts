import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cliente: Cliente[], dui: string): Cliente[] {

    console.log(cliente);
    console.log("dui", dui);
    
    

    if (dui === "") {
      return cliente;
    } else {
      return cliente.filter( resp =>  resp.dui === dui );
    }

  }

}
