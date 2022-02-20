import { Component, OnInit } from '@angular/core';
import { ExternalApiService } from '../../shared/services/external-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public quote;
  constructor(
    public externalApiService: ExternalApiService
  ) { }

  ngOnInit(): void {
  }

}
