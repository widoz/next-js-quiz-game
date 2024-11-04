export type Question = {
    id: number
    difficulty: 'easy' | 'medium' | 'hard'
    question: string
    options: string[]
    correctAnswer: string
    section: string
}

export type Questions = Array<Question>
