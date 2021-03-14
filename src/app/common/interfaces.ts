export interface PeopleData{
    page: string,
    results: Results[],
    total_pages: number,
    total_results: number
}

export interface Results{
    adult: string,
    gender: number,
    id: number,
    known_for: KnownFor[],        
    known_for_department: string,
    name: string,
    popularity: number,
    profile_path: string
}

export interface KnownFor{
    adult: boolean,
    backdrop_path: string,
    genre_ids: any[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}