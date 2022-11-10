export enum TopLevelCategories {
  Courses,
  Services,
  Books,
  Products,
}

export interface Vacancy {
  counter: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface Advantage {
  title: string;
  description: string;
}

export class TopPageModel {
  category: TopLevelCategories;
  nestedCategory: string;
  title: string;
  currentCategory: string;
  vacancy?: Vacancy;
  advantages: Advantage[];
  seoText: string;
  skillsTitle: string;
  skills: string[];
}
