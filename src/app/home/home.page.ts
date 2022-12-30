import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstName: any;
  lastName: any;
  constructor(private http: HttpClient) {}

  onClick(){
    
    const data =  {

      first_name : this.firstName,
      last_name : this.lastName
    };

    this.http.post("http://localhost/backend/public/api/register", data).subscribe((response: any) => {
        console.log(response);
    });
  }
}
