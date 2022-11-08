import { Body, Controller, Post } from '@nestjs/common';
import { CreateService } from './create.service';

@Controller('create')
export class CreateController {
  constructor(private createService: CreateService) {}
  @Post()
  async create(@Body() item: any): Promise<void> {
    return await this.createService.create(item);
  }
}
