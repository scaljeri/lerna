import { A } from 'a';
import { B } from 'b';

export class Ab {
    getA(): A {
        return new A();
    }

    getB(): B {
        return new B();
    }
}