import { Button } from './ui/button'
import { useQuizContext } from './state-context'
import { QuizAnswers } from './quiz-answers'

export function FinishedGame() {
    const { score, answers, restartGame } = useQuizContext()

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Quiz Complete</h3>
                <p className="text-lg">
                    You scored {score} out of {answers.length}
                </p>
            </div>
            <QuizAnswers answers={answers} />
            <Button
                onClick={restartGame}
                className="w-full font-medium py-6 text-lg rounded-lg transition-colors"
            >
                Try Again
            </Button>
        </div>
    )
}
