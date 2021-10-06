export interface WorkHistoryType {
  id: string;
  isEmployed: boolean;
  occupation: {
    id: string;
    name: string;
  };
  industry: {
    id: string;
    name: string;
  };
  position: string;
  annualIncome: number;
  managementExperience: number;
  sinceDate: string; //Date;?
  name: string;
  jobSummary: string;
  untilDate: string; //Date;?
}
