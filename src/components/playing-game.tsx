import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useQuizContext } from './state-context'

interface ControlProps {
    options: string[]
    selectedAnswer: string
    onValueChange: (value: string) => void
}

interface OptionsProps {
    options: string[]
}

interface OptionProps {
    option: string
    index: number
}

interface ActionsProps {
    selectedAnswer: string
    onSelectAnswer: () => void
    onEndGame: () => void
}

export function PlayingGame() {
    const {
        currentQuestions,
        selectedAnswer,
        selectAnswer,
        submitAnswer,
        endGame,
        calculateProgress,
        currentQuestion,
    } = useQuizContext()

    if (currentQuestions.length === 0) {
        return null
    }

    const { question, options } = currentQuestion()

    return (
        <div className="space-y-8">
            <Progress value={calculateProgress()} />
            <h3 className="text-2xl font-semibold">{question}</h3>
            <Control
                options={options}
                selectedAnswer={selectedAnswer}
                onValueChange={selectAnswer}
            />
            <Actions
                selectedAnswer={selectedAnswer}
                onSelectAnswer={submitAnswer}
                onEndGame={endGame}
            />
        </div>
    )
}

function Control({ options, selectedAnswer, onValueChange }: ControlProps) {
    return (
        <RadioGroup value={selectedAnswer} onValueChange={onValueChange}>
            <Options options={options} />
        </RadioGroup>
    )
}

function Options({ options }: OptionsProps) {
    return options.map((option, index) => (
        <Option key={index} option={option} index={index} />
    ))
}

function Option({ option, index }: OptionProps) {
    return (
        <div className="flex items-center space-x-3 p-4 rounded-lg border transition-colors">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label
                htmlFor={`option-${index}`}
                className="text-lg cursor-pointer"
            >
                {option}
            </Label>
        </div>
    )
}

function Actions({ selectedAnswer, onSelectAnswer, onEndGame }: ActionsProps) {
    return (
        <div className="space-y-4">
            <Button
                onClick={onSelectAnswer}
                disabled={!selectedAnswer}
                className="w-full font-medium py-6 text-lg rounded-lg transition-colors"
            >
                Next Question
            </Button>
            <Button
                onClick={onEndGame}
                variant="outline"
                className="w-full font-medium py-6 rounded-lg"
            >
                End Quiz
            </Button>
        </div>
    )
}
