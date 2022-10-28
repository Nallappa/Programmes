//ts-node test.ts
import { ExcelUtilities } from './Excel';
import { readFileSync } from 'fs';
import { join } from 'path';
const excelPath = readFileSync(join(__dirname,'./Test.xlsx'));

const path = 'C:/Users/nalla/OneDrive/Documents/TypescriptProgrammes/Test.xlsx';
let excel = new ExcelUtilities(path,'Nalli');

async function MainFunction() {
    console.log(await excel.getrowCount())
    console.log(await excel.getcolumnCount())
    console.log(await excel.getCellValue(1,2))
    console.log(await excel.getColumnValues(2))
    console.log(await excel.getRowValues(1));
  }
  
  MainFunction();

