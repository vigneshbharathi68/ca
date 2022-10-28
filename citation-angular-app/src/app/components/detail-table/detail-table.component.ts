import { Component, OnInit } from '@angular/core';
import { CitationService } from '../../services/citation.service'

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {

  constructor(private citationServices: CitationService) { }

  ngOnInit(): void {
    this.citationServices.getCitations().subscribe((citation) => console.log(citation))
  }

}
