import { questions } from '@/questions/questions'
import { QuizAction, QuizState } from '../lib/storage'
import { filterQuestions } from '../lib/utils'

export function useQuiz(
    state: QuizState,
    dispatch: React.Dispatch<QuizAction>
) {
    return {
        currentQuestion: () =>
            state.currentQuestions[state.currentQuestionIndex],

        currentStep: () => state.currentQuestionIndex + 1,

        calculateProgress: () =>
            (state.currentQuestionIndex / state.currentQuestions.length) * 100,

        isPlaying: () => state.gameState === 'playing',
        isFinished: () => state.gameState === 'finished',
        isSetup: () => state.gameState === 'setup',

        // Actions

        startGame: () => {
            const shuffled = filterQuestions(
                questions,
                state.selectedSection
            ).sort(() => Math.random() - 0.5)
            dispatch({ type: 'START_GAME', payload: shuffled })
        },

        selectSection: (section: string) =>
            dispatch({ type: 'SELECT_SECTION', payload: section }),

        restartGame: () => dispatch({ type: 'RESTART_GAME' }),

        selectAnswer: (answer: string) =>
            dispatch({ type: 'SELECT_ANSWER', payload: answer }),

        submitAnswer: () => dispatch({ type: 'SUBMIT_ANSWER' }),

        endGame: () => dispatch({ type: 'END_GAME' }),
    }
}
