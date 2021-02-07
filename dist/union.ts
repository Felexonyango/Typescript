interface Dog{
    kind:"Dog",
    barking: string
}
interface Cat {
    kind:"cat"
    meowing:string

}
type Animal =Dog |Cat

function AnimalSounds(animal :Animal){
    switch(animal.kind){
        case 'cat':
            return  `t the cat  is ${animal.meowing}`
            case 'Dog':
                return  ` the  dog  is ${animal.barking}`
        }
    }

AnimalSounds({kind:'cat', meowing:'meawing'})

