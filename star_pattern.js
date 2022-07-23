

let lines = 7;

​

let noStar = 1;

let noStarLastLine = 2 * lines - 1;

​

for(let line = 1; line <= lines; line++){

    let curLine = line + " ";

​

    let spaces = noStarLastLine - noStar;

    for(let space = 0; space < Math.floor(spaces / 2); space++)curLine += " ";

    // here i know i neeed to print noStar

​

    let st = line;

    for(let star = 0; star < Math.floor(noStar / 2); star++){

        curLine += st;

        st--;

    }

    st = 1;

    for(let star = 0; star < noStar - Math.floor(noStar / 2); star++){

        curLine += st;

        st++;

    }

​

    console.log(curLine);

    noStar += 2;

}


