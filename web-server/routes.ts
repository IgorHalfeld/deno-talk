import {Router, Context} from 'https://deno.land/x/oak/mod.ts';
import {getUserById, getUsers} from './database.ts'

const router = new Router();

router
  .get('/', (context: Context) => {
    context.response.body = 'alive'
  })
  .get('/users', async (context: Context) => {
    context.response.body = getUsers()
  })
  .get('/users/:id', async (context) => { // hack
    context.response.body = getUserById(Number(context.params.id))
  })

export default router
