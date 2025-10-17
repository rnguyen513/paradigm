"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Type } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TextEditorProps {
  content: string
  onChange: (content: string) => void
}

export function TextEditor({ content, onChange }: TextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState("16")
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.textContent !== content) {
      editorRef.current.textContent = content
    }
  }, [content])

  const updateFormattingStates = () => {
    setIsBold(document.queryCommandState("bold"))
    setIsItalic(document.queryCommandState("italic"))
  }

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.textContent || "")
    }
    updateFormattingStates()
  }

  const handleSelectionChange = () => {
    updateFormattingStates()
  }

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange)
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange)
    }
  }, [])

  const applyFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    updateFormattingStates()
  }

  const handleFontSizeChange = (value: string) => {
    setFontSize(value)
    if (editorRef.current) {
      editorRef.current.style.fontSize = `${value}px`
    }
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border">
        <Button
          variant={isBold ? "default" : "ghost"}
          size="sm"
          onClick={() => applyFormat("bold")}
          className="h-8 w-8 p-0"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant={isItalic ? "default" : "ghost"}
          size="sm"
          onClick={() => applyFormat("italic")}
          className="h-8 w-8 p-0"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-border mx-2" />
        <div className="flex items-center gap-2">
          <Type className="h-4 w-4 text-muted-foreground" />
          <Select value={fontSize} onValueChange={handleFontSizeChange}>
            <SelectTrigger className="w-20 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12px</SelectItem>
              <SelectItem value="14">14px</SelectItem>
              <SelectItem value="16">16px</SelectItem>
              <SelectItem value="18">18px</SelectItem>
              <SelectItem value="20">20px</SelectItem>
              <SelectItem value="24">24px</SelectItem>
              <SelectItem value="32">32px</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="flex-1 p-6 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring min-h-[500px] text-foreground leading-relaxed"
        style={{ fontSize: `${fontSize}px` }}
        suppressContentEditableWarning
      />
    </div>
  )
}
