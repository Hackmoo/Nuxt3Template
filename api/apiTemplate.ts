import axios from './axios'

export default {
    async get () {
        try {
            const resp = await axios.get('/products')
            return {
                data: resp.data,
                status: resp.status
            }
        } catch (err: any) {
            console.log(err)
        }
    },
}