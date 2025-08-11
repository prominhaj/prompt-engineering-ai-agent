"use client"

import { ThemeSwitcher as ThemeSwitcherComponent } from '@/components/ui/kibo-ui/theme-switcher';
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='fixed top-4 right-4'>
            <ThemeSwitcherComponent
                defaultValue="system"
                onChange={(t) => setTheme(t)}
                value={(theme as 'light' | 'dark' | 'system') ?? 'system'}
            />
        </div>
    )
}
