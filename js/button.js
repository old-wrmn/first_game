    const buttonsContainer = document.getElementById("buttonsContainer");
    for (let i = 0; i < 5; i++) {
        const button = document.createElement("button");
        button.innerText = i+1;
        button.addEventListener("click", function() {
            startGame(i)
        })
        buttonsContainer.appendChild(button);
    }