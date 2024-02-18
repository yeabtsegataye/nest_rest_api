import { Injectable } from '@nestjs/common';

@Injectable() // we will inject it to the controller page
export class AppService {
  getHello(): string { // defining stirng endpoint like a function
    return 'Hello World!';
  }
  getNumber(): Number { // defining stirng endpoint like a function
    return 7;
  }
}
//1000016818554 tadael