let n=prompt("Nhap vao so phan tu");
let arr=[];
for (let i=0; i<n; i++) {
    arr.push(prompt("Nhap vao cac phan tu trong mang"))
}
let index=prompt("Nhap vao index can xoa");
alert(`Mang truoc khi xoa index la ${arr}`)
function tryRemoveFromArray(arr,index){
    if(index>(arr.length-1)){
        return arr
    }
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(i<index){
            newArr[i]=arr[i]
        }else{
            newArr[i-1]=arr[i]
        }
    }
    return newArr
}
alert(`Mang sau khi xoa la ${tryRemoveFromArray(arr,index)}`)
