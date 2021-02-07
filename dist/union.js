"use strict";
function AnimalSounds(animal) {
    switch (animal.kind) {
        case 'cat':
            return `t the cat  is ${animal.meowing}`;
        case 'Dog':
            return ` the  dog  is ${animal.barking}`;
    }
}
AnimalSounds({ kind: 'cat', meowing: 'meawing' });
