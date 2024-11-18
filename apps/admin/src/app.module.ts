import { HelloModule } from '@repo/modules';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserModel } from './user/entity/user.entity';

@Module({
  imports: [HelloModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'penefit',
      password: 'penefit',
      database: 'penefit-backend',
      entities: [
        UserModel
      ],
      synchronize: true,
    }
  ), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
