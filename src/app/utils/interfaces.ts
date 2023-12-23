export interface Variation {
  type: string;
  options: Array<{ value: string; image: string }>;
}

export interface Product {
    id: number;
    image?: string;
    sold?: number;
    description?: string;
    available?: number;
    name?: string;
    weight?: number | string;
    colors?: number;
    price: number;
    discountedPrice?: number;
    variations?: Variation[];
  }
  
 export interface Title {
    title: string;
    title2: string;
    topTitle?: string;
    description?: string;
  }  

  