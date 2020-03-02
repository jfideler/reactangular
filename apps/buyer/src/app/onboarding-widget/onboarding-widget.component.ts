import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ra-app-onboarding-widget',
  templateUrl: './onboarding-widget.component.html',
  styleUrls: ['./onboarding-widget.component.scss']
})
export class OnboardingWidgetComponent {
  helpId = '#helpForTheOther';
  @ViewChild('helpForOne', { static: false }) _helpForOne: ElementRef;

  constructor(private router: Router) {}

  toggleTour() {
    this.router.navigate([{ outlets: { tour: null } }]);
  }

  // write help message to local storage
  setStorage(key: string, val: string) {
    localStorage.setItem(key, val);
  }


  helpWith(e: any, item: string) {
    if (!e.srcElement.checked) {
      return;
    }

    let url = 'http://localhost:4201';
    let feat = 'width=500,height=500';
    window.removeEventListener('message', this.handleMessage);

    switch (item) {
      case 'this':
        this.helpId = '#helpForOne';
        window.localStorage.setItem('helpWith', 'Shazam! This help message is here to help with Dashboard');
        window.addEventListener('message', this.handleMessage, false);
        break;

      case 'that':
        this.helpId = '#helpForThat';
        window.localStorage.setItem('helpWith', 'Shazam! That help message is here to help with findings');
        window.addEventListener('message', this.handleMessage, false);
        break;

      case 'the other':
        this.helpId = '#helpForTheOther';
        window.localStorage.setItem('helpWith', 'Shazam! The other help message is here to help with Viewer');
        window.addEventListener('message', this.handleMessage, false);
        break;

      default:
        feat = null;
        url = 'https://local-web.core.merrillcorp.com/viewer?projectId=5d2e2a858b09470011d8d269&documentId=5e4c2e60463a860f435a946e';
        window.localStorage.setItem('helpWith', 'Hey! it looks like you need some help in the DS1 Viewer!');
        window.addEventListener('message', this.handleMessage, false);
        break;

    }

    window.open(url, 'newwin', feat ? feat : null);
  }

  handleMessage(e: any) {
    console.log('tour is handling message from', e.origin, e, 'help:', this.helpId);
    let interval;
    const msg=window.localStorage.helpWith;

    const postmsg = function(win) {
      win.postMessage(msg + '<br>', '*');
    };

    // check the data from the receiving site...
    if (e.origin)
      switch (e.data) {
        // if sure it's ready, post the help message
        case 'ready':
          console.log('case ready', e);
          interval = setTimeout( postmsg, 1000, e.source);
          break;

        // if closed, clear the timer
        case 'closed':
          console.log('case closed', e);
          clearInterval(interval);
          break;
      }
  }
}
