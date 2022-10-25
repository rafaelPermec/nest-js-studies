import { Controller, Delete, Get, Post, Header, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text-html')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/monocard/devs')
  getMono(): string[] {
    return this.appService.getMono();
  }

  @Post('/monocard/devs')
  postMono(@Body('newDev') dev: string): string[] {
    return this.appService.postMono(dev);
  }

  @Delete('/monocard/devs')
  deleteMono(@Body('oldDev') dev: string): string[] {
    return this.appService.deleteMono(dev);
  }
}
