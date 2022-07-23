//Write a JavaScript program to sort by id an array of JavaScript objects.
// relevel solution
// const data =[ {
//     Id: 45,
//     Name: 'ram'
//     },{
//     Id: 4,
//     Name: 'raju'
//     },{
//     Id: 90,
//     Name: 'kumar'
//     }]
// data.sort((a, b) => (a.Id > b.Id) ? 1 : -1)
// console.log(data)


const dataArr = {

    "hello": [{
      "id": 114,
      "name": "ABC",
      "region": "Sri Lanka",
      
    }, {
      "id": 115,
      "name": "XYZ",
      "region": "Japan",
      
    },
    {
        "id": 116,
        "name": "LMN",
        "region": "AUS",
        
      },
      {
        "id": 117,
        "name": "JKL",
        "region": "UK",
        
      }]
  
  };
  const sortArray = dataArr['hello'];
  
  console.log(sortArray.sort((a, b) => {
    if (a.id < b.id)
      return -1;
    if (a.id > b.id)
      return 1;
    return 0;
  }));