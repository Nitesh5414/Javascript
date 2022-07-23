

let lines = 7;

​

let noStar = 1;

let noStarLastLine = 2 * lines - 1;

​

for(let line = 1; line <= lines; line++){

    let curLine = "";

    // I need to print noStar

    // I have total noStarLastLine

​

    let spaces = noStarLastLine - noStar;

    for(let space = 0; space < Math.floor(spaces / 2); space++)curLine += " ";

    for(let star = 0; star < noStar; star++){

        if(star === 0 || star + 1 === noStar)curLine += "*";

        else curLine += " ";

    }

    // for(let space = 0; space < Math.floor(spaces / 2); space++)curLine += " ";

​

    console.log(curLine);

    noStar += 2;

}

​

noStar = 2 * lines - 1;

for(let line = lines; line >= 1; line--){

    let curLine = "";

    // I need to print noStar

    // I have total noStarLastLine

​

    let spaces = noStarLastLine - noStar;

    for(let space = 0; space < Math.floor(spaces / 2); space++)curLine += " ";

    // noStar = 5

    // star -> 0, 1, 2, 3, 4

    for(let star = 0; star < noStar; star++){

        if(star === 0 || star + 1 === noStar)curLine += "*";

        else curLine += " ";

    }

    // for(let space = 0; space < Math.floor(spaces / 2); space++)curLine += " ";

​

    console.log(curLine);

    noStar -= 2;

}


