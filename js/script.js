function myfunc() {
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.querySelector("#b1").value;
    b2 = document.querySelector("#b2").value;
    b3 = document.querySelector("#b3").value;
    b4 = document.querySelector("#b4").value;
    b5 = document.querySelector("#b5").value;
    b6 = document.querySelector("#b6").value;
    b7 = document.querySelector("#b7").value;
    b8 = document.querySelector("#b8").value;
    b9 = document.querySelector("#b9").value;

    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        window.alert('You are a winner');
        reset();
    } else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        window.alert('You are a winner');
        reset();
    }

    if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        window.alert('You are a winner');
        reset();
    } else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        window.alert('You are a winner');
        reset();
    }
}

function reset() {
    location.reload();
    document.querySelector("#b1").value = '';
    document.querySelector("#b2").value = '';
    document.querySelector("#b3").value = '';
    document.querySelector("#b4").value = '';
    document.querySelector("#b5").value = '';
    document.querySelector("#b6").value = '';
    document.querySelector("#b7").value = '';
    document.querySelector("#b8").value = '';
    document.querySelector("#b9").value = '';
}

let flag = 1;
function setValue() {
    if (flag == 1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "O";
        this.disabled = true;
        flag = 1;
    }
}
