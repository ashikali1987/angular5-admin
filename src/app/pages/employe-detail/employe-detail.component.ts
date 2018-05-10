import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {

  public id;

  constructor( private actRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    //this.id = parseInt(this.actRoute.snapshot.params['id']);
    this.id = this.actRoute.params.subscribe((param: Params) => {
        let paramsId = parseInt( param['id']);
        this.id = paramsId;
    })
  }

  goPrev(){
    let previousId = this.id - 1;
    this.router.navigate(['/employee-detail' , previousId ]);
  }
  goNext(){
    let nexId = this.id + 1;
    this.router.navigate(['/employee-detail' , nexId ]);
  }

}
