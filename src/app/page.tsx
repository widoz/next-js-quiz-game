'use client'

import { Card } from '@/components/card'
import { Debugger } from '@/components/debugger'
import { QuizProvider } from '@/components/state-context'

export default function Page() {
    return (
        <QuizProvider>
            <Debugger />
            <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center p-4">
                <Card />
            </div>
        </QuizProvider>
    )
}
