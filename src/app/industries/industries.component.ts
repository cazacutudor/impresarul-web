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

  successMessage: string;

  ngOnInit() {
    this.industryService.getAll().subscribe(result => this.content = result);
  }

  onRemoveClicked(id: string) {
    this.industryService.remove(id).subscribe(
      data => this.successMessage = 'Datele au fost sterse cu success !',
      error => console.log(error)
    );
  }

}
