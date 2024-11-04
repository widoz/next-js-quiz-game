import { CardContent } from '../ui/card'
import { SetupGame } from '../setup-game'
import { PlayingGame } from '../playing-game'
import { FinishedGame } from '../finished-game'
import { useQuizContext } from '../state-context'

export function Content() {
    const { isSetup, isPlaying, isFinished } = useQuizContext()

    return (
        <CardContent className="p-6">
            {isSetup() && <SetupGame />}
            {isPlaying() && <PlayingGame />}
            {isFinished() && <FinishedGame />}
        </CardContent>
    )
}
