document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const faqCard = button.parentElement;
        const paragraph = faqCard.querySelector('p');
        if (paragraph.style.display === 'block') {
            paragraph.style.display = 'none';
            button.textContent = '+';
        } else {
            paragraph.style.display = 'block';
            button.textContent = '-';
        }
    });
});

// header toolbar
// Toggle the navigation menu on clicking the hamburger icon
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');

    // Optional: Change the icon to 'X' when menu is open
    const icon = document.querySelector('.menu-toggle i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});



// faq

function toggleFAQ(element) {
    const card = element.parentElement;
    const answer = card.querySelector('.faq-answer');
    const toggleButton = card.querySelector('.faq-toggle');

    if (card.classList.contains('active')) {
        answer.style.display = 'none';
        toggleButton.textContent = '+';
        card.classList.remove('active');
    } else {
        answer.style.display = 'block';
        toggleButton.textContent = '−';
        card.classList.add('active');
    }
}
