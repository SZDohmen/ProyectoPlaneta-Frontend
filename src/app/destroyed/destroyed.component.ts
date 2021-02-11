import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-destroyed',
  templateUrl: './destroyed.component.html',
  styleUrls: ['./destroyed.component.scss']
})
export class DestroyedComponent implements OnInit {

  //funcionalidades del modal
  @Input() vDes!: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  //-------- Metodo ~ Cierra el modal
  cancelar(){
    this.close.emit(false);
    location.reload();
  }
}
