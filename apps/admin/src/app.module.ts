import { HelloModule } from '@repo/modules';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
