import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appPov'
})
export class PovPipe implements PipeTransform {
    transform(value: number, powNumver: number = 1) {
        return Math.pow(value, powNumver);
    }
}
