import { DataService, SearchType } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  // count: string = '0';

  baseUrl:string = "https://api.github.com/search/repositories?per_page=5&q=react";

  /**
   * Constructor of our first page
   * @param dataService The data Service to get data
   */
  constructor(private dataService: DataService, private alertController: AlertController) {}

  ngOnInit() { }
 
  searchChanged() {
    console.log('----- searchChanged');
    // Call our service function which returns an Observable
    this.results = this.dataService.searchData(this.searchTerm, this.type);
    console.log('----- this.results 1',this.results);

    // this.count = '0';
    // this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Github Seach',
      subHeader: 'Error : ',
      message: 'Sorry, no result found.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
