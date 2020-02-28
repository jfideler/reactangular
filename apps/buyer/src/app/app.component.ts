import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { unicornRocket } from '@ra-app/utilities';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ra-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = `${unicornRocket} buyer side manda-app`;

  ngOnInit(): void {
  }

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  navigate(path) {
    this.router.navigate([{ outlets: { primary: path, stepper: path } }], {
      relativeTo: this.route
    });
  }

}
