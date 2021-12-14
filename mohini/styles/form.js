function validateForm() {

    let fname = document.getElementById('fname').value;

    if(fname === '') {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('fname_error').innerHTML = 'First name cannot be empty!';
        document.getElementById('fname').focus();
        return;
    }
    else if(fname.length < 2 || fname.length > 20) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('fname_error').innerHTML = 'First name should be 2-20 characters long!';
        document.getElementById('fname').focus();
        return;
    }

    let lname = document.getElementById('lname').value;
     
    if(lname === '') {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('lname_error').innerHTML = 'Last name cannot be empty!';
        document.getElementById('lname').focus();
        return;
    }
    else if(lname.length < 2 || lname.length > 20) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('lname_error').innerHTML = 'Last name should be 2-20 characters long!';
        document.getElementById('lname').focus();
        return;
    }

    let email = document.getElementById('email').value;

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('email_error').innerHTML = 'Please enter a valid Email Address!';
        document.getElementById('email').focus();
        return;
    }

    let subject = document.getElementById('message').value;

    if(subject.length < 20 || subject.length > 150) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('message_error').innerHTML = 'Subject should be 20-100 characters long!';
        document.getElementById('message').focus();
        return;
    }
    
    document.getElementById('submit_success').innerHTML = 'Form submitted Successfully!';
    clearForm();
    clearError();
}

function clearError() {
    document.getElementById('fname_error').innerHTML = '';
    document.getElementById('lname_error').innerHTML = '';
    document.getElementById('email_error').innerHTML = '';
    document.getElementById('message_error').innerHTML = '';
}

function clearForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}