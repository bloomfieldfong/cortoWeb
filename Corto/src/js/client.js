const state = {
  size : 0,
  time : ''
};

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

const render = lState => {

  root.innerHTML = null;
  const topBar = document.createElement('div');
  topBar.className = 'topBar';

  const text = document.createElement('input');
  text.className = 'text'
  topBar.appendChild(text);

  const generate = document.createElement('button');
  generate.innerHTML = 'Generate'
  topBar.appendChild(generate);

  root.appendChild(topBar);
  

  const date = document.createElement('div');
  date.innerHTML = state.time;
  root.appendChild(date);

  generate.onclick = () =>{

    state.size = document.getElementsByClassName('text')[0].value;
    console.log(state.size);
    state.time= new Date();
    render(lState)

  }
  
  const Obar = document.createElement('div');
  Obar.className = 'Obar'

  for(let i = 0; i < state.size; i++){

    const bar = document.createElement('div');
    bar.className = "bar";
    document.getElementById("bar").style.resize = fibonacci(i);
    bar.innerHTML = fibonacci(i);
    Obar.appendChild(bar);
  }
  root.appendChild(Obar);


}

render(state);