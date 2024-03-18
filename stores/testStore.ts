import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    state: () => ({
        test: [1,2,3]
    }),
    getters: {
        doubleCount: (state) => state.test.slice(0, 1)
    },
    actions: {
        testFunc() {
            console.log(this.test)
        },
    },
})