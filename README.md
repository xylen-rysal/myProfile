# Student Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark/light mode support
- 📱 Fully responsive layout
- 🚀 Built with Next.js 15 and React 19
- 💼 Sections for About, Skills, Projects, Internships, and Contact
- 📧 Working contact form with email integration
- 🎯 SEO optimized
- ⚡ Fast loading and optimized performance

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Email:** Resend
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd student-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
Create a `.env.local` file and add:
\`\`\`
RESEND_API_KEY=your_resend_api_key
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Contact Form

The contact form uses Resend for email delivery. Make sure to:
1. Sign up for a Resend account
2. Get your API key
3. Add it to your environment variables
4. Update the recipient email in `app/actions/contact.ts`

## License

MIT License - feel free to use this project for your own portfolio!
