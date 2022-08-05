import axiosConfig from 'features/axiosConfig.js'

async function  loginApi(data){
    let response={status:null,response:''};
    try{
        let x = await axiosConfig.post('/login?api_password=invoworkhard',{data})
        console.log(x)
        response.status=true
        response.response=x
    }catch(e){
        console.log({e})
        response.status=false
        response.response=e.message
    }
    return response
}
export default loginApi