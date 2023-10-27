import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(20)
  age: number;
}
