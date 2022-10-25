import { Controller, Delete, Get, Post, Header } from '@nestjs/common';
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
  postMono(): string[] {
    return this.appService.postMono();
  }

  @Delete('/monocard/devs')
  deleteMono(): string[] {
    return this.appService.deleteMono();
  }
}
