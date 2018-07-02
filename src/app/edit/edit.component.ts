import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImpresarioService} from '../_services/impresario.service';
import {IndustryService} from '../_services/industry.service';
import {TalentService} from '../_services/talent.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  id: number;
  type: string;

  name: string;
  shortName: string;
  shortDescription: string;

  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  domain: string;
  description: string;

  constructor(private activatedRoute: ActivatedRoute,
              private industryService: IndustryService,
              private impreasrioService: ImpresarioService,
              private talentService: TalentService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.type = params['type'];
    });

    this.getData().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.shortName = data.shortName;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.phone = data.phone;
      this.email = data.email;
      this.age = data.age;
      this.gender = data.gender;
      this.domain = data.domain;
      this.description = data.description;
      this.shortDescription = data.shortDescription;
    });
  }

  getData() {
    let data = null;

    if (this.type === 'industry') {
      data = this.industryService.get(this.id.toString());
    } else if (this.type === 'impresario') {
      data = this.impreasrioService.get(this.id.toString());
    } else if (this.type === 'talent') {
      data = this.talentService.get(this.id.toString());
    }

    return data;
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
    console.log(value);
  }

}
