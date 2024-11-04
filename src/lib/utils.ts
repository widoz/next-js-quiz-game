import { Questions } from '@/questions/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function filterQuestions(questions: Questions, selectedSection: string) {
    if (selectedSection === 'All') {
        return questions
    }
    return questions.filter((q) => q.section === selectedSection)
}
