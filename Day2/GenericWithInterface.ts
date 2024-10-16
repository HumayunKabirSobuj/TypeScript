{
    // 


    // Interface --> Generic

    interface Developer<T, Y=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?:Y
    }


    type PoorDevWatch = { brand: string, model: string, display: string }

    const poorDeveloper: Developer<PoorDevWatch> = {
        name: "Humayun",
        computer: {
            brand: "Dell",
            model: "3671DT",
            releaseYear: 2021
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED"
        }
    }


    type RichDevWatch = { brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }

    type Bike ={
        name:string;
        price:number
    }


    const richDeveloper: Developer<RichDevWatch,Bike> = {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: "3671DT",
            releaseYear: 2023
        },
        smartWatch: {
            brand: "Apple",
            model: "Something",
            heartTrack: true,
            sleepTrack: true
        },
        bike:{
            name:"Sujuki",
            price:200000
        }
    }




    // 
}