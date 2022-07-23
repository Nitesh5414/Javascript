

// its not giving the right output

function rearrange(arr)

{

    let temp;

let i=0;

let j=arr.length-1;

    while(i<j)

    {  if(arr[i]<0 &&arr[j]>0)

        {

            i++;

            j--;

        }

    else if(arr[i]>0&&arr[j]<0)

      {

        temp=arr[i];

        arr[i]=arr[j];

        arr[j]=temp;

           i++;

            j--;

      }

      else if(arr[i]<0 && arr[j]<0)

        {

          i++;

        }

      else

      {

        j--;

      }

}      

return arr

} 

let arr=[-1,-2 ,4,6,8,-7]

console.log(rearrange(arr))

