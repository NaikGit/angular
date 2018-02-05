import {Feedback} from '../shared/feedback';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {ProcessHttpmsgService} from './process-httpmsg.service';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {RestangularModule,Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from '../shared/restConfig';



@Injectable()
export class FeedbackserviceService {

  constructor(private restangular:Restangular,
    private processHTTPmsgService :ProcessHttpmsgService) { }

    submitFeedback(feedback :Feedback): Observable<Feedback> {
      console.log("In service ->"+feedback.firstname);
      return this.restangular.all('feedback').post('feedback');
    }
}
