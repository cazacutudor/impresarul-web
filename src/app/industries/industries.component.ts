import {Component, OnInit} from '@angular/core';
import {IndustryService} from "../_services/industry.service";

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor(private industryService: IndustryService) {
  }

  content: any;

  ngOnInit() {
    this.industryService.getAll().subscribe(result => this.content = result);
  }

}
