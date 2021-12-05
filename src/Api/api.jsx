import axios from 'axios'

const apis = {
    development: 'http://localhost:4000'
}

const api = axios.create({
    baseURL:apis[process.env.NODE_ENV]
})

api.interceptors.request.use((config)=>{
    const store = localStorage.getItem('logado')
    const loggedin = JSON.parse(store || '""')
    if(loggedin.token){
        config.headers={Authorization:`Bearer ${loggedin.token}`}
    }
    return config
})

export default api