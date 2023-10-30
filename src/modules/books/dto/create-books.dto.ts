import { IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Min(4)
  name: string;
}
