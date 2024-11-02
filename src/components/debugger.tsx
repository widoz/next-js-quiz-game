import { Card, CardTitle, CardContent, CardHeader } from './ui/card'
import { useQuizContext } from './state-context'

export function Debugger() {
    const [
        {
            gameState,
            currentQuestionIndex,
            selectedAnswer,
            score,
            selectedSection,
        },
    ] = useQuizContext()

    return (
        <div className="absolute top-0 right-0 z-50">
            <Card className="p-3 bg-black">
                <CardHeader>
                    <CardTitle className="text-sm text-white">
                        Debug State
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="text-xs text-gray-400 whitespace-pre-wrap">
                        {JSON.stringify(
                            {
                                gameState,
                                selectedSection,
                                currentQuestionIndex,
                                selectedAnswer,
                                score,
                            },
                            null,
                            2
                        )}
                    </pre>
                </CardContent>
            </Card>
        </div>
    )
}
