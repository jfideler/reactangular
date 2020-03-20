import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ra-app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.css','../app.component.scss']
})
export class FindingsComponent implements OnInit {

  helpText;;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.helpText = null;
      if (params['helpWith']) {
        this.helpText = this.getStorage('helpWith');
      }
    });
  }

  getStorage(key: string){
    return localStorage.getItem(key);
  }
}
