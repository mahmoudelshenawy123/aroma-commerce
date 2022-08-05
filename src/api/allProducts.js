import axiosConfig from 'features/axiosConfig.js'


async function allProductsApi (){
    let response={status:null,response:''};
    try{
        let products =await axiosConfig.get('/allproducts?api_password=invoworkhard&lang=ar')
        console.log(products)
        response.status=true
        response.response=products
    }catch(e){
        console.log(e.message)
        response.status=false
        response.response=e.message
    }
    return response
}

export default allProductsApi