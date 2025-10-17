"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, X } from "lucide-react"

interface ResponsePanelProps {
  response: string
  onInsert: () => void
  onClose: () => void
}

export function ResponsePanel({ response, onInsert, onClose }: ResponsePanelProps) {
  return (
    <div className="fixed bottom-6 right-6 w-[500px] z-50">
      <Card className="border-2 border-primary shadow-lg">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">AI Response</h3>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="h-[200px] w-full rounded-md border border-border p-3">
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{response}</p>
          </ScrollArea>

          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              Discard
            </Button>
            <Button size="sm" onClick={onInsert}>
              <Check className="h-4 w-4 mr-2" />
              Insert into Editor
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
