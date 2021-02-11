import { Pipe, PipeTransform } from '@angular/core';
import { Planeta } from '../entidades/planeta';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(planetas: Planeta[], texto: string): Planeta[] {

        if (texto.length === 0) {
            return planetas;
        }
        texto = texto.toLocaleLowerCase();
        return planetas.filter(
            planeta => {
                return planeta.name.toLocaleLowerCase().includes(texto);
            }
        );
    }
}