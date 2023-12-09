// Set up initial grid
let size = 16;
make_grid(size);

// Make a new grid when pressing a button with given size
let size_btns = document.querySelectorAll(".size_btn");
size_btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let size = btn.getAttribute("name");
        size = parseInt(size);
        make_grid(size);
    })
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