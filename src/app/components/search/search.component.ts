import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActorMoviesService } from "../../services/actor-movies-service";
import { Observable } from 'rxjs';

import { PeopleData } from '../../common/interfaces'

import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchControl: FormControl;
  movies$: Observable<PeopleData>;
  displayedColumns: string[] = ['tittle', 'release_date', 'poster'];
  /*ELEMENT_DATA: PeopleData[] = [];
   dataSource = new MatTableDataSource<PeopleData>(this.ELEMENT_DATA);*/
  //imagePath$: 'https://www.themoviedb.org/t/p/w180_and_h180_face/';

  constructor(private actorMoviesService: ActorMoviesService) { }

  ngOnInit() {
    console.log('Metodo onInit');
    
    this.searchControl = new FormControl();

    this.movies$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.actorMoviesService.getMoviesByCriteria(searchString)
        ),
        map((res:any) => res.results)
      );
    /*this.getElements();*/
  }

  /*public getElements(){
    console.log('Metodo getElements');
    let resp = this.actorMoviesService.getMoviesByCriteria('John Travolta');
    resp.subscribe(report => this.dataSource.data = report as PeopleData[]);
    console.log(this.ELEMENT_DATA);
  }*/
}



