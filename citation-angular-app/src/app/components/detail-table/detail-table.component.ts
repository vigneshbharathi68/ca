import { Component, OnInit } from '@angular/core';
import { CitationService } from '../../services/citation.service'
import { Citation } from "../../Citation"

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})

export class DetailTableComponent implements OnInit {
  citationData: Citation[] = []

  constructor(private citationServices: CitationService) { }

  ngOnInit(): void {
    this.citationServices.getCitations().subscribe((citation) => this.citationData = citation)
  }
  get tableHead() {
    let result: string[] = []
    if (this.citationData[0] && this.citationData[0].Meta_info) {
      result = Object.keys(this.citationData[0].Meta_info)
    }
    return result
  }

  get tableData() {
    let result: object[] = []
    this.citationData.forEach(el => {
      result.push(el.Meta_info);
    })
    return result
  }

}
