import { Component, OnInit } from '@angular/core';
import {ImpresarioService} from "../_services/impresario.service";

@Component({
  selector: 'app-impresarios',
  templateUrl: './impresarios.component.html',
  styleUrls: ['./impresarios.component.css']
})
export class ImpresariosComponent implements OnInit {

  constructor(private impresarioService: ImpresarioService) { }

  content: any;

  ngOnInit() {
    this.impresarioService.getAll().subscribe(result => this.content = result);
  }

}
