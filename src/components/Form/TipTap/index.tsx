'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
  `,
  })

  return (
    <EditorContent
      editor={editor}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  )
}
