document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    
    if(email === 'wrisaad@gmail.com' && pass === '123456'){
        window.location.href = 'bankDashboard.html';
    }
    else {
        alert ('invalid user')
    }
})