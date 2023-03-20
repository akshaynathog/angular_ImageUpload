import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question : string;
  image:File;

  constructor(private http:HttpClient){}

  onTitleChanged(event:any){
    this.question=event.target.value;
  }

  onImageChanged(event:any){
    this.image=event.target.files[0];
  }

  newBook(){
    const uploadData = new FormData();
    uploadData.append('question', this.question);
    uploadData.append('image', this.image, this.image.name);
    this.http.post('http://127.0.0.1:8000/api/questions/',uploadData).subscribe(
      data=> console.log(data),
      error=> console.log(error),
    );

  }
}
