import { create } from 'zustand'
import { Store } from '../model/storetype'

const useStore = create<Store>((set) => ({
    subject : '과목',
    setsubject : (newData) => set((state) => ({subject : newData})),
    year : 2017,
    setyear:(newNumber) => set((state)=> ({year : newNumber}))
  }));
  export default useStore;