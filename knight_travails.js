
const getMoves = function (position) {
    let moves = [];

    if (position[0]+2<=7) {
        if (position[1]+1<=7) {
            moves.push([position[0]+2, position[1]+1]);
        }
        if (position[1]-1>=0) {
            moves.push([position[0]+2, position[1]-1]);
        }
    }
    if (position[0]-2>=0) {
        if (position[1]+1<=7) {
            moves.push([position[0]-2, position[1]+1]);
        }
        if (position[1]-1>=0) {
            moves.push([position[0]-2, position[1]-1]);
        }
    }
    if (position[1]+2<=7) {
        if (position[0]+1<=7) {
            moves.push([position[0]+1, position[1]+2]);
        }
        if (position[1]-1>=0) {
            moves.push([position[0]-1, position[1]+2]);
        }
    }
    if (position[1]-2>=0) {
        if (position[0]+1<=7) {
            moves.push([position[0]+1, position[1]-2]);
        }
        if (position[0]-1>=0) {
            moves.push([position[0]-1, position[1]-2]);
        }
    }

    return moves;
}

const equals = function(pos1,pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

const contains = function (arr, pos) {
    for (let i = 0; i < arr.length; i++) {
        if (equals(arr[i], pos)) {
            return true;
        }
    }
    return false;
}

const knightMoves_src = function (start, end) {
    let queue = []
    let visited = []
    queue.push([...start,[start]])

    while (queue.length) {
        let current = queue.shift()
        if (equals(current, end)) {
            return current[2]
        }
        visited.push(current)
        let possib = getMoves(current)
        for (let j = 0; j < possib.length; j++) {
            if (contains(visited, possib[j]) === false) {
                queue.push([...possib[j],[...current[2], possib[j]]]);
            }
        }
    }

    return false;
}

const knightMoves = function (start, end) {
    let sol = knightMoves_src(start,end)
    let ret =  "You made it in " + (sol.length-1) + " moves! Here's your path:\n"
    sol.forEach(item=>ret+="["+item[0]+","+item[1]+"]\n")
    return ret
}

console.log(knightMoves([3,3],[4,3]))