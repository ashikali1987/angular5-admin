import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employess: any = [];

  constructor( private config : ConfigService ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
      this.config.getData().subscribe( 
        data => {
          this.employess = data;
        }
      )
  }
  
}
