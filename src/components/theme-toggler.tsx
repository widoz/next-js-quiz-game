import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggler() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 rounded-lg border-gray-800 hover:border-gray-700 bg-transparent"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
        </Button>
    )
}
