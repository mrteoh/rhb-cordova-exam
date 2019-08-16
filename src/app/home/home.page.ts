import { Component } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  baseUrl:string = "http://localhost:3000";


  constructor(private  httpClient : HttpClient) { }

    // Sending a GET request to /products

    public  getProducts(){

  }

}
