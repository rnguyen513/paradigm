"use client"

import { useState, useEffect } from "react"
import { TextEditor } from "@/components/text-editor"
import { CopilotModal } from "@/components/copilot-modal"
import { FileUpload } from "@/components/file-upload"
import { ResponsePanel } from "@/components/response-panel"

import Auth from "@/components/auth"

export default function Home() {
    const [isCopilotOpen, setIsCopilotOpen] = useState(false)
    const [editorContent, setEditorContent] = useState("")
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; content: string }>>([])
    const [aiResponse, setAiResponse] = useState<string | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const [isAuthorized, setIsAuthorized] = useState(false);

    // Keyboard shortcut to toggle copilot (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsCopilotOpen((prev) => !prev)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const handleFileUpload = (files: Array<{ name: string; content: string }>) => {
        setUploadedFiles((prev) => [...prev, ...files])
    }

    const handleRemoveFile = (index: number) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const handleInsertResponse = () => {
        if (aiResponse) {
            setEditorContent((prev) => prev + "\n\n" + aiResponse)
            setAiResponse(null)
        }
    }

    return (
        <div className="min-h-screen bg-background flex">
            {isAuthorized ? (<div>
                <div className="flex-1 flex flex-col">
                    <header className="border-b border-border px-6 py-4">
                        <h1 className="text-2xl font-bold text-foreground">Paradigm AI</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Press <kbd className="px-2 py-1 text-xs bg-muted rounded">⌘K</kbd> to open AI copilot
                        </p>
                    </header>

                    <div className="flex-1 p-6">
                        <TextEditor content={editorContent} onChange={setEditorContent} />
                    </div>
                </div>

                <aside className="w-80 border-l border-border bg-muted/30 flex flex-col">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-sm font-semibold text-foreground mb-4">Context Files</h2>
                        <FileUpload
                            onFilesUploaded={handleFileUpload}
                            uploadedFiles={uploadedFiles}
                            onRemoveFile={handleRemoveFile}
                        />
                    </div>
                </aside>

                <CopilotModal
                    isOpen={isCopilotOpen}
                    onClose={() => setIsCopilotOpen(false)}
                    editorContent={editorContent}
                    uploadedFiles={uploadedFiles}
                    onResponse={setAiResponse}
                    isGenerating={isGenerating}
                    setIsGenerating={setIsGenerating}
                />

                {aiResponse && (
                    <ResponsePanel response={aiResponse} onInsert={handleInsertResponse} onClose={() => setAiResponse(null)} />
                )}
            </div>
            ) : (
                <Auth setValid={setIsAuthorized}/>
            )}
        </div>
    )
}
