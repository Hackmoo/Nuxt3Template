import { defineStore } from 'pinia'
import api from '~/api'

export const useTestStore = defineStore('test', {
    state: () => ({
        test: [1,2,3]
    }),
    getters: {
        doubleCount: (state) => state.test.slice(0, 1)
    },
    actions: {
        async testFunc() {
            const resp = await api.apiTemplate.get()
            if(resp && resp.data) this.test = resp.data
        },
    },
})