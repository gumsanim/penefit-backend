import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    getHello(): string {
        return 'Hello World From Hello Service!';
    }

    getHello2(): string{
        return 'Hello World From Hello Service2!';
    }
}
