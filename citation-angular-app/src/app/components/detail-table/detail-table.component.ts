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
  get tableHead(): string[] {
    let result: Array<keyof TableData> | string[] = []
    if (this.citationData[0] && this.citationData[0].Meta_info) {
      result = Object.keys(this.citationData[0].Meta_info)
    }
    return result
  }

  get tableData(): Array<TableData | any> {
    let result: Array<TableData> = []
    this.citationData.forEach(el => {
      result.push(el.Meta_info);
    })
    return result
  }

}


interface TableData {
    jur?: string,
    type?: string,
    startpage?: string,
    coram?: string,
    series?: string,
    year?: string,
    casename?: string,
    courtid?: string,
    court?: string,
    decdate_year?: string,
    decdate_month?: string,
    decdate_day?: string,
    citation?: string,
    LNI?: string,
    pcsi?: string,
    docid?: string,
    dpsi?: string,
    parallel_citation?: string,
    normalization?: object,
    insertedOn?: string,
    lastModifiedOn?: string,
  }
