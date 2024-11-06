import { Questions } from './types'
import { routingQuestions } from './routing'
import { renderingQuestions } from './rendering'
import { dataFetchingQuestions } from './data-fetching'
import { cachingQuestions } from './caching'
import { stylingQuestions } from './styling'
import { optimizingQuestions } from './optimizing'
import { configurationQuestions } from './configuration'
import { testingQuestions } from './testing'
import { authenticationQuestions } from './authentication'
import { apiRoutesQuestions } from './api-routes'
import { deployingQuestions } from './deplyoing'

export const questions: Questions = [
    ...routingQuestions,
    ...dataFetchingQuestions,
    ...renderingQuestions,
    ...cachingQuestions,
    ...stylingQuestions,
    ...optimizingQuestions,
    ...configurationQuestions,
    ...testingQuestions,
    ...authenticationQuestions,
    ...apiRoutesQuestions,
    ...deployingQuestions,
]

export const sections = [
    'All',
    'Routing',
    'Data Fetching',
    'Rendering',
    'Caching',
    'Styling',
    'Optimizing',
    'Configuring',
    'Testing',
    'Authentication',
    'API Routes',
    'Deploying',
]
