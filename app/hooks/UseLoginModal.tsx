import { create } from 'zustand'

interface LoginModalStorage{
    isOpen:boolean,
    onOpen:()=>void
    onClose:()=>void
}

export const UseLoginModal = create<LoginModalStorage>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
})) 