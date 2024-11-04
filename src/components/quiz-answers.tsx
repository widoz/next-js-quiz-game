import { cn } from '@/lib/utils'

interface Answer {
    question: string
    userAnswer: string
    correctAnswer: string
}

interface QuizAnswersProps {
    answers: Answer[]
}

interface AnswersProps {
    answers: Answer[]
}

interface AnswerProps {
    answer: Answer
    index: number
}

export function QuizAnswers({ answers }: QuizAnswersProps) {
    return (
        <div className="space-y-4 overflow-y-auto">
            <h3 className="text-xl font-semibold">Results:</h3>
            <Answers answers={answers} />
        </div>
    )
}

function Answers({ answers }: AnswersProps) {
    return (
        <div className="space-y-4 overflow-y-auto">
            {answers.map((answer, index) => (
                <Answer key={index} answer={answer} index={index} />
            ))}
        </div>
    )
}

function Answer({ answer, index }: AnswerProps) {
    const className = cn(
        'p-4 rounded-lg border',
        answer.userAnswer === answer.correctAnswer
            ? 'border-lime-500 bg-lime-500/30'
            : 'border-red-700 bg-red-700/30'
    )

    return (
        <div key={index} className={className}>
            <p className="font-semibold mb-2">{answer.question}</p>
            <p>Your answer: {answer.userAnswer}</p>
            {answer.userAnswer !== answer.correctAnswer && (
                <p>Correct answer: {answer.correctAnswer}</p>
            )}
        </div>
    )
}
