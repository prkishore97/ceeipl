"use client"

import { Button } from "@/components/ui/button"

export default function LeadForm({ onContactClick }: { onContactClick: () => void }) {
  return (
    <div className="mt-8">
      <Button onClick={onContactClick} size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
        Contact Us
      </Button>
    </div>
  )
}
