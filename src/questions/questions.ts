import { Questions } from './types'
import { routingQuestions } from './routing'

export const questions: Questions = [...routingQuestions]

export const sections = [
    'All',
    'Routing',
    'Data Fetching',
    'Rendering',
    // 'Caching',
    // 'Styling',
    // 'Optimizing',
    // 'Configuring',
    // 'Testing',
    // 'Authentication',
    // 'API Routes',
    // 'Deploying',
]
