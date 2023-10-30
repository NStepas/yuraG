import { IsNumber, Min } from 'class-validator';

export class ListDto {
  @IsNumber()
  id?: number;
  @Min(4)
  name: string;
  @IsNumber()
  age: number;
}
