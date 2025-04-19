export interface Product {
  id: string;
  category: CategoryType;
  image: string;
  measure: string;
  price: number;
  productName: string;
  stock: number;
}

export type CategoryType =
  | 'Frutas y Verduras'
  | 'Lácteos'
  | 'Panadería'
  | 'Bebidas'
  | 'Limpieza';
