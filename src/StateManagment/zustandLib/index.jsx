import { create } from "zustand";

export const useCursorStore = create((set)=>({
    isHovering: false,
    setIsHovering: (isHovering) => set({isHovering}),
    isTextHovering: false,
    setIsTextHovering: (isTextHovering) => set({isTextHovering}),
    isEmoji: {shape : 1, hovering: false},
    setIsEmoji: (isEmoji) => set({isEmoji})
}))
export const useAppStore = create((set)=>({
    isLoading: true,
    setIsLoading: (isLoading) => set({isLoading}),
}))