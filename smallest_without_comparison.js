/*  Given 3 numbers. You need to find the smallest of three numbers without using comparison
operators
Input -> 12,44,2
Output -> 2"
*/

bit_no = 8

function min(x,y){
	return y + ((x-y) & ((x-y) >> (32 * bit_no-1)))
}

function smallest(x, y, z){
	return Math.min(x, Math.min(y, z));
	}
let x =4, y = 8, z = 6;

console.log("Smallest of 3 number is " + smallest(x, y, z));

-------------------------------------------------------
or
-------------------------------------------------------
function smallest(x, y, z)
{
    let c = 0;
    while (x && y && z) {
        x--;
        y--;
        z--;
        c++;
    }
    return c;
}
// Driver Code
let x = 20, y = 4, z = 54;
document.write("Minimum of 3 numbers is "
    + smallest(x, y, z));
