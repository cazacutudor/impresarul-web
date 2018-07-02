import {Component, OnInit} from '@angular/core';
import {TalentService} from "../_services/talent.service";

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  constructor(private talentService: TalentService) {
  }

  content: any;

  ngOnInit() {
    this.talentService.getAll().subscribe(result => this.content = result);
  }

}
