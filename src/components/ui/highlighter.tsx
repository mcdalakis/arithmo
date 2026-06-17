import { useEffect, useRef } from "react"
import type React from "react"
import { useInView } from "framer-motion"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
  delay?: number
  animate?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  delay = 0,
  animate = true,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
      animate,
    }

    const annotation = annotate(element, annotationConfig)

    annotationRef.current = annotation

    const timeoutId = setTimeout(() => {
      annotationRef.current?.show()
      resizeObserver.observe(element)
      resizeObserver.observe(document.body)
    }, delay)

    const resizeObserver = new ResizeObserver(() => {
      annotation.hide()
      // We might want to respect delay on resize too, or just show immediately. 
      // Usually resize re-shows immediately or after a small debounce. 
      // For simplicity and to avoid flickering loops, let's just show.
      annotation.show()
    })

    return () => {
      clearTimeout(timeoutId)
      if (element) {
        annotate(element, { type: action }).remove()
        resizeObserver.disconnect()
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    delay,
    animate,
  ])

  return (
    <span ref={elementRef} className="relative inline bg-transparent">
      {children}
    </span>
  )
}
