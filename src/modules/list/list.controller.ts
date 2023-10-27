import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CreateListDto } from './dto/create-list.dto';
import { ListService } from './list.service';
import { ListDto } from './dto/list.dto';
import { JwtGuard } from 'src/core/auth/guards/jwt.guard';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('/')
  @UseGuards(JwtGuard)
  async getLists(): Promise<string[]> {
    return this.listService.getAllLists();
  }

  @Get('/:id')
  async getList(@Param() id: string): Promise<string> {
    console.log(id);

    return this.listService.getList(id);
  }

  @Post('/')
  async createList(@Body() createList: CreateListDto): Promise<ListDto> {
    return this.listService.createList(createList);
  }
}
