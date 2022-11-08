import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateService {
  async create(item: any): Promise<void> {
    console.log(JSON.stringify(item));
    return Promise.resolve();
  }
}
