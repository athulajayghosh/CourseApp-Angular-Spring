import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.css']
})
export class ViewAllCourseComponent {

  constructor(api:ServicesService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
}
