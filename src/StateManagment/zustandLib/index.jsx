import { create } from "zustand";

export const useCursorStore = create((set)=>({
    isHovering: false,
    setIsHovering: (isHovering) => set({isHovering})
}))