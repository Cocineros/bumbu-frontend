import { Wysimark, useEditor } from '@wysimark/react'

export default function Markdown () {
  const editor = useEditor({ initialMarkdown: "# Hello World" })
  return (
  <Wysimark editor={editor} />)
}