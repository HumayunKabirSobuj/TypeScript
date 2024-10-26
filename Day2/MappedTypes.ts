{
    // 

    const arrOfNumbers: number[] = [1, 4, 5];
    // const arrOfString: string[] = ['1', '4', '5'];

    const arrOfString: string[] = arrOfNumbers.map(number => number.toString());
    // console.log(arrOfString)


    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaSting ={
    //     height:string;
    //     width:string;
    // }



    // Mapped Type

    // type AreaString = {
    //     [key in 'height' | 'width']: string
    // }


    // type AreaString = {
    //     [key in keyof AreaNumber]: string
    // }

    type Height = AreaNumber['height']  //look up type


    type AreaString<T> = {
        [key in keyof T]: T[key]
    }


    const area1:AreaString<{height:string;width:number}>={
        height:"100",
        width:50
    }







    // 
}