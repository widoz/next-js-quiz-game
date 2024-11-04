import { sections } from '@/questions/questions'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'
import { useQuizContext } from './state-context'

interface SelectSectionProps {
    onValueChange: (value: string) => void
}

export function SetupGame() {
    const { startGame, selectSection } = useQuizContext()

    return (
        <>
            <h3 className="text-xl font-semibold mb-4">
                Select Documentation Section:
            </h3>
            <SelectSection onValueChange={selectSection} />
            <Button onClick={() => startGame()} className="w-full mt-8">
                Start Quiz
            </Button>
        </>
    )
}

function SelectSection({ onValueChange }: SelectSectionProps) {
    return (
        <Select onValueChange={onValueChange} defaultValue={'All'}>
            <SelectTrigger>
                <SelectValue placeholder="Select a section" />
            </SelectTrigger>
            <SelectContent>
                {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                        {section}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
