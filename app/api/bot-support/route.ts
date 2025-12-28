import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Gemini AI with the API key
const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyANH2lz8URi3OqdnEZaEQlvpmQ3Ub2bvL8'
const genAI = new GoogleGenerativeAI(API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    if (!API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables')
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 })
    }

    // Create a model instance
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    // Build conversation context
    let conversationContext = ''
    if (conversationHistory.length > 0) {
      conversationContext = conversationHistory
        .slice(-5) // Keep last 5 messages for context
        .map((msg: any) => `${msg.role}: ${msg.content}`)
        .join('\n') + '\n\n'
    }

    // Create a comprehensive prompt for web3 bot support
    const prompt = `
You are Web3Wise AI, an expert Web3 assistant designed to help users with blockchain, DeFi, NFTs, smart contracts, and all things Web3.

${conversationContext}User: ${message}

Please provide a helpful, accurate, and engaging response. Your response should be:

1. **Concise but informative** - Keep responses under 200 words unless more detail is specifically requested
2. **Web3-focused** - Focus on blockchain, DeFi, NFTs, smart contracts, and related technologies
3. **Practical** - Provide actionable advice and real-world examples
4. **Current** - Reference recent developments and trends in the Web3 space
5. **Educational** - Help users understand concepts, not just give answers
6. **Friendly** - Be approachable and encouraging, like a knowledgeable friend

If the user asks about:
- **DeFi**: Explain protocols, yield farming, liquidity pools, risks, and opportunities
- **NFTs**: Cover marketplaces, collections, utility, and investment considerations
- **Smart Contracts**: Discuss development, security, auditing, and deployment
- **Blockchain**: Explain different networks, consensus mechanisms, and use cases
- **Trading**: Provide insights on market analysis, risk management, and strategies
- **Technical Issues**: Help with wallet setup, transaction problems, and troubleshooting

Always prioritize security and best practices. If you're unsure about something, acknowledge the limitation and suggest where they might find more information.

Respond in a conversational tone, as if you're chatting with a friend who's interested in Web3.
`

    // Generate content
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({
      success: true,
      response: text,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Bot support API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process message',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Web3Wise AI Bot Support API',
    usage: {
      method: 'POST',
      body: {
        message: 'Your Web3 question here',
        conversationHistory: [
          { role: 'user', content: 'Previous message' },
          { role: 'assistant', content: 'Previous response' }
        ]
      }
    }
  })
} 
