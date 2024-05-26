// frontend/js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('job-listings');
    
    
    fetch('http://localhost:3000/api/jobs') 
        .then(response => response.json())
        .then(data => {
            jobListings.innerHTML = data.map(job => `<p>${job.title} - ${job.company}</p>`).join('');
        })
        .catch(error => {
            console.error('Error fetching job listings:', error);
            jobListings.innerHTML = '<p>Failed to load job listings. Please try again later.</p>';
        });
});

