import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Min(4)
  @Max(30)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Min(6)
  @Max(16)
  password: string;
}
