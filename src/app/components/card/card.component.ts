import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cliente: Cliente;  

  constructor() { }

  ngOnInit(): void {
  }

}
