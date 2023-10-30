import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  @Min(4)
  name: string;

  @IsNumber()
  @Min(20)
  age: number;
}
