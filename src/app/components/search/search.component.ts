import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActorMoviesService } from "../../services/actor-movies-service";
import { Observable } from 'rxjs';

import { PeopleData } from '../../common/interfaces'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  searchControl: FormControl;
  movies$: Observable<PeopleData>;

  constructor(private actorMoviesService: ActorMoviesService) { }

  ngOnInit() {
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
  }
}
