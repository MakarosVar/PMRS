import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  CompProfilebutton = false;
  CompRoute = '';
  routerSubscription: Subscription;
  Compid: string;

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof ActivationStart) {
        if (event.snapshot.paramMap.has('id')) {
          // console.log(event.snapshot.paramMap.get('id'));
          this.Compid = event.snapshot.paramMap.get('id');
          if (!isNaN(Number(this.Compid))) {
            this.CompRoute = 'companies/' + this.Compid;
            this.CompProfilebutton = true;
          }
        } else {
          this.CompRoute = '';
          this.CompProfilebutton = false;
          this.Compid = '';
        }
      }
    });
  }
}
