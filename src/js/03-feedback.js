import throttle from 'lodash.throttle';


const LOCAL_KEY = "feedback-form-state";
const formEl = document.querySelector("form");
const emailEl = formEl.querySelector("input");
const  textAreaEL =  document.querySelector("textarea")

const userData = {
name : emailEl.value,
message : textAreaEL.value,
}

returnFromLocalStorage()

formEl.addEventListener("submit",onFormSubmit)
emailEl.addEventListener("input",throttle(emailInput,500))
textAreaEL.addEventListener("input",throttle(textareaInput,500))

function onFormSubmit(event){
event.preventDefault();
event.currentTarget.reset();
localStorage.removeItem(LOCAL_KEY);
console.log(userData);

}

function emailInput(){
    userData.name = emailEl.value
    const userDataString = JSON.stringify(userData);
    localStorage.setItem(LOCAL_KEY,userDataString);
}

function textareaInput(){
    userData.message = textAreaEL.value;
    const userDataString = JSON.stringify(userData);
     localStorage.setItem(LOCAL_KEY,userDataString);
}

function returnFromLocalStorage(){
    const savedData = localStorage.getItem(LOCAL_KEY);
    
    if (savedData){
        const dataParsed = JSON.parse(savedData);
        emailEl.value = dataParsed.name;
        textAreaEL.value = dataParsed.message;
    }
}










