import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, RouterEvent, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  title = 'PMRS';
  ngOnInit() {
  }
}

