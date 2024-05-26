$(document).ready(function() {
    // Function to fetch data from an API and display it
    function fetchData() {
        $.ajax({
            url: 'https://api.example.com/data',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // Assuming response is an array of objects
                response.forEach(function(item) {
                    $('#dataContainer').append('<div>' + item.name + ': ' + item.value + '</div>');
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    // Call fetchData function when page loads
    fetchData();

    // Function to handle form submission
    $('#myForm').submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Serialize form data
        var formData = $(this).serialize();

        // Example AJAX form submission
        $.ajax({
            url: 'https://api.example.com/submit',
            method: 'POST',
            data: formData,
            success: function(response) {
                // Display success message
                $('#formMessage').text('Form submitted successfully!');
            },
            error: function(xhr, status, error) {
                // Display error message
                $('#formMessage').text('Error submitting form. Please try again later.');
                console.error('Error submitting form:', error);
            }
        });
    });

    // Function to handle navigation
    $('nav a').click(function(event) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Get the href attribute value
        var target = $(this).attr('href');

        // Scroll to the target
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});


