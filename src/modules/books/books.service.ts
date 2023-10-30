import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books, BooksDocument } from './schema/books.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private booksModel: Model<BooksDocument>,
  ) {}

  async getBooks() {
    return this.booksModel.find().populate({ path: 'users' }).exec();
  }

  async createBook(createBookDto: CreateBookDto) {
    return await this.booksModel.create(createBookDto);
  }
}
