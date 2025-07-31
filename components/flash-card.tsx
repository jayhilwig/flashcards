"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import {
  Compass,
  MessageSquare,
  Bell,
  ListTodo,
  FileText,
  FileInput,
  MousePointerClick,
  Puzzle,
  MessageCircle,
  Combine,
  FileDigit,
  FolderKanban,
  Layers,
  Sliders,
  Filter,
  Paintbrush,
  Settings,
  SlidersHorizontal,
  Mic,
  BookOpen,
  BookMarked,
  GitBranch,
  ShieldCheck,
  Quote,
  Gamepad2,
  Footprints,
  Eye,
  RefreshCw,
  CheckSquare,
  FileCode,
  Code,
  Variable,
  Cloud,
  Brain,
  Stamp,
  Database,
  ThumbsUp,
  AlertTriangle,
  Fingerprint,
  Palette,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  FileWarning,
  MousePointer,
  User,
  UserCircle,
} from "lucide-react"

interface FlashCardProps {
  card: {
    term: string
    definition: string
    category: string
  }
  isFlipped: boolean
  setIsFlipped: (flipped: boolean) => void
  onNext: () => void
  onPrevious: () => void
}

export default function FlashCard({ card, isFlipped, setIsFlipped, onNext, onPrevious }: FlashCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "wayfinders":
        return "bg-purple-100"
      case "inputs":
        return "bg-sky-100"
      case "tuners":
        return "bg-teal-100"
      case "governors":
        return "bg-amber-100"
      case "trust":
        return "bg-orange-100"
      case "dark":
        return "bg-pink-100"
      case "identifiers":
        return "bg-violet-100"
      default:
        return "bg-gray-100"
    }
  }

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "wayfinders":
        return "text-purple-600"
      case "inputs":
        return "text-sky-600"
      case "tuners":
        return "text-teal-600"
      case "governors":
        return "text-amber-600"
      case "trust":
        return "text-orange-600"
      case "dark":
        return "text-pink-600"
      case "identifiers":
        return "text-violet-600"
      default:
        return "text-gray-600"
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "wayfinders":
        return "Wayfinders"
      case "inputs":
        return "Inputs"
      case "tuners":
        return "Tuners"
      case "governors":
        return "Governors"
      case "trust":
        return "Trust Indicators"
      case "dark":
        return "Dark Matter"
      case "identifiers":
        return "Identifiers"
      default:
        return category
    }
  }

  // Get icon based on term
  const getIcon = () => {
    const term = card.term.toLowerCase()

    // Main categories
    if (term === "wayfinders") return <Compass className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "inputs") return <FileInput className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "tuners") return <Sliders className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "governors") return <ShieldCheck className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "trust indicators")
      return <ShieldCheck className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "dark matter") return <AlertTriangle className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />
    if (term === "identifiers") return <Fingerprint className={`w-12 h-12 ${getCategoryTextColor(card.category)}`} />

    // Wayfinders
    if (term === "follow up") return <MessageSquare className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "nudges") return <Bell className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "suggestions") return <ListTodo className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "templates") return <FileText className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Inputs
    if (term === "auto fill") return <FileInput className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "inline action")
      return <MousePointerClick className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "madlibs") return <Puzzle className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "open input") return <MessageCircle className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "remix / blend") return <Combine className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "summary") return <FileDigit className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "synthesis") return <FolderKanban className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "token layering") return <Layers className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Tuners
    if (term === "filters") return <Filter className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "inpainting") return <Paintbrush className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "model management") return <Settings className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "parameters")
      return <SlidersHorizontal className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "personal voice") return <Mic className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "primary sources") return <BookOpen className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "references") return <BookMarked className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "workflows") return <GitBranch className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Governors
    if (term === "citations") return <Quote className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "controls") return <Gamepad2 className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "footprints") return <Footprints className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "prompt transparency") return <Eye className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "regenerate") return <RefreshCw className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "sample response")
      return <CheckSquare className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "show the work") return <FileCode className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "token transparency") return <Code className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "variations") return <Variable className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Trust indicators
    if (term === "incognito mode") return <Cloud className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "memory") return <Brain className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "watermarks") return <Stamp className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Dark matter
    if (term === "data ownership") return <Database className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "rating") return <ThumbsUp className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "caveat") return <AlertTriangle className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Identifiers
    if (term === "color scheme") return <Palette className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "disclosure") return <FileWarning className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "initial cta") return <MousePointer className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "name") return <User className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "personality") return <UserCircle className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />
    if (term === "symbols") return <ImageIcon className={`w-10 h-10 ${getCategoryTextColor(card.category)}`} />

    // Default
    return null
  }

  // Check if this is a main topic card (term matches category name)
  const isMainTopic =
    card.term.toLowerCase() === card.category.toLowerCase() ||
    card.term.toLowerCase() === getCategoryName(card.category).toLowerCase()

  // Handle click on left third of card
  const handleLeftClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onPrevious()
  }

  // Handle click on middle third of card
  const handleMiddleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  // Handle click on right third of card
  const handleRightClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNext()
  }

  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <div className="relative w-full h-full">
        {/* Front of card - Term and Category */}
        <div
          className={`absolute w-full h-full transition-all duration-200 ${
            isFlipped ? "opacity-0 rotate-y-180" : "opacity-100"
          }`}
        >
          <Card
            className={`w-full h-full flex flex-col justify-center items-center p-6 ${getCategoryColor(card.category)} border-0 shadow-sm`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full w-full">
              {getIcon()}

              {isMainTopic ? (
                <h2 className={`text-4xl font-bold text-center mt-4 ${getCategoryTextColor(card.category)}`}>
                  {card.term}
                </h2>
              ) : (
                <>
                  <div className={`text-sm font-medium mb-2 mt-4 ${getCategoryTextColor(card.category)}`}>
                    {getCategoryName(card.category)}
                  </div>
                  <h2 className={`text-2xl font-bold text-center ${getCategoryTextColor(card.category)}`}>
                    {card.term}
                  </h2>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Back of card - Definition only */}
        <div
          className={`absolute w-full h-full transition-all duration-200 ${
            isFlipped ? "opacity-100" : "opacity-0 rotate-y-180"
          }`}
        >
          <Card
            className={`w-full h-full flex flex-col justify-center items-center p-6 ${getCategoryColor(card.category)} border-0 shadow-sm`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full w-full">
              {getIcon()}
              <p className={`text-center text-lg mt-4 ${getCategoryTextColor(card.category)}`}>{card.definition}</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive zones - invisible but clickable */}
        <div className="absolute inset-0 flex w-full h-full">
          {/* Left third - previous card */}
          <div
            className="w-1/3 h-full cursor-pointer flex items-center justify-start pl-4 opacity-0 hover:opacity-30 transition-opacity"
            onClick={handleLeftClick}
          >
            <ChevronLeft className={`h-8 w-8 ${getCategoryTextColor(card.category)}`} />
          </div>

          {/* Middle third - flip card */}
          <div className="w-1/3 h-full cursor-pointer" onClick={handleMiddleClick} />

          {/* Right third - next card */}
          <div
            className="w-1/3 h-full cursor-pointer flex items-center justify-end pr-4 opacity-0 hover:opacity-30 transition-opacity"
            onClick={handleRightClick}
          >
            <ChevronRight className={`h-8 w-8 ${getCategoryTextColor(card.category)}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
