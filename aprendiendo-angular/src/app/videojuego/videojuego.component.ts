import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "videojuego",
  templateUrl: "./videojuego.component.html"
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public title: string;
  public listado: string;

  constructor(){
    this.title = "Componente de videojuegos";
    this.listado = "Listado de los juegos más populares";
    //console.log("Se ha cargado el componente: videojuego.component.ts");
  }

  ngOnInit(){
    //console.log("OnInit ejecutado");
  }

  ngDoCheck(){
    //console.log("DoCheck ejecutado");
  }

  ngOnDestroy(){
    //console.log("OnDestroy Ejecutado");
  }

  cambiarTitulo(){
    this.title = "Nuevo Titulo del componente";
  }
}
