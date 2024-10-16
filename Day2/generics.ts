{
    // 

    // Generic Type

    type GenericType<T> = Array<T>

    // const rollNumbers: number[] = [1, 3, 5];
    // const rollNumbers: Array<number> = [1, 3, 5];
    const rollNumbers: GenericType<number> = [1, 3, 5];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericType<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const booleanArray: boolean[] = [true, false, true]
    // const booleanArray: Array<boolean> = [true, false, true]
    const booleanArray: GenericType<boolean> = [true, false, true]

    interface User {
        name: string;
        age: number
    }

    const user: GenericType<User> = [
        {
            name: "Humayun",
            age: 20
        },
        {
            name: "juyel",
            age: 21
        }
    ]


    // Generic Tuple

    type GenericTuple<X, Y> = [X, Y]

    // const mens: [string, string] = ['Mr. X', 'Mr. Y']
    const mens: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']



    const userWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: "Humayun", email: "abc@gmail.com" }]




    // 
}