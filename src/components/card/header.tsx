import { CardHeader, CardTitle } from '../ui/card'
import { useQuizContext } from '../state-context'

export function Header() {
    const { currentQuestions, isPlaying, currentStep } = useQuizContext()

    return (
        <CardHeader className="text-center p-6 relative">
            <CardTitle className="tracking-tighter mb-4">
                <h2 className="text-5xl font-extrabold">Next.js Quiz</h2>
            </CardTitle>
            <p className="text-lg mb-8">
                Test your knowledge of the React framework for the web
            </p>
            {isPlaying() && currentQuestions.length > 0 && (
                <div className="mt-2">
                    {currentStep()} / {currentQuestions.length}
                </div>
            )}
        </CardHeader>
    )
}
