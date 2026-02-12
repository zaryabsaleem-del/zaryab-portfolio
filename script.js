document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-projects-btn');
    const projectsSection = document.getElementById('projects-section');

    toggleBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class
        projectsSection.classList.toggle('hidden');

        // Update button text based on state
        if (projectsSection.classList.contains('hidden')) {
            toggleBtn.textContent = 'View My Projects';
        } else {
            toggleBtn.textContent = 'Hide Projects';
            
            // Smooth scroll to the projects after showing them
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});