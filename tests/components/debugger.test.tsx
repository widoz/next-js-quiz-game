import { render, screen } from '@testing-library/react'
import { Debugger } from '../../src/components/debugger'
import { useQuizContext } from '../../src/components/state-context'

jest.mock('../state-context', () => ({
    useQuizContext: jest.fn(),
}))

describe('Debugger', () => {
    const mockState = {
        isSetup: jest.fn(() => true),
        isPlaying: jest.fn(() => false),
        isFinished: jest.fn(() => false),
        currentQuestionIndex: 0,
        selectedAnswer: null,
        score: 0,
        selectedSection: 'All',
    }

    beforeEach(() => {
        ;(useQuizContext as jest.Mock).mockReturnValue(mockState)
    })

    it('renders debug state information', () => {
        render(<Debugger />)
        expect(screen.getByText('Debug State')).toBeInTheDocument()
        expect(screen.getByText(/isSetup/)).toBeInTheDocument()
        expect(screen.getByText(/selectedSection/)).toBeInTheDocument()
    })

    it('displays the correct state values', () => {
        render(<Debugger />)
        const preElement = screen.getByText(/"isSetup": true/)
        expect(preElement).toBeInTheDocument()
    })
})
