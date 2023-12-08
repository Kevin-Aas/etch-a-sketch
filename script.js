for (let i=0; i<16*16; i++) {
    let container = document.querySelector(".container");
    let new_div = document.createElement('div');
    new_div.style.width = '20px';
    new_div.style.height = '20px';
    new_div.style.backgroundColor = "black";
    container.appendChild(new_div);
}