
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyFormComponent } from './companies/company-form/company-form.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProjectFormComponent } from './companies/company/project-form/project-form.component';
import { ProjectComponent } from './companies/company/project/project.component';


const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  {
    path: 'companies', component: CompaniesComponent, children: [
      { path: '', component: CompanyListComponent },
      { path: 'create', component: CompanyFormComponent },
      { path: ':id/edit', component: CompanyFormComponent},
      { path: ':id', component: CompanyComponent },
      { path: ':id/newProj', component: ProjectFormComponent },
      { path: ':id/:pid', component: ProjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
