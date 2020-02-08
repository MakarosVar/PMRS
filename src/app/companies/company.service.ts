import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { Router } from '@angular/router';
import { Project } from './company/project.model';
import { ProjectService } from './company/project.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [
    {
      id: 0,
      name: 'makis',
      sector: ['Software'],
      size: 1,
      Financials: 5,
      Vision: 5,
      Culture: 5,
      ChangeMngmnt: 5,
      Environment: 5,
      TopMngmntCommitment: 5,
      ExectvIT: 5,
      Projects: []
    }];
  getCompanies() {
    return [...this.companies];
  }
  getCompany(id: number) {
    const Comp = this.companies[id];
    this.projService.setProjects(Comp.Projects);
    return Comp;
  }
  addCompany(
    name: string,
    size: number,
    sector: string[],
    Financials: number,
    Vision: number,
    Culture: number,
    ChangeMngmnt: number,
    Environment: number,
    TopMngmntCommitment: number,
    ExectvIT: number) {
    const id = this.companies.length;
    const Projects: Project[] = [];
    const company = {
      id,
      name,
      sector,
      size,
      Financials,
      Vision,
      Culture,
      ChangeMngmnt,
      Environment,
      TopMngmntCommitment,
      ExectvIT,
      Projects
    };
    this.companies.push(company);
    this.router.navigate(['companies/' + id]);
  }
  addProjinComp(
    id: number,
    name: string,
    duration: number,
    objectives: number,
    budgetSupport: number,
    size: number,
    tech: number,
    modularity: number,
    Infrastructure: number,
    teamSize: number,
    TeamCommit: number,
    TaskSkill: number,
    TechKnow: number,
    InternalComm: number,
    ExecSponsor: number,
    ClientInvolv: number,
    Requirements: number,
    ClientIT: number,
    Roles: number) {
    this.projService.addProject(
      id,
      name,
      duration,
      objectives,
      budgetSupport,
      size,
      tech,
      modularity,
      Infrastructure,
      teamSize,
      TeamCommit,
      TaskSkill,
      TechKnow,
      InternalComm,
      ExecSponsor,
      ClientInvolv,
      Requirements,
      ClientIT,
      Roles);
  }
  constructor(private projService: ProjectService, private router: Router) { }
}
