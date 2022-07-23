// var a=[[1,2,3,4],[2,3,4,5],[3,5,3,2]]
// var num=21
// function unique(a,num){
//     allvals={}
//     for(i=0;i<a.length;i++){
//         for(j=0;j<a[0].length;j++){
//             if(a[i][j] in allvals){
//                 allvals[a[i][j]]+=1
//             }
//             else
//             allvals[a[i][j]]=1
//         }
//     }
//     for(i in allvals){
//         if(allvals[i]==1){
//             console.log(i)
//         }
// }
// }
// unique(a,num)

function uniqueElements(mat){
    let max=0;
    let flag=0;
    
    //finding maximum element
    for(let i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        if(mat[i][j]>max){
          max=mat[i][j]
        }
      }
    }
    
    //frequency of every elements
    let newArr = Array(max+1).fill(0);
    console.log("before",newArr)
    for(let i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        newArr[mat[i][j]]++;
      }
    }
    console.log("after",newArr)
    //console every unique elements
    for(let i=0;i<=max;i++){
      if(newArr[i]==1){
        console.log(i+" ")
        flag=1;
      }
    }
    
    if(flag==0){
      console.log("no unique elem")
    }
  }
  //20
  //[0,1,2,0,0,2...]//20 length
  let mat=[
                  [11,2,2,20],
           [5,16,20,7],
           [1,13,5,16],
           [6,7,18,15]
                  ]
  
  uniqueElements(mat)