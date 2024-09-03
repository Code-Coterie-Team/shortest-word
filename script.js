function findShort(s){
    let words = s.split(' ');
    let minLen = words[0].length;
    for (let i = 0; i < words.length; i++){
        if (words[i].length < minLen){
            minLen = words[i].length;
    }
    }
    return minLen;
}