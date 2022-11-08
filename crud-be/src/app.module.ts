import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateModule } from './create/create.module';

@Module({
  imports: [CreateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}