import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActorMoviesService } from "../../services/actor-movies-service";
import { Observable } from 'rxjs';

import { Results } from '../../common/interfaces'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  
  searchControl: FormControl;
  movies$: Observable<Results[]>;
  //displayedColumns: string[] = ['TITTLE', 'RELEASE DATE', 'POSTER'];


  constructor(private actorMoviesService: ActorMoviesService) { }

  ngOnInit() {
    console.log('Metodo onInit');

    this.searchControl = new FormControl();
    
    this.movies$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString =>  this.actorMoviesService.getMoviesByCriteria(searchString)
        ),
        map((res:any) => res.results)
      );
  //  this.clickFunction();
  }

  cleanFunction(){
    this.searchControl.setValue("");
    this.movies$ = this.searchControl.valueChanges
      .pipe(
        switchMap(
          searchString =>  this.actorMoviesService.getMoviesByCriteria("")
        ),
        map((res:any) => res.results)
      );
      this.ngOnInit();
  }

  //  clickFunction() 
  //  { 
  //    let URL_SERVICIOS = 'https://api.themoviedb.org/';
  //    let query: string;
  //    let page_number= 2;
  //    let pages$: Observable<Results[]>;
  //    this.movies$.forEach(function(results) {
  //      let i = 0;
  //      console.log('TODOS');
  //      console.log(results);
       /*Recorrer personas*/
      
  //     for (i=0;  i < results.length; i++)
  //     {
  //       console.log('uno');
  //       console.log(results[i].name);  
  //       query = results[i].name;
  //       //let url = this.URL_SERVICIOS + `3/search/person?api_key=07ceecc88ea4a1c377aa1a1950e0e784&language=en-US&query=${query}&page=${page_number}&include_adult=false&certification.lte=PG-13,PG,NR`;
  //       let url = `https://api.themoviedb.org/3/search/person?api_key=07ceecc88ea4a1c377aa1a1950e0e784&language=en-US&query=${query}&page=${page_number}&include_adult=false&certification.lte=PG-13,PG,NR`;

  //       console.log('URL');
  //       console.log(url);

  //       pages$ = this._http.get(url).pipe(
  //       map((resp: any) => {
  //         console.log('MAS');
  //         console.log(resp.results);
  //       return resp;
  //       }),);
  //     }
  //   })
  //   return null;
  // }
}