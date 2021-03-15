import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'sortyearpipe'
})

export class SortYearPipe implements PipeTransform {
    transform(value: Array<any>, args?: any): any {
        return value.sort((a,b)=>{
            let x = a.release_date;
            let y = b.release_date;
            let result = 0; 
            if (x<y) {
                result = -1;
            } else {
                result = 1;
            }
            return result;
        })
    }
}