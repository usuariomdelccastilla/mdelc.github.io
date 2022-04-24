var winner = Math.floor(Math.random() * 9)

var scratch = Math.floor(Math.random() * 9)


if (winner === scratch) {
    scratch = Math.floor(Math.random() * 9)
}

const treasure = (location) => {
    // alert(location)
    // console.log('winner', winner, 'scratch', scratch)
    if (location === winner) {
        document.getElementById(location).innerHTML = "😻"
    } else if (location === scratch) {
        document.getElementById(location).innerHTML = "😿"
    } else {
        document.getElementById(location).innerHTML = "❌"
    }
}