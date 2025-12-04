# Web3Wise - AI-Powered Research Hub =>

A comprehensive Web3 research platform powered by Google's Gemini AI that provides real-time, intelligent insights on any Web3 topic.

## 🚀 Features

- **AI-Powered Search**: Search any Web3 topic and get comprehensive insights
- **Real-time Information**: Get up-to-date information from across the internet
- **Structured Results**: Well-organized research results with key points, trends, and technical details
- **Web3 Focused**: Specialized in blockchain, DeFi, NFTs, and Web3 technologies
- **Interactive UI**: Beautiful, responsive interface with smooth animations

## 🛠️ Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp env.example .env.local

# Edit .env.local and add your API key
GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔍 How to Use

### Research Hub

1. **Navigate to Research Hub**: Go to `/research-hub` in the application
2. **Search Topics**: Type any Web3 topic you want to research, such as:

   - "DeFi protocols"
   - "NFT market trends"
   - "Layer 2 scaling solutions"
   - "Smart contract security"
   - "Cross-chain bridges"
   - "Web3 gaming"
   - "Tokenomics design"

3. **Get Comprehensive Results**: The AI will provide:

   - **Summary**: Overview of the topic
   - **Key Points**: Important highlights
   - **Current Trends**: Latest developments
   - **Technical Details**: Implementation specifics
   - **Use Cases**: Practical applications
   - **Challenges**: Current limitations
   - **Future Outlook**: Predictions and developments
   - **Resources**: Additional reading materials
   - **Related Topics**: Connected subjects

4. **Explore Related Topics**: Click on related topics to dive deeper

### Search Examples

Try these search queries to see the AI in action:

- **"DeFi yield farming strategies"** - Get insights on DeFi protocols
- **"NFT marketplace development"** - Learn about NFT infrastructure
- **"Blockchain scalability solutions"** - Understand scaling approaches
- **"Web3 security best practices"** - Security guidelines
- **"Tokenomics design patterns"** - Economic model insights

## 🏗️ Architecture

### Frontend

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons

### Backend

- **Next.js API Routes**: Serverless API endpoints
- **Google Generative AI**: Gemini 1.5 Flash model
- **Structured JSON Responses**: Consistent data format

### Key Components

- **Research Hub Page** (`/app/research-hub/page.tsx`): Main search interface
- **Gemini API Route** (`/app/api/gemini-search/route.ts`): AI search endpoint
- **Environment Configuration**: API key management

## 🔧 Configuration

### Environment Variables

| Variable         | Description                | Required |
| ---------------- | -------------------------- | -------- |
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes      |

### API Configuration

The Gemini API is configured to use the `gemini-1.5-flash` model, which provides:

- Fast response times
- High-quality results
- Cost-effective pricing
- Web search capabilities

## 🎯 Use Cases

### For Developers

- Research new Web3 technologies
- Understand implementation details
- Find best practices
- Explore use cases

### For Researchers

- Get comprehensive topic overviews
- Identify current trends
- Find related research areas
- Access technical details

### For Investors

- Market analysis and trends
- Technology assessment
- Risk evaluation
- Future outlook

### For Enthusiasts

- Learn about Web3 concepts
- Stay updated with trends
- Explore new technologies
- Understand practical applications

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- API keys are stored securely in environment variables
- No sensitive data is exposed to the client
- All API calls are made server-side
- Input validation and sanitization implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check that your Gemini API key is correctly set
2. Ensure you have sufficient API quota
3. Verify your internet connection
4. Check the browser console for errors

## 🔄 Updates

The application automatically uses the latest information available through Gemini's web search capabilities, ensuring you always get current and relevant information about Web3 topics.
