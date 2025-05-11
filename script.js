// Modal functionality
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === registerModal) {
        closeRegisterModal();
    }
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

// Create mobile menu
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
    <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#articles">Articles</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#about">About</a>
    </div>
    <div class="nav-auth">
        <button class="btn btn-login" onclick="showLoginModal()">Login</button>
        <button class="btn btn-register" onclick="showRegisterModal()">Register</button>
    </div>
`;
document.body.appendChild(mobileMenu);

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Form submission handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Mock login - in a real app, this would make an API call
    console.log('Login attempt:', { email, password });
    alert('Login functionality is mocked. In a real app, this would authenticate with a backend.');
    closeLoginModal();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Mock registration - in a real app, this would make an API call
    console.log('Registration attempt:', { name, email, password });
    alert('Registration functionality is mocked. In a real app, this would create a new user account.');
    closeRegisterModal();
});

// Premium content handling
document.querySelectorAll('.premium').forEach(element => {
    element.addEventListener('click', function(e) {
        if (!e.target.closest('.btn')) {
            alert('Please register to read this content.');
        }
    });
}); 