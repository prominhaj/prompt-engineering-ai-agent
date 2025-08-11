"use client"

import { useEffect, useState } from "react";
import { ThemeSwitcher as ThemeSwitcherComponent } from '@/components/ui/kibo-ui/theme-switcher';
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className='fixed top-4 right-4'>
            <ThemeSwitcherComponent
                defaultValue="system"
                onChange={(t) => setTheme(t)}
                value={(theme as 'light' | 'dark' | 'system') ?? 'system'}
            />
        </div>
    );
}
