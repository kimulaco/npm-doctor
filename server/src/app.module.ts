import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NpmModule } from './npm/npm.module';

@Module({
  imports: [NpmModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
