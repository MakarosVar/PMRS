import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  getProjects() {
    return [...this.projects];
  }
  setProjects(P: Project[]) {
    this.projects = P;
  }
  addProject(
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
    const project = {
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
      Roles
    };
    this.projects.push(project);
  }
  constructor() { }
}
