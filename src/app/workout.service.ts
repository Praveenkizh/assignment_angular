import { Injectable } from '@angular/core';
import { workout } from './workout';
import { WORKOUT } from './mock-workout'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WorkoutService {
  private workouturl : 'http://localhost:3000/workout';
  constructor(private http: HttpClient) { }
  getWorkouts(): Observable<workout[]> {
    return this.http.get<workout[]>('http://localhost:3000/workout');
  }
  
}
