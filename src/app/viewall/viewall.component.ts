import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { workout } from '../workout';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  workouts : workout[];
  constructor(private workoutservice: WorkoutService) { }
  getWorkouts() : void{
    this.workoutservice.getWorkouts().subscribe(workouts => this.workouts = workouts);
  }

  ngOnInit() {
    this.getWorkouts();
  }

}
