import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ActorMoviesService {

    constructor(private http: HttpClient) { }

    getMoviesByCriteria(query) {
        //return this.http.get(`https://www.omdbapi.com/?apikey=d3f6c0ee&s=${query}`);
        return this.http.get(`https://api.themoviedb.org/3/search/person?api_key=07ceecc88ea4a1c377aa1a1950e0e784&language=en-US&query=${query}&page=1&include_adult=false`);
    }

}
