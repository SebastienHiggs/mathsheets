function generatePDF() {
    window.jsPDF = window.jspdf.jsPDF;
    const pdf = new jsPDF();
    pdf.text('this is my first line in jdPDF', 50, 50);
    pdf.save('a43.pdf');
    }