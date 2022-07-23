function perms(input){
    var data = input.slice();
    var permutation = [];
    var n = data.length;

    if (n==0){
        return [
            []
        ];
    }
    else{
        var first = data.shift();
        var words = perms(data);
        words.forEach(function(word){
            for (var i =0; i<n; ++i){
                var tmp = word.slice();
                tmp.splice(i, 0, first)
                permutation.push(tmp);
            }
        });
    }
    return permutation;
}

var str ='ABC';
var chars = str.split('');
var result = perms(chars).map(function(p){
    return p.join('');
});

console.log(result)

