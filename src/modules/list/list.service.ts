import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class ListService {
  protected readonly logger = new Logger(ListService.name);
  constructor() {}

  async getAllLists() {
    return ['hello'];
  }

  async getList(id: string) {
    return id;
  }

  async createList(listToCreate: CreateListDto) {
    this.logger.log(`Creating user: ${JSON.stringify(listToCreate)}`);
    if (listToCreate.name === 'aga') {
      throw new HttpException('aga', HttpStatus.BAD_REQUEST);
    }
    return listToCreate;
  }
}
