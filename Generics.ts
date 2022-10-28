//https://www.youtube.com/watch?v=nViEqpgwxHE

//1 first type implementation
const last = <T>(arr : T[] ) : T => {
    return arr[arr.length - 1];
}

let l1 = last([1,2,3]);
let l2 = last <string> (['a','b','f']);

//2 first type implementation

let makeArr = <X,Y>(x: X, y:Y) : [X,Y] =>{
    return [x,y];
}

const v = makeArr(1,2);
const v1 = makeArr('a','b');
const v2 = makeArr<string | null, number>('a',2);

//3 Restricting the fields in the object
const makeFullName = <T extends { firstName: string; lastName: string }>(
    obj: T
  ) => {
    return {
      ...obj,
      fullName: obj.firstName + " " + obj.lastName
    };
  };
  
  const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });
//   const v5 = makeFullName({ another: "bob", lastName: "junior", age: 15 });
  

  interface Tab<T> {
    id: string;
    position: number;
    data: T;
  }
  
  type  NumberTab = Tab<number>;
  type StringTab = Tab<string>;