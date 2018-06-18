import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { workout } from '../workout';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private workout:workout;

  constructor() { }

  ngOnInit() {
    this.workout = new workout({"title":"", "note":""});
  }

  onSubmit(){
    alert("clicked Submit");
  }

}
