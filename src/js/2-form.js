const feedbackForm = document.querySelector(".feedback-form");
const LS_KAY = "feedback-form-state";

feedbackForm.addEventListener("input", setData);

const email = feedbackForm.elements.email;
const text = feedbackForm.elements.message;

function setData() {
    const emailVal = email.value.trim();
    const textVal = text.value.trim();
    const data = JSON.stringify({emailVal, textVal});
    localStorage.setItem(LS_KAY ,data);
}

const jsnData = localStorage.getItem(LS_KAY);
const data = JSON.parse(jsnData);

if (data !== null) {
    email.value = data.emailVal;
    text.value = data.textVal;
}


feedbackForm.addEventListener("submit", resetData);

function resetData(event) {
    event.preventDefault();

    const focusEl = event.target;
    const emailVal = focusEl.elements.email.value.trim();
    const textVal = focusEl.elements.message.value.trim();
    
    if (emailVal === "" || textVal === "") {
        alert("Add all input");
    } else{
        try {
                console.log({email: emailVal, text: textVal});
                email.value = "";
                text.value = "";
                localStorage.clear();  
        } catch{ console.error();}
    }
}