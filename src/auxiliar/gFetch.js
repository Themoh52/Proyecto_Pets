const Productos = [
    {id:"1", name: "Brit Bread", description:"Comida de perro", stock: 25, price: 45000, foto: "https://dojiw2m9tvv09.cloudfront.net/11787/product/brit-care-adult-large-lamb-rice2202.jpg"},
    {id:"2", name: "Champion Cat", description:"Comida de gato", stock: 15, price: 35000, foto: "https://www.alimentosdemascotas.cl/wp-content/uploads/2020/08/Champion-Cat-pescado-20kg.jpg"},
    {id:"3", name: "Mister roedor", description:"Comida de cuyi", stock: 25, price: 20000, foto: "https://dojiw2m9tvv09.cloudfront.net/11787/product/britanimalsguineapigcuy1-5kg8171.jpg"},
    {id:"4", name: "Bati-can", description:"Capa decorativa para perro", stock: 25, price: 15000, foto: "https://http2.mlstatic.com/D_NQ_NP_698606-MLC48035813225_102021-O.jpg"},
    {id:"5", name: "Bolita", description:"Juguete para gato", stock: 25, price: 10000, foto: "https://cdnx.jumpseller.com/hygge-pets/image/26564317/resize/610/610?1661289146"}
]

export const gFetch = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
         resolve(Productos)   
        },3500)
    })
}


