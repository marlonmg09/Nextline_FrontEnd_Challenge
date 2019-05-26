import TaskCategories from './components/Task/TaskCategories'
import TaskItem from './components/Task/TaskItem'

export const routes = [
   { path: '', component: TaskCategories },
   { path: '/task/:name', component: TaskItem, props: true },
   { path: '*', redirect: '/' }
]