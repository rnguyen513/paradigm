"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, FileText, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FileUploadProps {
  onFilesUploaded: (files: Array<{ name: string; content: string }>) => void
  uploadedFiles: Array<{ name: string; content: string }>
  onRemoveFile: (index: number) => void
}

export function FileUpload({ onFilesUploaded, uploadedFiles, onRemoveFile }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [previewFile, setPreviewFile] = useState<{ name: string; content: string } | null>(null)

  const handleFiles = async (files: FileList) => {
    const newFiles: Array<{ name: string; content: string }> = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.name.endsWith(".txt")) {
        const content = await file.text()
        newFiles.push({ name: file.name, content })
      }
    }

    if (newFiles.length > 0) {
      onFilesUploaded(newFiles)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
        }`}
      >
        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
        <p className="text-sm text-muted-foreground mb-2">Drag & drop .txt files here</p>
        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
          Browse Files
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-muted-foreground uppercase">Uploaded Files</h3>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-card border border-border rounded-md group">
                  <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                    onClick={() => setPreviewFile(file)}
                  >
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                    onClick={() => onRemoveFile(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Preview Dialog */}
      <Dialog open={!!previewFile} onOpenChange={() => setPreviewFile(null)}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{previewFile?.name}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] w-full rounded-md border border-border p-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap">{previewFile?.content}</pre>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
