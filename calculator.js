class Numbers
{
    
    constructor(input)
    {
        this.input = input;
        
    }

    set_input()
    {

      let output = document.getElementById('output');
      output.innerHTML = this.input;
      console.log(this.input);
       
    }

}

class One extends Numbers
{
    constructor(input)
    {
        super(input);
    }

}
class Two extends Numbers
{
    constructor(input)
    {
        super(input);
    }
}


let one = new One("1");
let two = new Two("2");


document.getElementById('one').addEventListener('click', () => one.set_input());
document.getElementById('two').addEventListener('click', () => two.set_input());
