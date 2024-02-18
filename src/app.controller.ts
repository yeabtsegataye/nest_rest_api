import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get') // any route will be set hare as parameter 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/helow') // get req and endpoint will be passes as string value // also they are called decoreters       
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/num')
  getNumber(): Number {
    return this.appService.getNumber();
  }
}
