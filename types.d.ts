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
  name: string;
  greeting: string;
  domain: string;
  enabled: Options;
  faq: FAQ[];
  bug: Bug[];
  feature: Feature[];
  feedback: Feedback[];
  contact: Contact;
}

export interface Contact {
  email: string;
  address: string;
  phone: string;
}

export interface Bug {
  date: number;
  bug: string;
  email: string;
  steps: string;
}
export interface Options {
  faq: boolean;
  bug: boolean;
  feature: boolean;
  feedback: boolean;
  contact: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Feature {
  date: number;
  email: string;
  feature: string;
}

export interface Feedback {
  date: number;
  email: string;
  feedback: string;
}
