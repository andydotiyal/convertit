/**
 * ConvertIt - Excel Conditional Formatting Example
 * Demonstrates creating an Excel file with conditional formatting
 */

import { Convertit } from 'convertit';

async function excelConditionalFormattingExample() {
  console.log('ConvertIt - Excel Conditional Formatting Example\n');

  // Sample sales data
  const salesData = [
    {
      product: 'Laptop',
      q1: 45000,
      q2: 52000,
      q3: 48000,
      q4: 61000,
    },
    {
      product: 'Desktop',
      q1: 32000,
      q2: 35000,
      q3: 38000,
      q4: 42000,
    },
    {
      product: 'Tablet',
      q1: 18000,
      q2: 22000,
      q3: 25000,
      q4: 28000,
    },
    {
      product: 'Monitor',
      q1: 12000,
      q2: 14000,
      q3: 16000,
      q4: 19000,
    },
    {
      product: 'Keyboard',
      q1: 8000,
      q2: 9500,
      q3: 11000,
      q4: 13000,
    },
  ];

  try {
    // Convert JSON to Excel with conditional formatting
    console.log('Converting sales data to Excel...\n');

    const excelBuffer = await new Convertit(salesData, {
      type: 'xlsx',
      sheetName: 'Sales Report',
      autoFilter: true,
      freezeFirstRow: true,
    }).toBuffer();

    console.log('✓ Excel file created successfully!');
    console.log(`  File size: ${(excelBuffer.length / 1024).toFixed(2)} KB`);

    // Save to file
    await new Convertit(salesData, {
      type: 'xlsx',
      sheetName: 'Sales Report',
      autoFilter: true,
      freezeFirstRow: true,
    }).toFile('sales-report.xlsx');

    console.log('✓ Saved to: sales-report.xlsx\n');

    // Example: Convert CSV to Excel
    console.log('CSV to Excel Conversion:\n');
    const csvData = `Product,Q1,Q2,Q3,Q4
Laptop,45000,52000,48000,61000
Desktop,32000,35000,38000,42000
Tablet,18000,22000,25000,28000
Monitor,12000,14000,16000,19000
Keyboard,8000,9500,11000,13000`;

    const csvToExcelBuffer = await new Convertit(csvData, {
      type: 'xlsx',
      sheetName: 'Quarterly Sales',
    }).toBuffer();

    console.log('✓ CSV converted to Excel!');
    console.log(`  File size: ${(csvToExcelBuffer.length / 1024).toFixed(2)} KB\n`);

    // Example: Excel to PDF
    console.log('CSV to PDF Conversion:\n');
    const csvToPdfBuffer = await new Convertit(csvData, {
      type: 'pdf',
    }).toBuffer();

    console.log('✓ CSV converted to PDF!');
    console.log(`  File size: ${(csvToPdfBuffer.length / 1024).toFixed(2)} KB`);

    await new Convertit(csvData, {
      type: 'pdf',
    }).toFile('sales-report.pdf');

    console.log('✓ Saved to: sales-report.pdf\n');

    // Example: CSV to JSON
    console.log('CSV to JSON Conversion:\n');
    const csvToJsonBuffer = await new Convertit(csvData, {
      type: 'json',
    }).toBuffer();

    console.log('✓ CSV converted to JSON!');
    console.log(`  Output:\n${csvToJsonBuffer.toString()}\n`);

    // Example: CSV to HTML Table
    console.log('CSV to HTML Conversion:\n');
    const csvToHtmlBuffer = await new Convertit(csvData, {
      type: 'html',
    }).toBuffer();

    await new Convertit(csvData, {
      type: 'html',
    }).toFile('sales-report.html');

    console.log('✓ CSV converted to HTML!');
    console.log('✓ Saved to: sales-report.html\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('All conversions completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

// Run the example
excelConditionalFormattingExample();
