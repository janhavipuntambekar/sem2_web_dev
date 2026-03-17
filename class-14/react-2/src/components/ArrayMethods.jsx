import React from 'react'

const ArrayMethods = () => {

  // 1. Callbacks 

  function inner(){
    console.log('im inner function');
  }

  function outer(innerRef){
    console.log('im outer function');
    innerRef();
  }

  outer(inner);

  //outer is is (HOF) higher order functionnd inner is the callback function


  // 2. Array Methods

  let arr=[10,20,30,40,50];

  // square all the elements 
  let sqrarr=[];
  for (let i=0;i<arr.length;i++){
    let sqval=arr[i]*arr[i];
    sqrarr.push(sqval);
  }
  console.log(sqrarr);


  // cube all the elements
  let cubearr=[];
  for (let i=0;i<arr.length;i++){
    let cubeval=arr[i]*arr[i]*arr[i];
    cubearr.push(cubeval);
  }
  console.log(cubearr);


  // 3. Generalized menthod where callback performs the given task

  function map(arr, cb){
    let newarr=[];
    for (let i=0;i<arr.length;i++){
      let val=cb(arr[i]);
      newarr.push(val);
    }
    return newarr;
  }

  const doubleNum=(val)=>{
    return 2*val;
  }

  const cube=(val)=>{
    return val*val*val;
  }

  const sq=(val)=>{
    return val*val;
  }

  console.log("generalized map function", map(arr, doubleNum));
  console.log("generalized map function", map(arr, cube));
  console.log("generalized map function", map(arr, sq));


  // 4. Inbuilt map function

  function triple(ele){
    return 3*ele;
  }

  const tripleArr=arr.map(triple);
  console.log("triple through map", tripleArr);

  // 5. filter

  const isEven=(num)=>{
    return num%2==0;
  }

  const filteredArr=arr.filter(isEven);
  console.log(filteredArr);

  return (
    <h1>Array Methods</h1>

  )
}

export default ArrayMethods