# Form to PDF Generator

This project is a simple web application that allows users to submit a form and generate a PDF document with the input details. The form includes fields for the user's name, a photo upload, a rank selection, and an ID number. Upon submission, the details are captured and a PDF is generated and downloaded.

## Features

- **User Input Form**: Includes fields for Name, Photo, Rank (dropdown), and ID Number (formatted with a '#' followed by six digits).
- **PDF Generation**: On form submission, the input details are compiled into a PDF document.
- **Photo Handling**: The uploaded photo is embedded in the PDF.
- **Responsive Design**: The interface is styled to be user-friendly and responsive.

## Technologies Used

- **HTML**: Structure of the form.
- **CSS**: Styling for the form and page layout.
- **JavaScript**: Handling form submission and PDF generation using `jsPDF` and `html2canvas`. 

## Project Structure

- **index.html**: The main HTML file containing the form structure.
- **styles.css**: CSS file for styling the form and layout.
- **script.js**: JavaScript file handling form submission, PDF creation, and photo embedding.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/
   cd form-to-pdf-generator
