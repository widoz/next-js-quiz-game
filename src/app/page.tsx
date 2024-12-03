'use client'

import { Card } from '@/components/card'
import { Debugger } from '@/components/debugger'
import { QuizProvider } from '@/components/state-context'
import { ThemeToggler } from '@/components/theme-toggler'
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const debug = searchParams.get('debug')

    return (
        <QuizProvider>
            {!!debug && <Debugger />}
            <ThemeToggler />
            <main className="min-h-screen w-full flex items-center justify-center p-4">
                <Card
                    title="Next.js Quiz"
                    description="Test your knowledge of the React framework for the web"
                />
            </main>
        </QuizProvider>
    )
}
