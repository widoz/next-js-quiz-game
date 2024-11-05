import { Questions } from './types'
import { routingQuestions } from './routing'
import { renderingQuestions } from './rendering'
import { dataFetchingQuestions } from './data-fetching'

export const questions: Questions = [
    ...routingQuestions,
    ...dataFetchingQuestions,
    ...renderingQuestions,
]

export const sections = [
    'All',
    'Routing',
    'Data Fetching',
    'Rendering',
    'Caching',
    'Styling',
    'Optimizing',
    // 'Configuring',
    // 'Testing',
    // 'Authentication',
    // 'API Routes',
    // 'Deploying',
]
