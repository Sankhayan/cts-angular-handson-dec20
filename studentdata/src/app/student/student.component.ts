import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  Student1 : string= "Sankhayan";
  marks1: number = 85;
  roll1 : number = 1;
  Student2 : string= "Soham";
  marks2 : number = 50;
  roll2 : number =2;
  Student3 : string= "Saurav";
  marks3: number = 80;
  roll3 : number = 3;

}
