/** @type {import('next').NextConfig} */
module.exports = {
  // Your other configurations...
  // Specify export behavior using the 'output' property
  // Use 'export' as the value to generate static HTML exports
  output: {
    // Set 'export' as the target
    // This generates a static HTML export
    // Make sure to replace 'export' with 'html' if you want to use the static HTML export feature
    // 'html' will be the new value starting from Next.js 12
    target: 'export',
  },
  // Other configurations...
};
