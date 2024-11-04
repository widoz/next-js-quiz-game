import { createContext, PropsWithChildren, useContext } from 'react'
import { Answers, useQuizReducer } from '@/lib/storage'
import { Questions } from '@/questions/types'
import { useQuiz } from '@/hooks/useQuiz'

interface QuizContextValue extends ReturnType<typeof useQuiz> {
    selectedSection: string
    currentQuestions: Questions
    currentQuestionIndex: number
    selectedAnswer: string
    score: number
    answers: Answers
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined)

export function useQuizContext() {
    const context = useContext(QuizContext)

    if (!context) {
        throw new Error('useQuizContext must be used within a QuizProvider')
    }

    return context
}

export function QuizProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useQuizReducer()
    const quizApi = useQuiz(state, dispatch)

    const value = {
        ...quizApi,
        ...state,
    }

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
