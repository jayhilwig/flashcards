"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FlashCard from "@/components/flash-card"
import { flashCardData } from "@/lib/data"

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState("all")
  const [filteredCards, setFilteredCards] = useState(flashCardData)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredCards(flashCardData)
    } else {
      setFilteredCards(flashCardData.filter((card) => card.category === currentCategory))
    }
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }, [currentCategory])

  const handleNext = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev === filteredCards.length - 1 ? 0 : prev + 1))
    }, 50)
  }

  const handlePrevious = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev === 0 ? filteredCards.length - 1 : prev - 1))
    }, 50)
  }

  const handleShuffle = () => {
    setIsFlipped(false)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * filteredCards.length)
      setCurrentCardIndex(randomIndex)
    }, 50)
  }

  const handleReset = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCardIndex(0)
    }, 50)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "wayfinders":
        return "bg-purple-500 text-white"
      case "inputs":
        return "bg-sky-500 text-white"
      case "tuners":
        return "bg-teal-500 text-white"
      case "governors":
        return "bg-amber-500 text-white"
      case "trust":
        return "bg-orange-500 text-white"
      case "dark":
        return "bg-pink-500 text-white"
      case "identifiers":
        return "bg-violet-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1 flex items-center justify-center">
            The Shape of AI
            <a
              href="https://www.shapeof.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <ExternalLink size={18} />
            </a>
          </h1>
          <h2 className="text-xl font-medium text-gray-600">AI UX Pattern Flash Cards</h2>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-6">
            <TabsTrigger
              value="all"
              className="bg-gray-200 data-[state=active]:bg-gray-500 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="wayfinders"
              className="bg-purple-100 data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              Wayfinders
            </TabsTrigger>
            <TabsTrigger
              value="inputs"
              className="bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              Inputs
            </TabsTrigger>
            <TabsTrigger
              value="tuners"
              className="bg-teal-100 data-[state=active]:bg-teal-500 data-[state=active]:text-white"
            >
              Tuners
            </TabsTrigger>
            <TabsTrigger
              value="governors"
              className="bg-amber-100 data-[state=active]:bg-amber-500 data-[state=active]:text-white"
            >
              Governors
            </TabsTrigger>
            <TabsTrigger
              value="trust"
              className="bg-orange-100 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Trust
            </TabsTrigger>
            <TabsTrigger
              value="identifiers"
              className="bg-violet-100 data-[state=active]:bg-violet-500 data-[state=active]:text-white"
            >
              Identifiers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="wayfinders" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="inputs" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="tuners" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="governors" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="trust" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
          <TabsContent value="identifiers" className="w-full">
            {filteredCards.length > 0 && (
              <FlashCard
                card={filteredCards[currentCardIndex]}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
          </TabsContent>
        </Tabs>

        <div className="flex justify-center items-center gap-4 w-full">
          <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous card">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Card className="px-4 py-2">
            {currentCardIndex + 1} / {filteredCards.length}
          </Card>
          <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next card">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={handleShuffle} className="flex items-center gap-2">
            <Shuffle className="h-4 w-4" /> Shuffle
          </Button>
          <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-4 border-t pt-4 w-full">
          <p>
            ©{" "}
            <a
              href="https://www.linkedin.com/in/emmiecampbell/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Emily Campbell
            </a>{" "}
            2025 |{" "}
            <a
              href="https://jhilwig.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              jhilwig.com
            </a>{" "}
            | Sharable under CC-BY-NC-SA
          </p>
        </footer>
      </div>
    </main>
  )
}

