-- Create tables for your Campus Job Board database

-- Table to store student information
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    major VARCHAR(50),
    graduation_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store job listings
CREATE TABLE jobs (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    requirements TEXT,
    type ENUM('part-time', 'full-time', 'internship', 'freelance') NOT NULL,
    location VARCHAR(100),
    company_name VARCHAR(100),
    contact_email VARCHAR(100),
    posted_date DATE DEFAULT CURRENT_DATE,
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
