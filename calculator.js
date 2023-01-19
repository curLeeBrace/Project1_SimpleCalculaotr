
let user_input = (input) => 
{
    let output = document.getElementById('output');

    if(output.innerHTML == 0)
    {
        output.innerHTML = input;
        
    } else
    {
        output.innerHTML += input;
    }

}


//Numbers
let one = document.getElementById('one').addEventListener('click', () => {user_input("1")});
let two = document.getElementById('two').addEventListener('click', () => {user_input("2")});
let three = document.getElementById('three').addEventListener('click', () => {user_input("3")});
let four = document.getElementById('four').addEventListener('click', () => {user_input("4")});
let five = document.getElementById('five').addEventListener('click', () => {user_input("5")});
let six = document.getElementById('six').addEventListener('click', () => {user_input("6")});
let seven = document.getElementById('seven').addEventListener('click', () => {user_input("7")});
let eight = document.getElementById('eight').addEventListener('click', () => {user_input("8")});
let nine = document.getElementById('nine').addEventListener('click', () => {user_input("9")});
let zero = document.getElementById('zero').addEventListener('click', () => {user_input("0")});
let dot = document.getElementById('dot').addEventListener('click', () => {user_input(".")});
