const validCredentials = [
    { username: 'Adigun Farouk', password: 'anu0luwa' },
    { username: 'Psalm Daniel', password: 'psalmmy boy' },
    // { username: '', password: '' },
    // { username: '', password: '' },
    // { username: '', password: '' },
    // { username: '', password: '' },
    // { username: '', password: '' },
    // { username: '', password: '' },
];

function validateForm() {
    const username = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.🙂');
        return false;
    }

    const validUser = validCredentials.find(user => user.username === username && user.password === password);

    if (validUser) {
        document.getElementById('assessmentForm').addEventListener('submit', function (event) {
            event.preventDefault();
        
            const userName = document.getElementById('userName').value;
        
            // this will store the name in local storage
            localStorage.setItem('userName', userName);
        
            // Redirect to another page
            // window.location.href = 'result.html';
            window.location.href = 'confirm.html';
        });
    } else {
        alert('Invalid username or password.');
    }
}