import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vttp5_csf_day01task';

  increment = 1;
  number = 12;
  blankUrl = "numbers\\number";
  fileExtension = ".jpg";
  fileUrl = this.blankUrl + this.number + this.fileExtension;

  imageUrl= "numbers\\number2.jpg";

  changeIncrement(event : any){
    console.log("THE EVENT TARGET VALUE:" + event.target.value);
    this.increment = parseInt(event.target.value);
    
  }



  previousClick(){
    this.number-= this.increment;
    if(this.number < 0){
      this.number +=31;
    }
    console.log(this.number)
    console.log(this.fileUrl)
    this.fileUrl = this.blankUrl + this.number + this.fileExtension;
  }

  nextClick(){
    this.number+= this.increment;
    if(this.number > 30){
      this.number-=31;
    }
    console.log(this.number)
    console.log(this.fileUrl)
    this.fileUrl = this.blankUrl + this.number + this.fileExtension;
  }
  
}
