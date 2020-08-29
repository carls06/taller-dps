import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  constructor() { }
}



export interface taller{
    nombre:string;
    dui:string;
    vehiculo:string;
    costo:number;

}