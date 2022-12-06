import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseTitle=""
  description=""
  courseDate=""
  duration=""
  venue=""
  constructor(private api:ServicesService){}

  readValues=()=>{
    let data:any={courseTitle:this.courseTitle,
      description:this.description,
      courseDate:this.courseDate,
      duration:this.duration,
      venue:this.venue
    }
  this.api.addCourse(data).subscribe(
    (response)=>{
      console.log(response)
      alert("Data Added")
    }
  )  


  }

}
