class PrinterClass { 
    public first;
    public classvarible : string = "classvarible";
    constructor(first : string){
        this.first = first;
    }
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
    testprint() : void {
        console.log("this is test print")  
    }
 } 
 
 class StringPrinter extends PrinterClass { 
     public third : string;
     public fourth : string;

     constructor(third: string, fourth :string){
        super(third)
         this.fourth = fourth;
         this.third = third;
     }
    doPrint():void { 
    //    super.doPrint() 
       console.log("doPrint() is printing a string…" +this.first)
      
    } 

    testfun() : void {
        console.log("this is test fun" + this.doPrint())
     
    }
  
 } 
 
 let obj = new StringPrinter('4','52') 
 console.log(obj.classvarible);
 console.log(obj.first);
 obj.doPrint();
 obj.testfun()