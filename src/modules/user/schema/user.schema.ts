import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Books, BooksSchema } from 'src/modules/books/schema/books.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Books' }],
  })
  books: mongoose.Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);

// export const UserModel = mongoose.model('User', UserSchema);
