import { Card as _Card } from '../ui/card'
import { Content } from './content'
import { Header } from './header'

export function Card() {
    return (
        <_Card className="w-full max-w-4xl bg-white dark:bg-[#0A0A0A] border-0 shadow-lg">
            <Header />
            <Content />
        </_Card>
    )
}
