{
    // 

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type Seikh = {
        bike: string;
        car: string;
        ship: string
    }


    // type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
    type CheckVehicle<T> = T extends keyof Seikh ? true : false;

    type HasBike = CheckVehicle<'bike'>




    // 
}