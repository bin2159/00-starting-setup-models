const products=[]
const fs=require('fs')
const path=require('path')
const p=path.join(__dirname,'../','data','product.json')
const getProductsFromFile=(cb)=>{
        fs.readFile(p,(err,data)=>{
            if(err){
               return cb([])
            }else{
                return cb(JSON.parse(data))
            }
            
        })
}
module.exports=class Products{
    constructor(t){
        this.title=t
    }
    save(){
        getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err)
            })
        })
    }
    static fetchAll(cb){
        getProductsFromFile(cb)
    }
}