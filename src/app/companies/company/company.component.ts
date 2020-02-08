import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  Id: number;
  Compny: Company;
  Pid: number;
  displayedCol: string[] = ['name', 'teamSize'];

  constructor(private CompService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.Id = +paramMap.get('id');
      }
      this.Compny = this.CompService.getCompany(this.Id);
    });
  }
  onRowClick(row) {
    this.Pid = +row.id;
    this.router.navigate([this.Pid], { relativeTo: this.route });
  }
}
