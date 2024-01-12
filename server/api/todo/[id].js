import {db} from '../../db'

export default defineEventHandler(async (event) => {
    const {method} = event.node.req
    const {params} = event.context
    switch (method) {
        case 'PUT':
            const {task, is_completed} = await readBody(event);
            if (!task || (is_completed === undefined && is_completed === null)) {
                return new Error("all inputs are required!")
            }
            try {
                db.todos.forEach((todo, index) => {
                    if (todo.id === params.id) {
                        db.todos[index].task = task;
                        db.todos[index].is_completed = is_completed;
                    }
                })
                return db.todos
            } catch (e) {
                return e
            }
        case 'DELETE':
            try {
                const updateed_db = db.todos.filter((todo, index) => {
                    return todo.id !== params.id
                })
                db.todos = updateed_db
                return db.todos
            } catch (e) {
                return e
            }
    }
})