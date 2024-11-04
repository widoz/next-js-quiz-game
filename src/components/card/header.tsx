import { CardHeader, CardTitle } from '../ui/card'
import { useQuizContext } from '../state-context'

export interface CardHeaderProps {
    title: string
    description: string
}

export function Header({ title, description }: CardHeaderProps) {
    const { currentQuestions, isPlaying, currentStep } = useQuizContext()

    return (
        <CardHeader className="text-center p-6 relative">
            <CardTitle className="tracking-tighter mb-4">
                <h2 className="text-5xl font-extrabold">{title}</h2>
            </CardTitle>
            <p className="text-lg mb-8">{description}</p>
            {isPlaying() && currentQuestions.length > 0 && (
                <div className="mt-2">
                    {currentStep()} / {currentQuestions.length}
                </div>
            )}
        </CardHeader>
    )
}
