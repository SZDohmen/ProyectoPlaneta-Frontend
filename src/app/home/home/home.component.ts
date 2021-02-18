import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/entidades/planeta';
import { PlanetaService } from 'src/app/service/planeta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //variable para pipe
  filterPost = '';

  //variables para modal
  myModal=false;
  idModal!:number;

  //variables para destroyed
  myDestroy=false;

  //objeto planetas
  planetas: Planeta[] = [];
  
  constructor (private service: PlanetaService) {}

  ngOnInit(): void {
    this.getAll();
  }

  //-------- Metodo ~ Trae todos los datos del Backend
  getAll() {
    this.service.getAll().subscribe(
      data => {
        this.planetas = data;
      }
    );
  }

  //-------- Metodo ~ Elimina carta correspondiente
  delete(id:number) {
    this.myDestroy=true;
    this.service.delete(id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  //-------- Metodo ~ Despliega el modal
  edit(id:number){
    this.myModal=true;
    if(id != 0){
      console.log(id);
      this.idModal = id;
    } else {
      this.idModal = 0;
    }
  }

  //-------- Metodo ~ Cierra el modal
  closeModal(e:any){
    this.myModal = e; //= false --> ya que llega desde el modal
    this.myDestroy = e;
  }



}