import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ra-app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

    route.params.subscribe(params => console.log("dashboard id parameter",params['id']));

  }

  ngOnInit(){

  }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, stepper:path}}],
                         {relativeTo: this.route});
}

}
