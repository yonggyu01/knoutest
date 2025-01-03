import { create } from 'zustand'
import { Store } from '../model/storetype'

const useStore = create<Store>((set) => ({
    subject : '과목',
    setsubject : (newData) => set((state) => ({subject : newData})),
    year : 2017,
    setyear:(newNumber) => set((state)=> ({year : newNumber})),
    ss: '1학기',
    setss:(newData) => set((state)=> ({ss : newData})),
    grade : '학년',
    setgrade : (newData) =>set((state)=> ({grade : newData})),
    view : '기출문제',
    setview : (newData) =>set((state)=>({view : newData})),
  }));
  export default useStore;