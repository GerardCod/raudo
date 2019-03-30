import { Pipe, PipeTransform } from '@angular/core';
import { APÏ_URL } from '../global/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return APÏ_URL + 'images/stations/' + value;
  }

}
