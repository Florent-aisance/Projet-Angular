import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorldTimeData } from './model/worldtimedata';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient:HttpClient) {}

  getTime():Observable<IWorldTimeData> {
    return this.httpClient.get<IWorldTimeData>("http://worldtimeapi.org/api/timezone/europe/Paris")
  }
}