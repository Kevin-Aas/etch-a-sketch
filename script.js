for (let i=0; i<16*16; i++) {
    // Get container and make new div
    let container = document.querySelector(".container");
    let div = document.createElement('div');
    // Style the new div:
    div.style.width = '20px';
    div.style.height = '20px';
    div.style.backgroundColor = "black";
    // Add event listener to new div:
    div.addEventListener('mouseover', function () {
        div.style.backgroundColor = "red"; // div changes color when mouseover
    });
    container.appendChild(div);
}