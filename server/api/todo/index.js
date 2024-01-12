import {db} from '../../db'
import {v4 as uuid} from 'uuid'

export default defineEventHandler(async (event) => {
    const {method} = event.node.req
    switch (method) {
        case 'GET':
            return db.todos
        case 'POST':
            const {task} = await readBody(event)
            try {
                if (!task) {
                    return new Error('task required!')
                }
                const new_task = {
                    id: uuid(),
                    task: task,
                    is_completed: false
                }
                db.todos.push(new_task)
                return new_task
            } catch (e) {
                return e
            }
    }
})