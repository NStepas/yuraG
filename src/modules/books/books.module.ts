import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BooksSchema } from './schema/books.schema';

@Module({
  controllers: [BooksController],
  providers: [BooksService],

  imports: [
    MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
  ],
  exports: [],
})
export class BooksModule {}
