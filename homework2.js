// Remove a specific Element from an array ( no predefined functions allowed)
function remove(array,element){
    for(i = 0;i < array.length ; i++){
        if(array[i] == element){
            for(j = i + 1;j < array.length ;j++){
                array[j-1] = array[j];
            }
            i--;
            array.length--;
        }
    }
}
// Remove Duplicates from Sorted Array( no predefined functions allowed)
function remove_duplicate(arr){
    for(let i  = 0; i <= arr.length ; i++){
        if(i + 1 < arr.length){
            let j = i + 1;
            let number = 0;
            while(arr[j] == arr[i]){
                j++;
                number++;
            }
            for(let k = 0;k < number ; k++){
                for(f = i+1 ; f < arr.length - 1;f++){
                    arr[f] = arr[f+1];
                }
                arr.length--;
            }

        }
    } 
}

let arr =[ -3, 8, 7, 6, 6, 5, -4, 3, 2, 1 ],x=6,arr2 =[1,1,1,2, 2 ,3 , 3 , 3 , 4 ,4, 5, 5 ,5 ];

remove(arr,x);
console.log(arr);
remove_duplicate(arr2);
console.log(arr2);
