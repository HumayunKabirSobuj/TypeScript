{
    // 

    type User1 = {
        name: string;
        age: number
    }

    type UserWithRole1 = User1 & { role: string }

    const user1: UserWithRole1 = {
        name: "Humayun",
        age: 20,
        role: "user"
    }

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: UserWithRole2 = {
        name: "Humayun",
        age: 20,
        role: "user"
    }


    type Roll1 = number[];
    const rollNumber: Roll1 = [1, 3, 5, 7]

    interface Roll2 {
        [index: number]: number
    }





    // 
}