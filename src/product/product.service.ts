import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/types/product';
import { User } from 'src/types/user';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().populate('owner');
  }

  async findByOwner(userId: string): Promise<Product[]> {
    return await this.productModel.find({ owner: userId }).populate('owner');
  }

  async findById(id: string): Promise<Product> {
    return await this.productModel.findById(id).populate('owner');
  }

  async create(productDTO: CreateProductDTO, user: User): Promise<Product> {
    const product = await this.productModel.create({
      ...productDTO,
      owner: user,
    });
    await product.save();
    return product.populate('owner');
  }

  async update(id: string, productDTO: UpdateProductDTO): Promise<Product> {
    const product = await this.productModel.findById(id);
    await product.update(productDTO);
    return product.populate('owner');
  }

  async delete(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    await product.remove();
    return product.populate('owner');
  }
}
