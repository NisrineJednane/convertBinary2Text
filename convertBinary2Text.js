function binaryAgent(arr) {
    return arr.split(' ').map(x => String.fromCharCode(parseInt(x, 2))).join('');
}
