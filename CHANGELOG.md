# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Added

#### Core Features

- **File Conversion**: Support for PDF, Word (DOCX), Excel (XLSX), CSV, HTML, JSON, XML, Markdown, and image formats
- **Builder Pattern**: Fluent API for chaining conversion operations
- **Batch Processing**: Convert multiple files with configurable concurrency
- **Progress Tracking**: Monitor conversion progress with callbacks

#### Excel Conditional Formatting (NEW)

- **Row Styles**: Color entire rows based on conditions
  - Even/odd row styling (zebra stripes)
  - Column value conditions (equal, greater than, less than, etc.)
  - Custom expression-based conditions
- **Cell Styles**: Apply styles to specific cells, columns, or ranges
  - Number formatting (currency, percentage, dates)
  - Font styling (bold, italic, color, size)
  - Fill colors and patterns
  - Border styles
  - Alignment options
- **Style Presets**: Pre-built styles for common scenarios
  - `positiveHighlight`, `negativeHighlight`, `warningHighlight`
  - `headerStyle`, `totalRow`
  - `currencyFormat`, `percentFormat`
- **Native Excel Conditional Formatting**
  - Data bars
  - Color scales
  - Icon sets

#### Template Engine (NEW)

- Simple yet powerful template processing
- Variable substitution with dot notation
- Conditionals (`#if`, `#unless`, `#else`)
- Loops (`#each`)
- Context blocks (`#with`)
- Partial templates
- Built-in helpers:
  - `formatDate`, `formatNumber`, `formatCurrency`, `formatPercent`
  - `upper`, `lower`, `capitalize`, `titleCase`, `truncate`
  - `add`, `subtract`, `multiply`, `divide`, `round`
  - `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `and`, `or`, `not`
  - `json`, `join`, `length`, `default`

#### Transformers

- **Watermark**: Add text watermarks to PDFs
- **Encryption**: Password protect PDF files
- **Compression**: Reduce file sizes
- **Page Numbers**: Add page numbering to PDFs
- **Headers/Footers**: Add custom headers and footers
- **Merge**: Combine multiple files
- **Split**: Split files into parts
- **Rotation**: Rotate PDF pages

#### Developer Experience

- **ESLint**: Code linting with TypeScript support
- **Husky**: Git hooks for pre-commit and pre-push
- **lint-staged**: Run linters on staged files
- **GitHub Actions CI**: Automated testing, linting, and builds
- **TypeScript**: Full type definitions for all APIs

#### Utilities

- File format detection and validation
- MIME type utilities
- Color parsing and conversion
- File size formatting
- Environment detection (Node.js, Bun, Browser)
- Async utilities (delay, retry, timeout)

### Technical Details

- Built with Bun for fast development
- ESM and CJS dual module support
- Comprehensive test coverage
- Type-safe error handling with custom error classes

---

## [0.x.x] - Previous Development

Initial development and internal releases.
