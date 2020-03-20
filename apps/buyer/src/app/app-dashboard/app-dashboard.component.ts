import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ra-app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss','../app.component.scss']
})
export class AppDashboardComponent implements OnInit {

  helpText;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.helpText = null;
      if (params['helpWith']) {
        this.helpText = this.getStorage('helpWith');
      }
    });
  }

  getStorage(key: string) {
    return localStorage.getItem(key);
  }
}
