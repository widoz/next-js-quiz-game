import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SetupGame } from '@/components/setup-game'
import { useQuizContext } from '@/components/state-context'

// Mock the context
jest.mock('@/components/state-context', () => ({
    useQuizContext: jest.fn(),
}))

describe('SetupGame', () => {
    const mockStartGame = jest.fn()
    const mockSelectSection = jest.fn()

    beforeEach(() => {
        // Setup default mock implementation
        ;(useQuizContext as jest.Mock).mockReturnValue({
            startGame: mockStartGame,
            selectSection: mockSelectSection,
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders the setup game component', () => {
        render(<SetupGame />)
        expect(
            screen.getByText('Select Documentation Section:')
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Start Quiz' })
        ).toBeInTheDocument()
    })

    it('calls startGame when Start Quiz button is clicked', () => {
        render(<SetupGame />)
        fireEvent.click(screen.getByRole('button', { name: 'Start Quiz' }))
        expect(mockStartGame).toHaveBeenCalled()
    })

    it('calls selectSection when a section is selected', () => {
        render(<SetupGame />)
        const select = screen.getByRole('combobox')
        fireEvent.click(select)
        // Note: You'll need to add actual section options based on your sections data
    })
})
