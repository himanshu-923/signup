document.addEventListener("DOMContentLoaded", function () {
    const clientId = 'Iv1.63f1b7a7a2f7b52b';
    const redirectUri = 'https://himanshu-923.github.io/signup/';
    const githubAuthUrl = 'https://github.com/login/oauth/authorize';

    const loginBtn = document.getElementById('login-btn');

    loginBtn.addEventListener('click', function () {
        // Redirect the user to GitHub for authorization
        window.location.href = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    });
});
