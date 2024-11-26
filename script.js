

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;

        if (name && email) {
            alert(`Thank you, ${name}! Your message has been received.`);
            form.reset();
        } else {
            alert("Please fill in both your name and email.");
        }
    });
});
