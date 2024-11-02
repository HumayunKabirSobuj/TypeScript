{
    // Inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Person {
       

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

        
    }

    const student1 = new Student('Md. Humayun', 20, 'Thakurgaon')
    // student1.



    class Teacher extends Person{
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.designation = designation;
        }

        // getSleep(numOfHours: number) {
        //     console.log(`${this.name} will sleep for ${numOfHours}`)
        // }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher1 = new Teacher('Mr. Teacher', 40, 'Thakurgaon','professor')
    // teacher1.takeClass(20)

    // 
}