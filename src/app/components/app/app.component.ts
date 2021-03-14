import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/{
  title = 'angular-movies-search';
  /*handleSearch(value: string){
    console.log(value)
  }*/


  /*constructor(
    private _http: HttpClient
  ) {}*/

  /*ngOnInit(){
    this._http.get("https://www.omdbapi.com/?apikey=74c6b055&t=''*batman*'").subscribe(
    (videos: any[]) => this.videos = videos)
  }*/

  //videos = []
}
