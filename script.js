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

    let s_email = document.getElementById("subscribe_email").value;

    alert("you subscribed!");
    console.log(`${s_email} has subscribed!`);
}

// getting data from appointment.html -- user input data

function submitLoginForm(e){
    e.preventDefault();

    let full_name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone").value;
    let date = document.getElementById("appointmentDate").value;
    let message = document.getElementById("message").value;

    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(`The user's name is ${full_name} and email is ${email}`);

    // changing values back to placeholders

    full_name = "";
    email = "";
    phone_number = "";
    date = "";
    message = "";
}

