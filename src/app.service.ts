import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMono(): string[] {
    return [
      'Rafael',
      'Russo',
      'Igor',
      'Stefferson',
      'André',
      'Gustavo',
      'Perdigão',
    ];
  }
}
