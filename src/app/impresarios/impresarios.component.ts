import {Component, OnInit} from '@angular/core';
import {ImpresarioService} from "../_services/impresario.service";
import {IndustryService} from "../_services/industry.service";

@Component({
  selector: 'app-impresarios',
  templateUrl: './impresarios.component.html',
  styleUrls: ['./impresarios.component.css']
})
export class ImpresariosComponent implements OnInit {

  constructor(private impresarioService: ImpresarioService,
              private industryService: IndustryService) {
  }

  content: any;

  successMessage: string;

  industries: any;

  ngOnInit() {
    this.industryService.getAll().subscribe(response => this.industries = response);
    this.impresarioService.getAll().subscribe(response => this.content = response);
  }

  findIndustryName(id: string) {
    const industry = this.industries.find(entry => entry.id === id);

    return industry.name;
  }

  onRemoveClicked(id: string) {
    this.impresarioService.remove(id).subscribe(
      data => this.successMessage = 'Datele au fost sterse cu success !',
      error => console.log(error)
    );
  }
}
