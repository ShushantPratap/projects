let container = document.querySelector(".container");
let check = document.getElementsByClassName("check");

let array = [];
for (let i=0; i<9; i++){
    let divEl = document.createElement("div");
    divEl.classList.add("box");
    container.insertAdjacentElement("beforeend", divEl);
    divEl.addEventListener("click", ()=>{
        if(array==""){
            divEl.innerText="O";
            array.push("O");    
        }else if(divEl.innerHTML==="O"||divEl.innerHTML==="X"){
        }else if(array[array.length-1]=="O"){
            divEl.innerText="X";
            array.push("X");
        }else if(array[array.length-1]=="X"){
            divEl.innerText="O";
            array.push("O");
        }
        if(array.length==9){
            console.log("hello")
        }

        let box = document.getElementsByClassName("box"),
        match = (box[0].innerText==="O"||box[0].innerText==="X") && box[0].innerText===box[1].innerText && box[0].innerText===box[2].innerText,
        match1 = (box[3].innerText==="O"||box[3].innerText==="X") && box[3].innerText===box[4].innerText && box[3].innerText===box[5].innerText,
        match2 = (box[6].innerText==="O"||box[6].innerText==="X") && box[6].innerHTML===box[7].innerText && box[6].innerText===box[8].innerText,
        match3 = (box[0].innerText==="O"||box[0].innerText==="X") && box[0].innerHTML===box[3].innerText && box[0].innerText===box[6].innerText,
        match4 = (box[1].innerText==="O"||box[1].innerText==="X") && box[1].innerHTML===box[4].innerText && box[1].innerText===box[7].innerText,
        match5 = (box[2].innerText==="O"||box[2].innerText==="X") && box[2].innerHTML===box[5].innerText && box[2].innerText===box[8].innerText,
        match6 = (box[0].innerText==="O"||box[0].innerText==="X") && box[0].innerHTML===box[4].innerText && box[0].innerText===box[8].innerText,
        match7 = (box[2].innerText==="O"||box[2].innerText==="X") && box[2].innerHTML===box[4].innerText && box[2].innerText===box[6].innerText;
        if(match){
            check[0].classList.add("checkTop");
            check[0].classList.add("win");
        }if(match1){
            check[0].classList.add("checkMid");
            check[0].classList.add("win");
        }if(match2){
            check[0].classList.add("checkBottom");
            check[0].classList.add("win");
        }if(match3){
            check[1].classList.add("checkLeft");
            check[1].classList.add("win");
        }if(match4){
            check[1].classList.add("checkCenter");
            check[1].classList.add("win");
        }if(match5){
            check[1].classList.add("checkRight");
            check[1].classList.add("win");
        }if(match6){
            if(match || match1 || match2){
                check[1].classList.add("checkRotate");
                check[1].classList.add("win");
            }else{
                check[0].classList.add("checkRotate");
                check[0].classList.add("win");
            }
        }if(match7){
            if(match3 || match4 || match5){
                check[0].classList.add("checkRotate1");
                check[0].classList.add("win");
            }else{
                check[1].classList.add("checkRotate1");
                check[1].classList.add("win");
            }
        }
        if(check[0].classList=="win" || check[1].classList=="win"){
            console.log("win win")
        }
        console.log(array)
    });
    
}
console.log(check[0].classList.length)
