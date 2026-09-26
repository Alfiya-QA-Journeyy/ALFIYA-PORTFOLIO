// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if (data.message) alert(data.message);  // Show success/error
            if (data.access_token) window.location.href = 'dashboard.html';  // Redirect on success
        });
});
