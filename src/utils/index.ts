import 'dotenv/config'
import 'module-alias/register'
import ValidateEnv  from '@/utils/validateEnv'
import PostController from '@/resources/post/post.controller'
import App from './app'


ValidateEnv(); 

const app = new App([
    new PostController  
], Number(process.env.port))

app.listen();