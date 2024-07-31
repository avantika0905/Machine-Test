document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const form = e.target;

    // Extract form values
    const name = form.name.value;
    const photo = form.photo.files[0];
    const rank = form.rank.value;
    const id = form.id.value;

    // Create PDF
    const doc = new jsPDF();
    doc.setFontSize(16);

    // Add user details
    doc.text(`ID Number: ${id}`, 150, 20, { align: 'right' });

    // Add photo if provided
    if (photo) {
        const img = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(photo);
        });

        // Add photo to PDF
        doc.addImage(img, 'JPEG', 10, 30, 60, 60);

        // Add name beside the photo
        doc.text(`Name: ${name}`, 75, 50);
    }

    // Add the congratulatory line and rank below the photo
    doc.setFont('helvetica', 'bold');
    doc.text(`Congratulations!! You have Secured ${rank}`, 10, 100);

    // Save the PDF
    doc.save('form.pdf');
});






