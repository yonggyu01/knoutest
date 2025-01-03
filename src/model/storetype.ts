export interface Store {
    subject : string;
    setsubject : (newData:string) => void;
    year : number
    setyear : (newNumber:number) => void;
    ss:string;
    setss:(newData : string) => void;
    grade: string;
    setgrade :(newData:string) => void;
    view : string;
    setview : (newData:string) => void;
  }
