import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CompanyService } from '../../company.service';
import { Company } from '../../company.model';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  Company: Company;
  CompId: number;
  id: number;
  @ViewChild('PForm', { static: true }) ProjectForm: NgForm;
  name: string;
  duration: number;
  objectives: number;
  budgetSupport: number;
  size: number;
  tech: number;
  modularity: number;
  Infrastructure: number;
  teamSize: number;
  TeamCommit: number;
  TaskSkill: number;
  TechKnow: number;
  InternalComm: number;
  ExecSponsor: number;
  ClientInvolv: number;
  ClientIT: number;
  Requirements: number;
  Roles: number;
  constructor(private CompService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.CompId = +paramMap.get('id');
        this.Company = this.CompService.getCompany(this.CompId);
        this.id = this.Company.Projects.length;
      }
    });
  }
  onSaveProj(PForm: NgForm) {
    if (PForm.invalid) {
      this.ProjectForm.reset();
    } else {
      if (this.ProjectForm.value.name.trim() !== '') {
        this.name = this.ProjectForm.value.name.trimStart();
        this.name = this.name.trimEnd();
        this.duration = this.ProjectForm.value.duration;
        this.objectives = this.ProjectForm.value.objectives;
        this.budgetSupport = this.ProjectForm.value.budgetSupport;
        this.size = this.ProjectForm.value.size;
        this.tech = this.ProjectForm.value.tech;
        this.modularity = this.ProjectForm.value.modularity;
        this.Infrastructure = this.ProjectForm.value.Infrastructure;
        this.TaskSkill = this.ProjectForm.value.TaskSkill;
        this.teamSize = this.ProjectForm.value.teamSize;
        this.TeamCommit = this.ProjectForm.value.TeamCommit;
        this.TechKnow = this.ProjectForm.value.TechKnow;
        this.InternalComm = this.ProjectForm.value.InternalComm;
        this.ExecSponsor = this.ProjectForm.value.ExecSponsor;
        this.ClientInvolv = this.ProjectForm.value.ClientInvolv;
        this.ClientIT = this.ProjectForm.value.ClientIT;
        this.Requirements = this.ProjectForm.value.requirements;
        this.Roles = this.ProjectForm.value.Roles;
        this.CompService.addProjinComp(
          this.id,
          this.name,
          this.duration,
          this.objectives,
          this.budgetSupport,
          this.size,
          this.tech,
          this.modularity,
          this.Infrastructure,
          this.teamSize,
          this.TeamCommit,
          this.TaskSkill,
          this.TechKnow,
          this.InternalComm,
          this.ExecSponsor,
          this.ClientInvolv,
          this.Requirements,
          this.ClientIT,
          this.Roles);
        this.router.navigate(['companies/' + this.CompId + '/' + this.id]);
      } else {
        this.ProjectForm.controls.name.reset();
      }
    }
  }

}
