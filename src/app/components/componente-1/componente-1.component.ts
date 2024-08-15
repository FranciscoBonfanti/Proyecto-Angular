import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-1',
  templateUrl: './componente-1.component.html',
  styleUrls: ['./componente-1.component.css']
})
export class Componente1Component implements OnInit{
  public titulo!:string;

  ngOnInit(): void {
    this.titulo = 'Hola Mundo';
  }
}
