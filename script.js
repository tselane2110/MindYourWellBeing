// Fetch and inject header
fetch('base-templates/head.html')
.then(response => response.text())
.then(html => document.getElementById('head').innerHTML = html);

// Fetch and inject footer
fetch('base-templates/footer.html')
.then(response => response.text())
.then(html => document.getElementById('footer').innerHTML = html);

// getting data from appointment.html -- user input data
