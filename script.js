// Fetch and inject header
fetch('base-templates/head.html')
.then(response => response.text())
.then(html => document.getElementById('head').innerHTML = html);

// Fetch and inject footer
fetch('base-templates/footer.html')
.then(response => response.text())
.then(html => document.getElementById('footer').innerHTML = html);

// getting emails for newsletter

function subscribeNewsletter(e){
    e.preventDefault();

    let s_email = document.getElementById("subscribe_email");

    alert("you subscribed!");
    console.log(`${s_email.value} has subscribed!`);

    s_email.value = "";
}

// getting data from appointment.html -- user input data

function submitLoginForm(e){
    e.preventDefault();

    let full_name = document.getElementById("fullName");
    let email = document.getElementById("email");
    let phone_number = document.getElementById("phone");
    let date = document.getElementById("appointmentDate");
    let message = document.getElementById("message");

    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(`The user's name is ${full_name.value} and email is ${email.value}`);

    // changing values back to placeholders

    full_name.value = "";
    email.value = "";
    phone_number.value = "";
    date.value = "";
    message.value = "";
}

