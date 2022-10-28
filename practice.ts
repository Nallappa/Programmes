//How to get the second highest value from the array.
function SecondHighestvalue(arrayofnubers: number[]){
    // let arrayofnubers: number[] = [10,100,98,55,66,87,12,32,08,49,20,70];
     let finalarray;
    for(let i = 0 ; i < arrayofnubers.length; i++ ){
      for(let j = 0; j < arrayofnubers.length - i -1; j++ ) {
        let tempval;
        if(arrayofnubers[j] < arrayofnubers[j+1]){
          tempval = arrayofnubers[j];
          arrayofnubers[j] = arrayofnubers[j+1];
          arrayofnubers[j+1] = tempval;
        }
      }
    }
    console.log(arrayofnubers[1]);
    }
    SecondHighestvalue([10,100,98,55,66,87,12,32,08,49,20,70]);
    
    //How to get the second highest value from the array.
function Patterns(){
    // let arrayofnubers: number[] = [10,100,98,55,66,87,12,32,08,49,20,70];
     let k =0;
    for(let i = 1 ; i <= 5; i++ ){

      for(let j = 1; j <= i+k ; j++ ) {
        console.log(j);
        }
        console.log("\n")
      }
      k =k +1;
    }
    Patterns();

    //How to remove all the white spaces.
    function removeWhiteSpaces(inputstring: string) {
      // let inputstring :  string = "let do this";
      let inputstringarr = inputstring.split(" ");
      let finalstring = "";
      inputstringarr.forEach( stringval => {
        finalstring = finalstring + stringval;
      });
      console.log(finalstring);
    }
    removeWhiteSpaces('let do this');
    
    //How to get the freqency of the charcter and its count. Ex: Nallappa N:1 a:3 l:2 p:2
    function getFrequency(inpString : string) {
    // let inpString: string = 'Nallappa';
    let finalObject: Object = {};
    for(let index = 0; index< inpString.length;  index++ ){
      let character = inpString.charAt(index);
        if(finalObject[character]){
          finalObject[character]++
        }else {
          finalObject[character] = 1;
        }
      }
      console.log(finalObject)
    }
    getFrequency('Nallappa');
    
    // How to Remove Duplicate Values from a JavaScript Array
    function removeduplicates(inpArray : string[]){
     let finalarray = [];
     for(let index = 0; index < inpArray.length;  index++ ){
       let currentval :  string  = inpArray[index];
      if(finalarray.indexOf(currentval) === -1){
        finalarray.push(currentval);
      }
     }
     console.log( finalarray);
    }
    removeduplicates(["John", "Peter", "Clark", "Harry", "John", "Alice"]);
    
    //How to reverse a number without using the reverse funciton
    function reverseNumber(inpNumber: number) {
      let reversedNumber : number = 0 ;  
      let numtoReverse = inpNumber;
            while(numtoReverse > 0) {
                let digit = numtoReverse % 10;
                reversedNumber = reversedNumber * 10 + digit;
                numtoReverse /= 10;
         }
         console.log(reversedNumber)
         return reversedNumber;
    }
    console.log(reverseNumber(100))
    
    
    //Get Duplicates values with the count
    function getDuplicates(inpString : string[]) {
      let finalObject: Object = {};
      for(let index = 0; index< inpString.length;  index++ ){
        let character = inpString[index];
          if(finalObject[character]){
            finalObject[character]++
          }else {
            finalObject[character] = 1;
          }
        }
        console.log(finalObject)
      }
      getDuplicates(["John", "Peter", "Clark", "Harry", "John", "Alice"]);
    
      //Reverse a String without using reverse.
    
      //Get the Duplicates only from the array
      function getduplicates(inpArray : string[]){
        let finalarray = {};
        let finalObject: Object = {};
        inpArray.forEach(element => {
           if(finalObject[element]){
            finalObject[element] = finalObject[element] + 1;
           }else {
            finalObject[element] = 1;
           }
         });
         for (let finalObjectval in finalObject) {
            if(finalObject[finalObjectval] >= 2){
              // finalarray.push(finalObjectval);
              finalarray[finalObjectval] = finalObject[finalObjectval];
            }
         }
         console.log(finalarray);
        }
        getduplicates(["John", "Peter", "Clark", "Harry", "John", "Alice","Alice"]);
    
        function regularExprssion(stringval: string){
    
          
          // let regexp = /^[a-z0-9]+$/i;
          // var regex = new RegExp("^[a-zA-Z0-9\s]+$");
          let finalstring;
    
          finalstring = stringval.replace(new RegExp('^[a-z0-9]+$'),'');
          console.log(finalstring);
        }
        regularExprssion('Nalli1234+65   %&');
    
        //Programme to check palidrome const reverseString = string.split('').reverse().join('');
  

        function reverseArray(inputArray: number [])  {
    
          const outputArray = [];
          
          console.log('Test the revese array');
          for(let index = inputArray.length -1; index >= 0 ; index --) {
              // let localvarible = 'local';
              console.log(inputArray[index]);
              outputArray.push(inputArray[index]);
              console.log(outputArray[index]);
              // console.log(`This is a local varible ${localvarible}`);
          }
          console.log(outputArray);
          return outputArray;
      }
      reverseArray([4,5,8,6,8]);


      //lamdba functions
function removevalue(value: string) {
  let array =  ["Nalli","Test","Value"];
 array = array.filter(item =>  item !== value);
  console.log(array);

}


removevalue('Test')
      