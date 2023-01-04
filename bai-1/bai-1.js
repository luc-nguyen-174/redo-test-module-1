//sap xep tu nho toi lon
function scoreArraySort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}



//lay phan tu thu 3 tu duoi len
function arrayOfThreeScore(arr) {
    arr = scoreArraySort(arr);

    if (arr.length <3) {
        return 1;
    }
    return arr[arr.length - 3];
}

let arr = [40,30,50,60,70,15];

let maxOfThere = arrayOfThreeScore(arr);

if (maxOfThere === 1) {
    alert("khong co phan tu lon thu 3");
} else {
    alert("phan tu lon thu 3 la " + maxOfThere);
}