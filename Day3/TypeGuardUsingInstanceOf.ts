{
    // Type guard using instance of


    class Animal {
        name:string;
        species:string;


        constructor(name:string, species:string) {
            this.name=name;
            this.species=species
        }
        

        makeSound(){
            console.log('I am making sound')
        }
    }

    class Dog extends Animal {
        constructor(name:string, species:string){
            super(name, species)
        }

        makeBark(){
            console.log('The dog barking')
        }
    }

    class Cat extends Animal {
        constructor(name:string, species:string){
            super(name, species)
        }

        makeMeaw(){
            console.log('The cat meaw meaw')
        }
    }

    // smart way

    const isDog=(animal:Animal)=>{
        return animal instanceof Dog;
    }

    const isCat=(animal:Animal)=>{
        return animal instanceof Cat;
    }

    // const getAnimal =(animal :Animal)=>{
    //     if(animal instanceof Dog){
    //         animal.makeBark();
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeaw();
    //     }else{
    //         animal.makeSound()
    //     }
    // }

    const getAnimal =(animal :Animal)=>{
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog('Dog Bhai','Dog');
    const cat = new Cat('Cat Bhai','Cat');

    getAnimal(dog)

     







    // 
}