import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { CardHeader, CardTitle } from '../ui/card'
import { useTheme } from 'next-themes'
import { useQuizContext } from '../state-context'

export function Header() {
    const { theme, setTheme } = useTheme()
    const [{ gameState, currentQuestions, currentQuestionIndex }] =
        useQuizContext()

    return (
        <CardHeader className="p-6 relative">
            <CardTitle className="text-5xl font-extrabold text-center tracking-tighter mb-4">
                Next.js Quiz
            </CardTitle>
            <p className="text-center text-gray-400 text-lg mb-8">
                Test your knowledge of the React framework for the web
            </p>
            {gameState === 'playing' && currentQuestions.length > 0 && (
                <div className="text-center mt-2 text-gray-400">
                    Question {currentQuestionIndex + 1} /{' '}
                    {currentQuestions.length}
                </div>
            )}
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-4 rounded-lg border-gray-800 hover:border-gray-700 bg-transparent"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
            </Button>
        </CardHeader>
    )
}
