import { Button } from '../ui/button'
import { CardContent } from '../ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Progress } from '../ui/progress'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { questions, sections } from '@/questions/questions'
import { useQuizContext } from '../state-context'

export function Content() {
    const [
        {
            gameState,
            currentQuestions,
            currentQuestionIndex,
            selectedAnswer,
            score,
            answers,
            selectedSection,
        },
        dispatch,
    ] = useQuizContext()

    const filterQuestions = () => {
        let filteredQuestions = questions
        if (selectedSection !== 'All') {
            filteredQuestions = filteredQuestions.filter(
                (q) => q.section === selectedSection
            )
        }
        return filteredQuestions
    }

    const startGame = () => {
        const filteredQuestions = filterQuestions()
        const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
        dispatch({ type: 'START_GAME', payload: shuffled })
    }

    const handleAnswer = () => {
        dispatch({ type: 'SUBMIT_ANSWER' })
    }

    return (
        <CardContent className="p-6">
            {gameState === 'setup' && (
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">
                            Select Documentation Section:
                        </h3>
                        <Select
                            onValueChange={(value) =>
                                dispatch({
                                    type: 'SELECT_SECTION',
                                    payload: value,
                                })
                            }
                            defaultValue={'All'}
                        >
                            <SelectTrigger className="w-full bg-white border-gray-800 hover:border-gray-700">
                                <SelectValue placeholder="Select a section" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-800">
                                {sections.map((section) => (
                                    <SelectItem key={section} value={section}>
                                        {section}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        onClick={startGame}
                        className="w-full bg-white border-2 border-gray-800 hover:bg-gray-900 text-black hover:text-white font-medium py-6 text-lg rounded-lg transition-colors"
                    >
                        Start Quiz
                    </Button>
                </div>
            )}

            {gameState === 'playing' && currentQuestions.length > 0 && (
                <div className="space-y-8">
                    <Progress
                        value={
                            ((currentQuestionIndex + 1) /
                                currentQuestions.length) *
                            100
                        }
                        className="w-full h-1 bg-gray-800"
                    />
                    <h2 className="text-2xl font-semibold text-gray-200">
                        {currentQuestions[currentQuestionIndex].question}
                    </h2>
                    <RadioGroup
                        value={selectedAnswer}
                        onValueChange={(value) =>
                            dispatch({
                                type: 'SELECT_ANSWER',
                                payload: value,
                            })
                        }
                        className="space-y-3"
                    >
                        {currentQuestions[currentQuestionIndex].options.map(
                            (option, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-[#1A1A1A] border border-gray-800 hover:border-gray-700 transition-colors"
                                >
                                    <RadioGroupItem
                                        value={option}
                                        id={`option-${index}`}
                                        className="border-gray-600"
                                    />
                                    <Label
                                        htmlFor={`option-${index}`}
                                        className="text-lg cursor-pointer text-gray-300"
                                    >
                                        {option}
                                    </Label>
                                </div>
                            )
                        )}
                    </RadioGroup>
                    <div className="space-y-4">
                        <Button
                            onClick={handleAnswer}
                            disabled={!selectedAnswer}
                            className="w-full bg-white hover:bg-gray-200 text-black font-medium py-6 text-lg rounded-lg transition-colors"
                        >
                            Next Question
                        </Button>
                        <Button
                            onClick={() => dispatch({ type: 'END_GAME' })}
                            variant="outline"
                            className="w-full font-medium py-6 border-gray-800 hover:border-gray-700 text-gray-400 hover:text-gray-300 rounded-lg"
                        >
                            End Quiz
                        </Button>
                    </div>
                </div>
            )}

            {gameState === 'finished' && (
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Quiz Complete
                        </h2>
                        <p className="text-2xl text-gray-400">
                            You scored {score} out of {answers.length}
                        </p>
                    </div>
                    <div className="space-y-4 max-h-[32rem] overflow-y-auto">
                        <h3 className="text-xl font-semibold text-gray-200">
                            Results:
                        </h3>
                        {answers.map((answer, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg border ${
                                    answer.userAnswer === answer.correctAnswer
                                        ? 'border-green-800 bg-green-950/30'
                                        : 'border-red-800 bg-red-950/30'
                                }`}
                            >
                                <p className="font-semibold text-gray-200 mb-2">
                                    {answer.question}
                                </p>
                                <p className="text-gray-400">
                                    Your answer: {answer.userAnswer}
                                </p>
                                <p className="text-gray-400">
                                    Correct answer: {answer.correctAnswer}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => dispatch({ type: 'RESTART_GAME' })}
                        className="w-full bg-white hover:bg-gray-200 text-black font-medium py-6 text-lg rounded-lg transition-colors"
                    >
                        Try Again
                    </Button>
                </div>
            )}
        </CardContent>
    )
}
