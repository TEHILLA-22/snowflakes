const curtain = document.getElementById("curtain");
const tapToOpen = document.getElementById("tapToOpen");
const message = document.getElementById("message");
const interactiveSection = document.getElementById("interactiveSection");
const nameInput = document.getElementById("nameInput");
const submitName = document.getElementById("submitName");
const personalizedMessage = document.getElementById("personalizedMessage");

// Open Curtain
tapToOpen.addEventListener("click", () => {
    curtain.style.transition = "all 1.5s ease";
    curtain.style.transform = "translateY(-100vh)";
    setTimeout(() => {
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
            interactiveSection.classList.remove("hidden");
        }, 4000); // Show message for 4 seconds
    }, 1500);
});

// Personalized Greeting
submitName.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        personalizedMessage.textContent = `Merry Christmas, ${name}! 🎄 Wishing you a magical holiday season!`;
    } else {
        personalizedMessage.textContent = "Please enter a valid name! 🎁";
    }
});
