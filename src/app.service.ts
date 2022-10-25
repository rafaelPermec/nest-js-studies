import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  devs = [
    'Rafael',
    'Russo',
    'Igor',
    'Stefferson',
    'André',
    'Gustavo',
    'Perdigão',
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getMono(): string[] {
    return this.devs;
  }

  postMono(newDev: string): string[] {
    this.devs.push(newDev);
    return this.devs;
  }

  deleteMono(delDev: string): string[] {
    const deleteDev = this.devs.filter((item) => item !== delDev);
    return deleteDev;
  }
}
