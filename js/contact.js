const contactForm = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

const sendContact = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert(`Hi ${name}, we have received your message:\n"${message}".\nWe will get back to you at your email:\n${email}.`);

};

document.addEventListener("DOMContentLoaded", () => {
    contactForm.addEventListener("submit", sendContact);
});
