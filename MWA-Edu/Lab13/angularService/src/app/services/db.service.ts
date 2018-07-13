import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  data;
    constructor() {
        const obj1 = {_id: 1 , farm: 'Sprouts Farmers', produce: ['Cucumber', 'Orange']};
        const obj2 = {_id: 2, farm: 'Ever green', produce: ['Strawberry', 'Pineapple']};
        this.data = [obj1, obj2];
    }

    getData() {
        return this.data;
    }
}
