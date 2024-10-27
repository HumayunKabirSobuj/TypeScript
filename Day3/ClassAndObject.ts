{
    // 

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // perameter properties

        constructor(public name: string, public species: string,public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const cow = new Animal('Red Cow', 'Cow', 'Cow');
    // console.log(cow.name)

    const cat = new Animal('Magic Cat', 'Cat', 'Meaw Meaw');
    // console.log(cat)

    cow.makeSound()






    // 
}