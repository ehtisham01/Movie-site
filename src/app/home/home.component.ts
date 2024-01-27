import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }

  trendingMovies: any = [];
  popularMovies: any = [];
  theatreMovies: any = [];

  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((response) => {
        this.trendingMovies = response;
        console.log(response);
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((response) => {
        this.popularMovies = response;
        console.log(response);
      });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((response) => {
        this.theatreMovies = response;
        console.log(response);
      });
  }

  openMovie(type: any, Id: string) {
    this.route.navigate(['movie', type, Id]);
  }
}
