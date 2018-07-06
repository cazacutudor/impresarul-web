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
  successMessage: string;

  ngOnInit() {
    this.talentService.getAll().subscribe(result => this.content = result);
  }

  onRemoveClicked(id: string) {
    this.talentService.remove(id).subscribe(
      data => this.successMessage = 'Datele au fost sterse cu success !',
      error => console.log(error)
    );
  }

}
