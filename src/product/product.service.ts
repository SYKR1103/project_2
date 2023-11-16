import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {


  constructor(
    @InjectRepository(Product)
    private productRepo : Repository<Product>
  ) {}

//bbby


}
