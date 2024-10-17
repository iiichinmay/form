function vaidateForm(){
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const mob = document.getElementById("mob").value;
    const education = document.getElementById("education").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("error-msg");

    errorMsg.innerHTML='';

    if(name === ''){
        errorMsg.innerHTML = "Please enter your name";
        return false;
    }
    if(dob === ''){
        errorMsg.innerHTML = "Please enter your DOB";
        return false;
    }
    const phonePattern = /^[0-9]{10}$/;  // ^ for start, [0-9] me se he num honge, {10} range of numbers, $ for end
    if(!phonePattern.test(mob)){         // testing of number matching pattern or not 
        errorMsg.textContent = "Please enter a valid 10-digit phone number.";
        return false;
    }
    if(education === ''){
        errorMsg.innerHTML = "Please enter your education";
        return false;
    }
    if(course === ''){
        errorMsg.innerHTML = "Please enter your course";
        return false;
    }
    const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!mail.test(email)){
        errorMsg.innerHTML = "Please enter a valid email address.";
        return false;
    }
    errorMsg.textContent = '';
    alert("Form Applied Successfully! ");
    return true;
};
