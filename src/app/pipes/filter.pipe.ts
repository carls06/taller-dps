import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cliente: Cliente[], dui: string): Cliente[] {

    if (dui === "") {
      return cliente;
    } else {
      return cliente.filter( resp =>  resp.dui === dui );
    }

  }

}
