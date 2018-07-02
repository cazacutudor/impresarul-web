import {Component, OnInit} from '@angular/core';
import {IndustryService} from "../_services/industry.service";
import {ImpresarioService} from "../_services/impresario.service";
import {TalentService} from "../_services/talent.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private industryService: IndustryService,
              private impreasrioService: ImpresarioService,
              private talentService: TalentService) {
  }

  industries: any;
  impresarios: any;

  ngOnInit() {
    this.industryService.getAll().subscribe(result => this.industries = result);
    this.impreasrioService.getAll().subscribe(result => this.impresarios = result);
    this.talentService.getAll().subscribe(result => console.log(result));
  }

}
