import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Planeta } from '../entidades/planeta';
import { PlanetaService } from '../service/planeta.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //funcionalidades del modal
  @Input() visible!: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  //variable id auxiliar
  @Input() getId!: number;

  //objeto planeta
  planeta: Planeta = new Planeta();

  //para formularios
  formularioCreado!:FormGroup;

  constructor(
    private service: PlanetaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    //para las validaciones
    this.crearFormulario();

    if(this.getId != 0){
      this.getOne(this.getId);
    }
    
  }

  //-------- Metodo ~ Trae el registro elegido
  getOne(id: number) {    
    this.service.getOne(id).subscribe(data => {
      this.planeta = data;
      console.log(this.planeta);
    });
  }

  //-------- Metodo ~ Cierra el modal
  cancelar(){
    this.close.emit(false);
    location.reload();
  }

  //-------- Metodo ~ Guarda el contenido del modal
  save(id:number){
    this.service.post(this.planeta).subscribe(
      data => {
        console.log(data);
        if(id===0){
          alert("¡Planeta guardado con exito!");
          this.formularioCreado.reset();
        } else {
          alert("¡Planeta actualizado con exito!");
        }  
      }
    );
  }

  //-------- Metodo ~ Validaciones
  crearFormulario(){
    this.formularioCreado = this.formBuilder.group(
      {
        name: ["", Validators.compose(
          [Validators.required, Validators.pattern('[0-9a-zA-Z ]*')]
        )],
        size: ["", Validators.compose(
          [Validators.required, Validators.pattern('[0-9]*')]
        )]
      }

    );
  }



}
