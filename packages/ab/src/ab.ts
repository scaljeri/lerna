import { A } from '@scaljeri/a';
import { B } from '@scaljeri/b';

class Ab {
    getA(): A {
        return new A();
    }

    getB(): B {
        return new B();
    }
}

const ab = new Ab();

console.log(ab.getB().get());
console.log(ab.getA().get());