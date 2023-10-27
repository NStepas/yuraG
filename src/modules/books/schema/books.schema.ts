import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/modules/user/schema/user.schema';

export type BooksDocument = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  users: mongoose.Types.ObjectId;
}

export const BooksSchema = SchemaFactory.createForClass(Books);

// export const BooksModel = mongoose.model('Books', BooksSchema);
