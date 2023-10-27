import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
  imports: [],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListModule],
})
export class ListModule {}
