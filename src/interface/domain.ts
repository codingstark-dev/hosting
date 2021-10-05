export interface DomainData {
  domain?: Domain;
  spotlight?: Domain;
  suggestions?: Domain;
}

export interface Domain {
  result?: Result[];
}

export interface Result {
  domainName?: string;
  idnDomainName?: string;
  tld?: string;
  tldNoDots?: string;
  sld?: string;
  idnSld?: string;
  status?: string;
  legacyStatus?: string;
  score?: number;
  isRegistered?: boolean;
  isAvailable?: boolean;
  isValidDomain?: boolean;
  pricing?: Pricing;
  shortestPeriod?: ShortestPeriod;
  group?: string;
  minLength?: number;
  maxLength?: number;
  isPremium?: boolean;
  premiumCostPricing?: any[];
}

export interface Pricing {
  "1"?: ShortestPeriod;
}

export interface ShortestPeriod {
  register?: Register;
  transfer?: string;
  renew?: string;
  period?: number;
}

export enum Register {
  The14900Inr = "₹149.00 INR",
  The29900Inr = "₹299.00 INR",
  The59900Inr = "₹599.00 INR",
}
