"use strict";
function AnimalSounds(animal) {
    switch (animal.kind) {
        case 'cat':
            return "t the cat  is ".concat(animal.meowing);
        case 'Dog':
            return " the  dog  is ".concat(animal.barking);
    }
}
AnimalSounds({ kind: 'cat', meowing: 'meawing' });
