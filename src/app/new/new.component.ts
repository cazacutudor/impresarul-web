import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IndustryService} from "../_services/industry.service";
import {ImpresarioService} from "../_services/impresario.service";
import {TalentService} from "../_services/talent.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  genders: string[] = [
    'masculin',
    'feminin',
    'neutru'
  ];

  domains: string[] = [
    'muzica',
    'teatru',
    'film'
  ];

  successMessage: string;
  type: string;

  talents: any;
  industries: any;
  impresarios: any;

  impresario: any;
  industry: any;

  constructor(private activatedRoute: ActivatedRoute,
              private industryService: IndustryService,
              private impreasrioService: ImpresarioService,
              private talentService: TalentService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.type = params['type'];
    });

    this.talentService.getAll().subscribe(
      data => this.talents = data
    );
    this.industryService.getAll().subscribe(
      data => this.industries = data
    );
    this.impreasrioService.getAll().subscribe(
      data => this.impresarios = data
    );
  }

  itsATalent(): boolean {
    return this.type === 'talent';
  }

  itsAnImpresario(): boolean {
    return this.type === 'impresario';
  }

  itsAnIndustry(): boolean {
    return this.type === 'industry';
  }

  onSubmit(value: any) {
    let service: any = null;

    if (this.type === 'industry') {
      service = this.industryService.new(value);
    } else if (this.type === 'impresario') {
      service = this.impreasrioService.new(value);
    } else if (this.type === 'talent') {
      service = this.talentService.new(value);
    }

    service.subscribe(
      data => this.successMessage = 'Datele au fost salvate cu succes !',
      error => console.log(error)
    );
  }

}
