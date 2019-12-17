import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask';
 
messages:any;
  onFileChange(event) {
   
    const size = event.srcElement.files[0].size;
    alert(size);
    if(size>=10000000)
    {
      this.messages="Sorry! Upload file is not more than 1MB";
     
    }
    else{
      this.messages="File Succesfully Updated...";
      
    }
  
}
}