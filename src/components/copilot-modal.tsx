"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

interface CopilotModalProps {
  isOpen: boolean
  onClose: () => void
  editorContent: string
  uploadedFiles: Array<{ name: string; content: string }>
  onResponse: (response: string) => void
  isGenerating: boolean
  setIsGenerating: (generating: boolean) => void
}

export function CopilotModal({
  isOpen,
  onClose,
  editorContent,
  uploadedFiles,
  onResponse,
  isGenerating,
  setIsGenerating,
}: CopilotModalProps) {
  const [prompt, setPrompt] = useState("")

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    try {
      const response = await fetch("/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          editorContent,
          uploadedFiles,
        }),
      })

      const data = await response.json()
      onResponse(data.response)
      setPrompt("")
      onClose()
    } catch (error) {
      console.error("[v0] Error generating response:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Copilot
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">What would you like to generate or revise?</label>
            <Textarea
              placeholder="E.g., 'Write an introduction about AI' or 'Make this paragraph more concise'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  handleSubmit()
                }
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{uploadedFiles.length > 0 && `${uploadedFiles.length} context file(s) loaded`}</span>
            <span>Press ⌘↵ to submit</span>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose} disabled={isGenerating}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isGenerating || !prompt.trim()}>
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
