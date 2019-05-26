import tasks from '../../data/tasks'

const state = {
   tasks: []
}

const mutations = {
   set_tasks: (state, tasks) => {
      state.tasks = tasks
   }
}

const actions = {
   initTasks: ({commit}) => {
      commit('set_tasks', tasks)
   }
}

const getters = {
   tasks: state => {
      return state.tasks
   }
}

export default {
   state,
   mutations,
   actions,
   getters
}