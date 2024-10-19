{
    // Constraints

    const addCourseToStudent = <T extends {id:number; name:string; email:string}>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({ id: 1, name: "Humayun", email: "abc@gmail.com", devType: "Junior Web Developer" });


    const student2 = addCourseToStudent({ id: 2, name: "Juyel", email: "efg@gmail.com", hasWatch: "Apple Watch" });


    // const student3=addCourseToStudent({emni :"amni"})








    // 
}