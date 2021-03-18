import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';


@Injectable()
export class ActorMoviesService {

    constructor(private http: HttpClient) { }

    getMoviesByCriteria(query) {
        if (query.length > 0)
            return this.http.get(`https://api.themoviedb.org/3/search/person?api_key=07ceecc88ea4a1c377aa1a1950e0e784&language=en-US&query=${query}&include_adult=false&certification.lte=PG-13,PG,NR`);
        else 
            return EMPTY;
    }

}
