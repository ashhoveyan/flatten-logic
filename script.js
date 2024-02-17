//flatten-logic
let arr =[ 3,[ 1,[ 2, [ 3, 4 ], [] ] ], [ 5 ], 55, [22], [], [ 6, 7]]
let iterator=arr.values()
let newArr=[]
for (const value of iterator) {
    //console.log(value);
    myFunc(value)
  }
    function myFunc (value){

        if(typeof value!="object"){
            newArr.push(value)
        }
        for(let i =0; i<value.length; i++ ){
            if(typeof value==="object"){
                myFunc(value[i])
            }
        }

    }
console.log(newArr);