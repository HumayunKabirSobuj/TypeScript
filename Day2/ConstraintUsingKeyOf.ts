{
    // Generic Constraint of keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; //stiring literel বানালাম ম্যানুয়ালি
    type Owner2 = keyof Vehicle;

    const person1: Owner = "bike";
    const person2: Owner2 = "bike"


    const user = {
        name:"Md. Humayun",
        age:20,
        address:"Thakurgaon"
    }

    // console.log(user)

    const getProperty =<X,Y extends keyof X>(obj:X, key:Y )=>{
        return obj[key]
    }

    const result1=getProperty(user, 'name')






    // 
}