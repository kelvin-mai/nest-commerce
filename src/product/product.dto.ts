export interface CreateProductDTO {
  title: string;
  image: string;
  description: string;
  number: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
