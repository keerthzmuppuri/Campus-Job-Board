// Sample job data
const jobData = [
    { title: "Software Developer Intern", company: "ABC Tech", description: "We are looking for a software developer intern to join our team.", applyLink: "#" },
    { title: "Marketing Assistant", company: "XYZ Marketing", description: "Join our marketing team and assist with various marketing activities.", applyLink: "#" },
    //more job listings can be as needed
];
// Function to display job listings on the job board
function displayJobListings() {
    const jobListingsContainer = document.getElementById('job-listings');

    // Clear existing job listings
    jobListingsContainer.innerHTML = '';

    // Iterate through job data and create job listing cards
    jobData.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = job.title;

        const company = document.createElement('h6');
        company.classList.add('card-subtitle', 'mb-2', 'text-muted');
        company.textContent = job.company;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = job.description;

        const applyLink = document.createElement('a');
        applyLink.classList.add('card-link');
        applyLink.setAttribute('href', job.applyLink);
        applyLink.textContent = 'Apply Now';

        // Append elements to card body
        cardBody.appendChild(title);
        cardBody.appendChild(company);
        cardBody.appendChild(description);
        cardBody.appendChild(applyLink);

        // Append card body to card
        card.appendChild(cardBody);

        // Append card to job listings container
        jobListingsContainer.appendChild(card);
    });
}

// Call the displayJobListings function to populate job listings when the page loads
document.addEventListener('DOMContentLoaded', displayJobListings);
