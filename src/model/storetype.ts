export interface Store {
    subject : string;
    setsubject : (newData:string) => void;
    year : number
    setyear : (newNumber:number) => void;
  }
