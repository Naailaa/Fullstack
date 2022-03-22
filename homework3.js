// Exercice 1:
// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.

function verifyi(object1,object2){
    let valeurs_obj2 = [],trouve = true;
    Object.keys(object2).forEach((key) => {
        valeurs_obj2.push(object2[key]);
    });
    Object.keys(object1).forEach((key) => {
          if(valeurs_obj2.indexOf(object1[key]) == -1){
              trouve = false;
          }
    });
    return trouve;
}
console.log(verifyi({ fruit: "banana", bnin:20 },{ quoi: "banana", bnin: 20, nhebou: true }));
console.log(verifyi( { fruit: 'tefaha', nhebou:true },{ quoi: "banana", bnin: 20, nhebou: true }));
console.log("nvm jatni 3el banan :')");

// Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 

function difference(array1,array2){
    let resultat = [];
    array1.forEach(function(element){
        if(array2.indexOf(element) != -1){
            if(this.indexOf(element) == -1){
            this.push(element);
            }
        }
    },resultat);
    return resultat;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));