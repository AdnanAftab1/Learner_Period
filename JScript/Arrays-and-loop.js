let Arr=[];
let INHTML="";
function adder3(name1,date1){
    Arr.push({name:name1,date:date1});
    INHTML="";
    for (let index = 0; index < Arr.length; index++) {
        const element = Arr[index];
        INHTML=INHTML+`<div>${Arr[index].name} </div><div>${Arr[index].date}</div><button class="btn btn-danger" onclick="remover(${index})">Remove</button>`;
    }              
    document.querySelector('.Jojo').innerHTML=INHTML;
    document.querySelector('.Mojo').innerText='';
}
function remover(value)
{
    let index1=Number(value);
    Arr.splice(index1,1);
    INHTML="";
    for (let index = 0; index < Arr.length; index++) {
        const element = Arr[index];
        INHTML=INHTML+`<div>${Arr[index].name} </div><div>${Arr[index].date}</div><button class="btn btn-danger" onclick="remover(${index})">Remove</button>`;
    }
    document.querySelector('.Jojo').innerHTML=INHTML;
}