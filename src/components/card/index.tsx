import { Card as _Card } from '../ui/card'
import { Content } from './content'
import { Header } from './header'

export function Card() {
    return (
        <_Card className="w-full max-w-4xl border-2 shadow-xl">
            <Header />
            <Content />
        </_Card>
    )
}
