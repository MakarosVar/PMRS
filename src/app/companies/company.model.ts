import { Project } from './company/project.model';

export interface Company {
  id: number;
  name: string;
  sector: string[];
  size: number;
  Financials: number;
  Vision: number;
  Culture: number;
  ChangeMngmnt: number;
  Environment: number;
  TopMngmntCommitment: number;
  ExectvIT: number;
  Projects: Project[];
}
