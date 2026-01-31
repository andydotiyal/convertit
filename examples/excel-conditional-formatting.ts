/**
 * Excel Conditional Formatting Examples
 * Demonstrates row coloring, cell styles, and conditional formatting features.
 */

import Convertit, { StylePresets } from '../src/index';

const salesData = [
  { name: 'Karthik', department: 'Sales', amount: 15000, target: 12000, status: 'Achieved' },
  { name: 'Bob', department: 'Marketing', amount: 0, target: 10000, status: 'Pending' },
  { name: 'Charlie', department: 'Sales', amount: 8000, target: 12000, status: 'In Progress' },
  { name: 'Diana', department: 'Engineering', amount: -500, target: 8000, status: 'Deficit' },
  { name: 'Eve', department: 'Sales', amount: 20000, target: 15000, status: 'Achieved' },
  { name: 'Frank', department: 'Marketing', amount: 5000, target: 10000, status: 'In Progress' },
  { name: 'Grace', department: 'Engineering', amount: 12000, target: 10000, status: 'Achieved' },
  { name: 'Henry', department: 'Sales', amount: 0, target: 12000, status: 'Pending' },
];

async function zebraStripingExample() {
  console.log('Example 1: Zebra Striping');

  const result = await Convertit.from(salesData)
    .toExcel({
      sheetName: 'Zebra Stripes',
      rowStyles: [
        {
          condition: { type: 'even' },
          style: { fill: { color: '#E3F2FD' } },
        },
        {
          condition: { type: 'odd' },
          style: { fill: { color: '#FFFFFF' } },
        },
      ],
    })
    .toFile('./examples/output/zebra-stripes.xlsx');

  console.log(`Created: ${result}`);
}

async function conditionalRowHighlightExample() {
  console.log('Example 2: Conditional Row Highlighting');

  const result = await Convertit.from(salesData)
    .toExcel({
      sheetName: 'Conditional Rows',
      rowStyles: [
        {
          condition: {
            type: 'columnValue',
            column: 'amount',
            operator: 'equal',
            value: 0,
          },
          style: {
            fill: { color: '#FFCDD2' },
            font: { color: '#C62828', bold: true },
          },
        },
        {
          condition: {
            type: 'custom',
            predicate: (rowData: any[]) => {
              const amount = Number(rowData[2]);
              const target = Number(rowData[3]);
              return amount > target;
            },
          },
          style: {
            fill: { color: '#C8E6C9' },
            font: { color: '#2E7D32' },
          },
        },
        {
          condition: {
            type: 'columnValue',
            column: 'amount',
            operator: 'lessThan',
            value: 0,
          },
          style: {
            fill: { color: '#FFF9C4' },
            font: { color: '#F57F17', bold: true },
          },
        },
      ],
    })
    .toFile('./examples/output/conditional-rows.xlsx');

  console.log(`Created: ${result}`);
}

async function stylePresetsExample() {
  console.log('Example 3: Style Presets');

  const result = await Convertit.from(salesData)
    .toExcel({
      sheetName: 'Style Presets',
      rowStyles: [
        {
          condition: {
            type: 'columnValue',
            column: 'amount',
            operator: 'lessThan',
            value: 0,
          },
          style: StylePresets.negativeHighlight,
        },
        {
          condition: {
            type: 'columnValue',
            column: 'status',
            operator: 'equal',
            value: 'Achieved',
          },
          style: StylePresets.positiveHighlight,
        },
        {
          condition: {
            type: 'columnValue',
            column: 'status',
            operator: 'equal',
            value: 'Pending',
          },
          style: StylePresets.warningHighlight,
        },
      ],
    })
    .toFile('./examples/output/style-presets.xlsx');

  console.log(`Created: ${result}`);
}

async function cellStylesExample() {
  console.log('Example 4: Cell-Level Styling');

  const result = await Convertit.from(salesData)
    .toExcel({
      sheetName: 'Cell Styles',
      cellStyles: [
        {
          target: 'D',
          style: {
            numFmt: '$#,##0.00',
            alignment: { horizontal: 'right' },
          },
        },
        {
          target: 'E',
          style: {
            numFmt: '$#,##0.00',
            alignment: { horizontal: 'right' },
            font: { italic: true },
          },
        },
        {
          target: 'A1:E1',
          style: {
            font: { bold: true, size: 12, color: '#FFFFFF' },
            fill: { color: '#1976D2' },
            alignment: { horizontal: 'center' },
            border: {
              bottom: { style: 'medium', color: '#0D47A1' },
            },
          },
        },
      ],
    })
    .toFile('./examples/output/cell-styles.xlsx');

  console.log(`Created: ${result}`);
}

async function completeReportExample() {
  console.log('Example 5: Complete Report');

  const result = await Convertit.from(salesData)
    .toExcel({
      sheetName: 'Sales Report',
      rowStyles: [
        {
          condition: { type: 'even' },
          style: { fill: { color: '#F5F5F5' } },
        },
        {
          condition: {
            type: 'columnValue',
            column: 'amount',
            operator: 'equal',
            value: 0,
          },
          style: StylePresets.negativeHighlight,
        },
        {
          condition: {
            type: 'custom',
            predicate: (rowData: any[]) => {
              const amount = Number(rowData[2]);
              const target = Number(rowData[3]);
              return amount > target;
            },
          },
          style: StylePresets.positiveHighlight,
        },
      ],
      cellStyles: [
        {
          target: 'A1:F1',
          style: {
            font: { bold: true, size: 12, color: '#FFFFFF' },
            fill: { color: '#3F51B5' },
            alignment: { horizontal: 'center', vertical: 'middle' },
            border: {
              bottom: { style: 'thick', color: '#1A237E' },
            },
          },
        },
        {
          target: 'D',
          style: {
            numFmt: '$#,##0.00',
            alignment: { horizontal: 'right' },
          },
        },
        {
          target: 'E',
          style: {
            numFmt: '$#,##0.00',
            alignment: { horizontal: 'right' },
          },
        },
      ],
      freezePane: { row: 1 },
    })
    .toFile('./examples/output/complete-report.xlsx');

  console.log(`Created: ${result}`);
}

async function main() {
  console.log('\nconvertit - Excel Conditional Formatting Examples\n');
  console.log('='.repeat(50));

  try {
    const { mkdir } = await import('fs/promises');
    await mkdir('./examples/output', { recursive: true });

    await zebraStripingExample();
    await conditionalRowHighlightExample();
    await stylePresetsExample();
    await cellStylesExample();
    await completeReportExample();

    console.log('\n' + '='.repeat(50));
    console.log('All examples completed successfully!');
    console.log('Check ./examples/output/ for generated files.\n');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
