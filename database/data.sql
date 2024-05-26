-- Insert sample data into tables

-- Inserting sample students
INSERT INTO students (name, email, major, graduation_year) VALUES
('John Doe', 'john@example.com', 'Computer Science', 2023),
('Jane Smith', 'jane@example.com', 'Business Administration', 2024),
('Michael Johnson', 'michael@example.com', 'Electrical Engineering', 2022);

-- Inserting sample job listings
INSERT INTO jobs (title, description, requirements, type, location, company_name, contact_email, expiry_date) VALUES
('Frontend Developer', 'Looking for a frontend developer with experience in HTML, CSS, and JavaScript.', 'Experience with React.js is a plus.', 'full-time', 'New York', 'ABC Company', 'jobs@abccompany.com', '2024-06-30'),
('Marketing Intern', 'We are seeking a marketing intern to assist with social media marketing campaigns.', 'Strong communication skills and creativity required.', 'internship', 'Los Angeles', 'XYZ Marketing', 'internships@xyzmarketing.com', '2024-07-15'),
('Part-time Tutor', 'Seeking a tutor for high school mathematics and science subjects.', 'Must have excellent academic record and previous tutoring experience.', 'part-time', 'Chicago', 'Smart Education', 'info@smartedu.com', '2024-06-15');
