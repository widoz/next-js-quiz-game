import { Card as _Card } from '../ui/card'
import { Content } from './content'
import { CardHeaderProps, Header } from './header'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardProps extends CardHeaderProps {}

export function Card({ title, description }: CardProps) {
    return (
        <_Card className="w-full max-w-4xl border-2 shadow-xl">
            <Header title={title} description={description} />
            <Content />
        </_Card>
    )
}
