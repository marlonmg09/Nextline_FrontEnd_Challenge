import TaskCategory from './components/Task/TaskCategory'
import TaskItem from './components/Task/TaskItem'

export const routes = [
   { path: '', component: TaskCategory },
   { path: '/task', component: TaskItem },
   { path: '*', redirect: '/' }
]