import 'dotenv/config'
import 'module-alias/register'
import ValidateEnv  from '@/utils/validateEnv'

import App from './app'

const app = new App([], Number(process.env.port))

app.listen();