import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Content } from '@/components/card/content'
import { useQuizContext } from '@/components/state-context'

jest.mock('@/components/state-context', () => ({
    useQuizContext: jest.fn(),
}))

jest.mock('@/components/setup-game', () => ({
    SetupGame: () => <div data-testid="setup-game">Setup Game</div>,
}))

jest.mock('@/components/playing-game', () => ({
    PlayingGame: () => <div data-testid="playing-game">Playing Game</div>,
}))

jest.mock('@/components/finished-game', () => ({
    FinishedGame: () => <div data-testid="finished-game">Finished Game</div>,
}))

describe('Content', () => {
    const mockContextValue = {
        isSetup: jest.fn(),
        isPlaying: jest.fn(),
        isFinished: jest.fn(),
    }

    beforeEach(() => {
        mockContextValue.isSetup.mockReturnValue(false)
        mockContextValue.isPlaying.mockReturnValue(false)
        mockContextValue.isFinished.mockReturnValue(false)
        // @ts-expect-error mockReturnValue is not a function
        jest.mocked(useQuizContext).mockReturnValue(mockContextValue)
    })

    it('renders SetupGame when isSetup is true', () => {
        mockContextValue.isSetup.mockReturnValue(true)
        render(<Content />)
        expect(screen.getByTestId('setup-game')).toBeInTheDocument()
    })

    it('renders PlayingGame when isPlaying is true', () => {
        mockContextValue.isPlaying.mockReturnValue(true)
        render(<Content />)
        expect(screen.getByTestId('playing-game')).toBeInTheDocument()
    })

    it('renders FinishedGame when isFinished is true', () => {
        mockContextValue.isFinished.mockReturnValue(true)
        render(<Content />)
        expect(screen.getByTestId('finished-game')).toBeInTheDocument()
    })
})
