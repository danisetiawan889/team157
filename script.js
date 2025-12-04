// Mobile Menu Toggle
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("show");
});

// Fade Section On Scroll
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// Gallery Slider (3 gambar di desktop, 2 di mobile)
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
let index = 0;

function showGallerySlide(i) {
    const isMobile = window.innerWidth <= 768;
    const slideWidth = isMobile ? 50 : 33.33; // 2 gambar di mobile, 3 di desktop
    const offset = -i * slideWidth;
    gallery.style.transform = `translateX(${offset}%)`;
}

document.getElementById("next").onclick = () => {
    const isMobile = window.innerWidth <= 768;
    const maxIndex = isMobile ? images.length - 2 : images.length - 3; // Geser 2 di mobile, 3 di desktop
    index = (index + 1) % (maxIndex + 1);
    showGallerySlide(index);
};

document.getElementById("prev").onclick = () => {
    const isMobile = window.innerWidth <= 768;
    const maxIndex = isMobile ? images.length - 2 : images.length - 3;
    index = (index - 1 + (maxIndex + 1)) % (maxIndex + 1);
    showGallerySlide(index);
};

showGallerySlide(index); // Inisialisasi

// Team Slider (Hanya di mobile)
const teamItems = document.querySelectorAll('.member');
let teamIndex = 0;

function showTeamSlide(i) {
    if (window.innerWidth <= 768) { // Hanya aktif di mobile
        teamItems.forEach((item, id) => {
            item.classList.toggle("active", id === i);
            item.classList.toggle("hidden", id !== i);
        });
    }
}

document.getElementById("teamNext").onclick = () => {
    if (window.innerWidth <= 768) {
        teamIndex = (teamIndex + 1) % teamItems.length;
        showTeamSlide(teamIndex);
    }
};

document.getElementById("teamPrev").onclick = () => {
    if (window.innerWidth <= 768) {
        teamIndex = (teamIndex - 1 + teamItems.length) % teamItems.length;
        showTeamSlide(teamIndex);
    }
};

showTeamSlide(teamIndex); // Inisialisasi

// Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formResponse").textContent = "Message sent successfully!";
});