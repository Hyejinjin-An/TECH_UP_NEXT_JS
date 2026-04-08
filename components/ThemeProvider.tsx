"use client" // next.js client 쪽의 선언 약속?
import { ThemeProvider } from "next-themes";
import React from "react";

// npm install next-themes
// npm install react-icons
export function NextThemeProvider( { children, ...props }:React.ComponentProps<typeof ThemeProvider> )
{
    // → `typeof ThemesProvider`→ 원본 컴포넌트(`ThemesProvider`) 타입 추출
    // → `ComponentProps` → 해당 컴포넌트가 받는 props 타입 추출
    return <ThemeProvider {...props}>{children}</ThemeProvider>
}
