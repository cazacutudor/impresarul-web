import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menuItems = [
    {name: 'Industrii', route: '/dashboard/industries'},
    {name: 'Impresari', route: '/dashboard/impresarios'},
    {name: 'Talente', route: '/dashboard/talents'}

  ];

  constructor() {
  }

  selectedItem: any;

  ngOnInit() {

  }

}
