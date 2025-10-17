import { generateText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

export async function POST(req: Request) {
  try {
    const { prompt, editorContent, uploadedFiles } = await req.json()

    // Build context from uploaded files
    const contextText = uploadedFiles
      .map((file: { name: string; content: string }) => `File: ${file.name}\n\n${file.content}`)
      .join("\n\n---\n\n")

    // Build the full prompt with context
    const fullPrompt = `You are a helpful writing assistant. The user is working on a document and needs your help.

${contextText ? `Context from uploaded files:\n\n${contextText}\n\n---\n\n` : ""}

Current document content:
${editorContent || "(empty document)"}

---

User request: ${prompt}

Please provide a helpful response. If the user asks you to revise existing content, provide the revised version. If they ask you to generate new content, provide that content directly. Important: your response should be formatted in a paragraph structure, as if it's being directly copied into a text editor. No sections, special formatting, emojis, or headers.`

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    })

    const { text } = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt: fullPrompt,
      maxOutputTokens: 2000,
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("[v0] Error in copilot API:", error)
    return Response.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
