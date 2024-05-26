// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch job listings from backend and render them
    function fetchJobListings() {
        // Use fetch API or AJAX to get job listings from backend
        // Example:
        fetch('/api/job-listings')
            .then(response => response.json())
            .then(data => {
                const jobListingsContainer = document.getElementById('job-listings-container');
                // Clear previous listings
                jobListingsContainer.innerHTML = '';
                // Render job listings
                data.forEach(job => {
                    const jobListing = document.createElement('div');
                    jobListing.classList.add('job-listing');
                    jobListing.innerHTML = `
                        <h3>${job.title}</h3>
                        <p>${job.description}</p>
                        <p>Location: ${job.location}</p>
                        <button class="apply-btn">Apply Now</button>
                    `;
                    jobListingsContainer.appendChild(jobListing);
                });
            })
            .catch(error => console.error('Error fetching job listings:', error));
    }

    // Function to handle form submission for student profile
    function submitProfile(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Use fetch API or AJAX to send form data to backend for processing
        // Example:
        fetch('/api/student-profile', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Profile saved successfully!');
            } else {
                throw new Error('Failed to save profile');
            }
        })
        .catch(error => console.error('Error saving profile:', error));
    }

    // Function to handle form submission for job posting
    function postJob(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Use fetch API or AJAX to send form data to backend for processing
        // Example:
        fetch('/api/post-job', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Job posted successfully!');
            } else {
                throw new Error('Failed to post job');
            }
        })
        .catch(error => console.error('Error posting job:', error));
    }

    // Event listeners
    document.getElementById('profile-form').addEventListener('submit', submitProfile);
    document.getElementById('post-job-form').addEventListener('submit', postJob);

    // Initial fetch of job listings
    fetchJobListings();
});
