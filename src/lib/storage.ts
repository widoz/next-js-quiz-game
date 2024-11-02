import { useReducer } from 'react'
import { Question } from '../questions/questions'

type GameState = 'setup' | 'playing' | 'finished'

export interface QuizState {
    gameState: GameState
    selectedSection: string
    currentQuestions: Question[]
    currentQuestionIndex: number
    selectedAnswer: string
    score: number
    answers: {
        question: string
        userAnswer: string
        correctAnswer: string
    }[]
}

export type QuizAction =
    | { type: 'SELECT_SECTION'; payload: string }
    | { type: 'START_GAME'; payload: Question[] }
    | { type: 'SELECT_ANSWER'; payload: string }
    | { type: 'SUBMIT_ANSWER' }
    | { type: 'END_GAME' }
    | { type: 'RESTART_GAME' }

export const initialQuizState: QuizState = {
    gameState: 'setup',
    selectedSection: 'All',
    currentQuestions: [],
    currentQuestionIndex: 0,
    selectedAnswer: '',
    score: 0,
    answers: [],
}

export function useQuizReducer() {
    return useReducer(quizReducer, initialQuizState)
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
        case 'SELECT_SECTION':
            return {
                ...state,
                selectedSection: action.payload,
            }
        case 'START_GAME':
            return {
                ...state,
                gameState: 'playing',
                currentQuestions: action.payload,
                currentQuestionIndex: 0,
                score: 0,
                answers: [],
            }
        case 'SELECT_ANSWER':
            return {
                ...state,
                selectedAnswer: action.payload,
            }
        case 'SUBMIT_ANSWER': {
            const currentQuestion =
                state.currentQuestions[state.currentQuestionIndex]
            const isCorrect =
                state.selectedAnswer === currentQuestion.correctAnswer
            const isLastQuestion =
                state.currentQuestionIndex + 1 >= state.currentQuestions.length

            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                answers: [
                    ...state.answers,
                    {
                        question: currentQuestion.question,
                        userAnswer: state.selectedAnswer,
                        correctAnswer: currentQuestion.correctAnswer,
                    },
                ],
                currentQuestionIndex: isLastQuestion
                    ? state.currentQuestionIndex
                    : state.currentQuestionIndex + 1,
                selectedAnswer: '',
                gameState: isLastQuestion ? 'finished' : 'playing',
            }
        }
        case 'END_GAME':
            return {
                ...state,
                gameState: 'finished',
            }
        case 'RESTART_GAME':
            return {
                ...initialQuizState,
                gameState: 'setup',
            }
        default:
            return state
    }
}
