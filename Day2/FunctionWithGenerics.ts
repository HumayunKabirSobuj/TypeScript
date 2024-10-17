{
    // 


    // Function

    const createArray = (param: string): string[] => {
        return [param]
    }


    // Function with Generics

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const result1 = createArray("Bangladesh")

    const resultGeneric = createArrayWithGeneric<string>("Bangladesh")


    type User = {
        id: number;
        name: string;
    }
    const resultGenericObj = createArrayWithGeneric<User>({ id: 506034, name: "Humayun" })
    // console.log(resultGenericObj);




    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res1 = createArrayWithTuple<string, number>('Bangladesh', 506034)
    // console.log(res1);

    const res2 = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: "Humayun" })
    // console.log(res2);


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: "Humayun", email: "abc@gmail.com", devType: "Junior Web Developer" });

    // console.log(student1);

    const student2 = addCourseToStudent({ name: "Juyel", email: "efg@gmail.com", hasWatch: "Apple Watch" });

    // console.log(student2);





    // 
}