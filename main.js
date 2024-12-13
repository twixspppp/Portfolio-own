// create
let arr =[
    {id:1,name:'muhammad',age:25},
    {id:2,name:'alisher',age:27},
    {id:3,name:'ali',age:29},
    {id:4,name:'muhlisa',age:30},
]
// console.log(arr);
// READ
// function onRead() {
//     arr.forEach((v)=>console.log(`${v.id}`))

// }


// onRead()
// onRead start
// function onRead(){
//     arr.forEach((v)=>console.log(`${v.id}`));
// }


// onRead()


// Delete
// function onDelete(id){
//     let res=arr.filter(v=>v.id !==id);
//     console.log(res);
// }
// onDelete(4)

// onAdd
// function onAdd(obj){
// let res =[...arr,obj]

// console.log(res);
// }
// onAdd({id:2,name:"ganisher",age:16})

// update
// function onUpdate(id,age){
//     let res =arr.map(v=>v.id == id? {...v,age:age}:v)
//     console.log(res);
// }
// onUpdate(3,17)


// search
function onSearch(name){
    let res =arr.filter(v=>v.age==age)
    console.log(res)
}

onSearch(25)
