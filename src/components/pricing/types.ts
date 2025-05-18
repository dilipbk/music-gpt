export interface Plan {
  id: number;
  name: string;
  displayName: string;
  price: string; // e.g., "$9.99"
  isPopular: boolean;
  features: string[];
}
