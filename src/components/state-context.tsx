import {
    initialQuizState,
    QuizAction,
    QuizState,
    useQuizReducer,
} from '@/lib/storage'
import { createContext, Dispatch, useContext } from 'react'

const QuizContext = createContext<[QuizState, Dispatch<QuizAction>]>([
    initialQuizState,
    () => {},
])

export function useQuizContext() {
    const context = useContext(QuizContext)
    if (!context) {
        throw new Error('useQuizContext must be used within a QuizProvider')
    }
    return context
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
    return (
        <QuizContext.Provider value={useQuizReducer()}>
            {children}
        </QuizContext.Provider>
    )
}
