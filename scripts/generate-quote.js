import { writeFileSync } from 'node:fs';

const request = {
  project: 'Sample Roof Replacement',
  customer: 'Example Client',
  sections: [
    { name: 'Tear off', quantity: 1, unit: 'job' },
    { name: 'Underlayment', quantity: 24, unit: 'sq' },
    { name: 'Shingles', quantity: 24, unit: 'sq' },
  ],
};

const rows = request.sections
  .map((item) => `| ${item.name} | ${item.quantity} | ${item.unit} |`)
  .join('\n');

const output = `# Quote Request

Project: ${request.project}

Customer: ${request.customer}

| Item | Quantity | Unit |
| --- | ---: | --- |
${rows}
`;

writeFileSync('quote-request.md', output);
