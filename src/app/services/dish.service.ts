import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {Http,Response} from '@angular/http';

import { resolve } from 'q';
//import { setTimeout } from 'timers';

import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {ProcessHttpmsgService} from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {RestangularModule,Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from '../shared/restConfig';


@Injectable()
export class DishService {

  constructor(private restangular:Restangular,
  private processHTTPmsgService :ProcessHttpmsgService) { }

  getDishes(): Observable<any> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<any> {
     return this.restangular.one('dishes',id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured : true})
                    .map(dishes => dishes[0]);
                    
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => {return error;});
  }

}
