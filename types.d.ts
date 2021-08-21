export interface User {
  email: string;
  domains: string[];
  domainSnapshot: DomainSnapshot[];
}

export interface DomainSnapshot {
  id: string;
  name: string;
}

export interface Domain {
  enabled: Options;
  FAQ: FAQ;
  bug: any[];
  feature: Feature[];
  feedback: Feedback[];
}

export interface Options {
  FAQ: boolean;
  bug: boolean;
  feature: boolean;
  feedback: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  email: string;
  feature: string;
}

export interface Feedback {
  email: string;
  feedback: string;
}
