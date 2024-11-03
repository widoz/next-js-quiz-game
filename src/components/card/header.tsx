import { CardHeader, CardTitle } from '../ui/card'
import { useQuizContext } from '../state-context'

export function Header() {
    const [{ gameState, currentQuestions, currentQuestionIndex }] =
        useQuizContext()

    return (
        <CardHeader className="p-6 relative">
            <CardTitle className="text-5xl font-extrabold text-center tracking-tighter mb-4">
                Next.js Quiz
            </CardTitle>
            <p className="text-center text-lg mb-8">
                Test your knowledge of the React framework for the web
            </p>
            {gameState === 'playing' && currentQuestions.length > 0 && (
                <div className="text-center mt-2">
                    Question {currentQuestionIndex + 1} /{' '}
                    {currentQuestions.length}
                </div>
            )}
        </CardHeader>
    )
}
