export interface PageName {
    id: string;
    label: string;
    href?: string;
  }
  
  export interface WaitlistEntry {
    email: string;
    timestamp: string;
    source: string;
  }
  
  export interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
  }