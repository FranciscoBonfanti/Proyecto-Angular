import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.css']
})
export class Componente1Component implements OnInit{
  public titulo!:string;

  ngOnInit(): void {
    this.titulo = 'Hola Mundo';
  }
}
