import { create } from 'zustand'

interface RegisterModalStorage{
    isOpen:boolean,
    onOpen:()=>void
    onClose:()=>void
}

export const UseRegisterModal = create<RegisterModalStorage>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
})) 