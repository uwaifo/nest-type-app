import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getArgumentValues } from 'graphql/execution/values';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  */
}
