import { Component, OnInit} from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'sector', 'size'];
  companies: Company[] = [];
  constructor(private CmpService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.companies = this.CmpService.getCompanies();
  }

  onRowClicked(row) {
    const id: number = +row.id;
    this.router.navigate([id], { relativeTo: this.route });
}
}
