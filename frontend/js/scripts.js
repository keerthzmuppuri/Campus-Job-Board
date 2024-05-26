// frontend/js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // This function will run when the DOM is fully loaded
    // You can add your JavaScript logic here
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '<p>Loading job listings...</p>';

    // Example: Fetch job listings from the backend (replace with your actual API endpoint)
    fetch('/api/jobs')
        .then(response => response.json())
        .then(data => {
            jobListings.innerHTML = data.map(job => `<p>${job.title} - ${job.company}</p>`).join('');
        })
        .catch(error => {
            console.error('Error fetching job listings:', error);
            jobListings.innerHTML = '<p>Failed to load job listings. Please try again later.</p>';
        });
});
