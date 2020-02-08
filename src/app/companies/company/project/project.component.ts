import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
import { Company } from '../../company.model';
import { Project } from '../project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  Cid: number;
  Comp: Company;
  Pid: number;
  Proj: Project;
  constructor(private ComService: CompanyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.Cid = +paramMap.get('id');
        this.Comp = this.ComService.getCompany(this.Cid);
      }
      if (paramMap.has('pid')) {
        this.Pid = +paramMap.get('pid');
        this.Proj = this.Comp.Projects[this.Pid];
      }
    });
  }

}
