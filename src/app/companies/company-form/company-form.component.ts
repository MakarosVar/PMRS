import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSliderChange } from '@angular/material';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  @ViewChild('CForm', {static: true}) CompForm: NgForm;
  name: string;
  size: number;
  sector;
  financials: number;
  fSlide = '';
  f = '';
  fColor = '';
  vision: number;
  vSlide = '';
  v = '';
  vColor = '';
  culture: number;
  cSlide = '';
  c = '';
  cColor = '';
  changeMngmnt: number;
  chSlide = '';
  ch = '';
  chColor = '';
  environment: number;
  envSlide = '';
  env = '';
  envColor = '';
  topMngmntCommitment: number;
  tmcSlide = '';
  tmc = '';
  tmcColor = '';
  exectvIT: number;
  eitSlide = '';
  eit = '';
  eitColor = '';
  onFInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.f = '';
      } else {
        this.f = 'Recession';
      }
      this.fSlide = 'warn';
      this.fColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.f = 'Downbeat';
      this.fColor = '#c67c00';
      this.fSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.f = 'Stable';
      this.fColor = '#ffab00';
      this.fSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.f = 'Growth';
      this.fSlide = 'teal';
      this.fColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.f = 'Expansion';
      this.fColor = 'green';
      this.fSlide = 'green';
    }
  }
  onVInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.v = '';
      } else {
        this.v = 'No Vision';
      }
      this.vSlide = 'warn';
      this.vColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.v = 'Not Clear';
      this.vColor = '#c67c00';
      this.vSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.v = 'Informal';
      this.vColor = '#ffab00';
      this.vSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.v = 'Somewhat Defined';
      this.vSlide = 'teal';
      this.vColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.v = 'Defined well';
      this.vColor = 'green';
      this.vSlide = 'green';
    }
  }
  onCInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.c = '';
      } else {
        this.c = 'Resistant to Change';
      }
      this.cSlide = 'warn';
      this.cColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.c = 'Slightly Rigid';
      this.cColor = '#c67c00';
      this.cSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.c = 'Moderate';
      this.cColor = '#ffab00';
      this.cSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.c = 'Slightly Adaptive';
      this.cSlide = 'teal';
      this.cColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.c = 'Flexible';
      this.cColor = 'green';
      this.cSlide = 'green';
    }
  }
  onChInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.ch = '';
      } else {
        this.ch = 'None';
      }
      this.chSlide = 'warn';
      this.chColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.ch = 'Absent/ad-hoc';
      this.chColor = '#c67c00';
      this.chSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.ch = 'Some';
      this.chColor = '#ffab00';
      this.chSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.ch = 'Moderate';
      this.chSlide = 'teal';
      this.chColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.ch = 'Well-Established';
      this.chColor = 'green';
      this.chSlide = 'green';
    }
  }
  onEnvInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.env = '';
      } else {
        this.env = 'Political-Based';
      }
      this.envSlide = 'warn';
      this.envColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.env = 'Conventional';
      this.envColor = '#c67c00';
      this.envSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.env = 'Something In-between';
      this.envColor = '#ffab00';
      this.envSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.env = 'Socially Open';
      this.envSlide = 'teal';
      this.envColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.env = 'Loose & Cooperative';
      this.envColor = 'green';
      this.envSlide = 'green';
    }
  }
  onTmcInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.tmc = '';
      } else {
        this.tmc = 'Almost Absent';
      }
      this.tmcSlide = 'warn';
      this.tmcColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.tmc = 'Low';
      this.tmcColor = '#c67c00';
      this.tmcSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.tmc = 'Average';
      this.tmcColor = '#ffab00';
      this.tmcSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.tmc = 'High';
      this.tmcSlide = 'teal';
      this.tmcColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.tmc = 'Engaged';
      this.tmcColor = 'green';
      this.tmcSlide = 'green';
    }
  }
  onEitInputChange(event: MatSliderChange) {
    if (event.value >= 0 && event.value <= 20) {
      if (event.value === 0) {
        this.eit = '';
      } else {
        this.eit = 'Indifferent';
      }
      this.eitSlide = 'warn';
      this.eitColor = 'red';
    } else if (event.value > 20 && event.value <= 40) {
      this.eit = 'Low';
      this.eitColor = '#c67c00';
      this.eitSlide = 'orange';
    } else if (event.value > 40 && event.value <= 60) {
      this.eit = 'Average';
      this.eitColor = '#ffab00';
      this.eitSlide = 'yellow';
    } else if (event.value > 60 && event.value <= 80) {
      this.eit = 'High';
      this.eitSlide = 'teal';
      this.eitColor = '#64dd17';
    } else if (event.value > 80 && event.value <= 100) {
      this.eit = 'Excellent';
      this.eitColor = 'green';
      this.eitSlide = 'green';
    }
  }
  constructor(private compService: CompanyService) { }
  onSaveComp(CForm: NgForm) {
    this.size = this.CompForm.value.size;
    this.sector = this.CompForm.value.sector;
    this.financials = Math.ceil(this.CompForm.value.Financials / 20);
    this.vision = Math.ceil(this.CompForm.value.Vision / 20);
    this.culture = Math.ceil(this.CompForm.value.Culture / 20);
    this.environment = Math.ceil(this.CompForm.value.Environment / 20);
    this.changeMngmnt = Math.ceil(this.CompForm.value.ChangeMngmnt / 20);
    this.topMngmntCommitment = Math.ceil(this.CompForm.value.TopMCommitment / 20);
    this.exectvIT = Math.ceil(this.CompForm.value.ExITEdu / 20);
    if (this.CompForm.value.name.trim() !== '') {
      this.name = this.CompForm.value.name.trimStart();
      this.name = this.name.trimEnd();
    } else {
      this.CompForm.controls.name.reset();
  }
    if (CForm.valid) {
            this.compService.addCompany
        (this.name,
          this.size,
          this.sector,
          this.financials,
          this.vision,
          this.culture,
          this.changeMngmnt,
          this.environment,
          this.topMngmntCommitment,
          this.exectvIT);
    } else if (
      CForm.invalid ||
      this.CompForm.value.name.trim() === '' ||
      this.financials === 0 ||
      this.vision === 0 ||
      this.culture === 0 ||
      this.environment === 0 ||
      this.changeMngmnt === 0 ||
      this.topMngmntCommitment === 0 ||
      this.exectvIT === 0) {
        return;
    }
  }

  ngOnInit() {
  }

}
