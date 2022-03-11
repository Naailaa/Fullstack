//HomeWork: Write a JavaScript program that  sorts the items of an array
function tri(arr,len){
    for (var i=0;i< len-1 ;i++) {
        for (var j=i+1;j< len ;j++) {
            if(arr[i]>arr[j]){
                c=arr[i];
                arr[i]=arr[j];
                arr[j]=c;
            }
        }
    }
    return arr;
}

function affichage(arr,len){
    for (var i=0;i< len ;i++) {
        console.log(arr[i]);
    }
}

var arr =[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ],

arr=tri(arr,arr.length);
affichage(arr,arr.length);

