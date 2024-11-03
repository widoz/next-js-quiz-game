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
        <div className="absolute bottom-10 right-10 z-50">
            <Card className="p-3">
                <CardHeader>
                    <CardTitle className="text-sm">Debug State</CardTitle>
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
