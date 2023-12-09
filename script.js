// Set up initial grid
let size = 16;
make_grid(size);

// Give a prompt when clicking button
let btn = document.querySelector(".prompt_btn");
btn.addEventListener('click', function () {
    let answer = prompt("How many squares per side? (limit 100)");
    size = parseInt(answer);
    while (true) {
        if (size > 100) {
            answer = prompt("That's too many tiles! Please give a reasonable number.");
            size = parseInt(answer);
        }
        else if (size < 1) {
            answer = prompt("I said resonable... not negative");
            size = parseInt(answer);
        }
        else {break;}
    }
    make_grid(size);
});

function make_grid (size) {
    // Get body and old container reference:
    let body = document.querySelector("body");
    let old_container = document.querySelector('.container');
    // Set up new container:
    let container = document.createElement('div');
    container.setAttribute('class', 'container');

    // Make size amount of div tiles for the container:
    for (let i=0; i<size*size; i++) {
        let div = document.createElement('div');
        // Style the new div:
        let div_size = old_container.clientWidth / size;
        div.style.width = `${div_size}px`;
        div.style.height = `${div_size}px`;
        div.style.backgroundColor = "black";
        // Add event listener to new div:
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = "red"; // div changes color when mouseover
        });
        container.appendChild(div);
    }

    // Replace the old container with the new:
    body.replaceChild(container, old_container);
}