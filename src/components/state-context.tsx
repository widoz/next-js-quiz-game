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
    return useContext(QuizContext)
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
    return (
        <QuizContext.Provider value={useQuizReducer()}>
            {children}
        </QuizContext.Provider>
    )
}
