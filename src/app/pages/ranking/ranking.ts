import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.scss'],
  imports:[CommonModule]
})
export class RankingComponent implements OnInit {
  topPlayers: any[] = [];

  constructor(private http: HttpClient,private router: Router,private location: Location) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/ranking').subscribe(data => {
      this.topPlayers = data;
    });
  }
   volverAlInicio(): void {
    this.location.back();
  }
  getMedal(index: number): string {
    return ['🥇', '🥈', '🥉'][index] || '';
  }
}
