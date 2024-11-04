'use client'

import { Card } from '@/components/card'
import { Debugger } from '@/components/debugger'
import { QuizProvider } from '@/components/state-context'
import { ThemeToggler } from '@/components/theme-toggler'

export default function Page() {
    return (
        <QuizProvider>
            <Debugger />
            <ThemeToggler />
            <main className="min-h-screen w-full flex items-center justify-center p-4">
                <Card />
            </main>
        </QuizProvider>
    )
}
