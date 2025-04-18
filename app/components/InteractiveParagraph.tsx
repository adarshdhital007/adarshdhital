"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InteractiveParagraphProps {
  text: string;
  definitions: Record<string, string>;
}

// Typewriter component that displays text with typewriter effect
const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [displayText, text]);

  return <span>{displayText}</span>;
};

const InteractiveParagraph: React.FC<InteractiveParagraphProps> = ({
  text,
  definitions,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [definition, setDefinition] = useState<string>("");

  const handleWordClick = (word: string) => {
    const lowercaseWord = word.toLowerCase();

    if (definitions[lowercaseWord]) {
      setActiveWord(word);
      setDefinition(definitions[lowercaseWord]);
      setIsModalOpen(true);
    }
  };

  const processText = (content: string) => {
    const words = Object.keys(definitions);
    let processedContent = content;

    words.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      processedContent = processedContent.replace(
        regex,
        `<span class="defined-word text-black bg-yellow-300 cursor-pointer px-1 rounded hover:bg-yellow-400 transition-colors" data-word="${word}">${word}</span>`
      );
    });

    return processedContent;
  };

  const createMarkup = (content: string) => {
    return { __html: processText(content) };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <p
        dangerouslySetInnerHTML={createMarkup(text)}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains("defined-word")) {
            const word = target.getAttribute("data-word");
            if (word) handleWordClick(word);
          }
        }}
        className="leading-relaxed interactive-text"
      />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogDescription className="sr-only">
              Definition of the word {activeWord}
            </DialogDescription>
            <DialogTitle className="flex items-center">
              <span className="bg-yellow-400 text-black p-1 rounded">
                {activeWord}
              </span>
            </DialogTitle>
          </DialogHeader>
          <TypewriterEffect text={definition} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveParagraph;

/**
 * 
 * 
 * 
 * "use client";
import React, { useEffect, useState } from "react";

interface InteractiveParagraphProps {
  text: string;
  definitions: Record<string, string>;
}

// Typewriter component that can type forward and backward
const TypewriterEffect: React.FC<{
  text: string;
  onRemoveComplete: () => void;
}> = ({ text, onRemoveComplete }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Add one character at a time
      const nextIndex = displayText.length;
      if (nextIndex < text.length) {
        setDisplayText((prev) => prev + text[nextIndex]);
      }
    }, 5);

    return () => clearTimeout(timeout);
  }, [displayText, text, onRemoveComplete]);

  return <span className="prose-span">{displayText}</span>;
};

const InteractiveParagraph: React.FC<InteractiveParagraphProps> = ({
  text,
  definitions,
}) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [paragraphParts, setParagraphParts] = useState<{
    beforeWord: string;
    word: string;
    afterWord: string;
  } | null>(null);

  const handleWordClick = (word: string) => {
    if (word.toLowerCase() === activeWord?.toLowerCase()) {
      setActiveWord(null);
      setParagraphParts(null);
      return;
    }

    const regex = new RegExp(`\\b${word}\\b`, "i");
    const match = text.match(regex);

    if (match && match.index !== undefined) {
      const wordIndex = match.index;
      setParagraphParts({
        beforeWord: text.substring(0, wordIndex),
        word: match[0],
        afterWord: text.substring(wordIndex + word.length),
      });
      setActiveWord(word);
    }
  };

  const processText = (content: string, excludeWord?: string) => {
    const words = Object.keys(definitions);
    let processedContent = content;

    words.forEach((word) => {
      if (excludeWord && word.toLowerCase() === excludeWord.toLowerCase()) {
        return; // Skip highlighting the active word
      }

      const regex = new RegExp(`\\b${word}\\b`, "gi");
      processedContent = processedContent.replace(
        regex,
        `<span class="defined-word bg-yellow-400 cursor-pointer px-1" data-word="${word}">${word}</span>`
      );
    });

    return processedContent;
  };

  const createMarkup = (content: string, excludeWord?: string) => {
    return { __html: processText(content, excludeWord) };
  };

  const handleTypewriterRemoveComplete = () => {};

  return (
    <div className="max-w-4xl mx-auto">
      {!activeWord ? (
        <div
          dangerouslySetInnerHTML={createMarkup(text)}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains("defined-word")) {
              const word = target.getAttribute("data-word");
              if (word) handleWordClick(word);
            }
          }}
          className="leading-relaxed interactive-text"
        />
      ) : (
        <div className="relative leading-relaxed">
          <div
            dangerouslySetInnerHTML={createMarkup(text, activeWord)}
            className="blur-sm select-none pointer-events-none"
          />

          <div
            className="absolute top-0 left-0 right-0 mb-4"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.classList.contains("active-word")) {
                handleWordClick(activeWord);
              }
            }}
          >
            <span className="opacity-0 pointer-events-none select-none">
              {paragraphParts?.beforeWord}
            </span>
            <span
              className="active-word bg-yellow-400 px-1 cursor-pointer"
              data-word={activeWord}
            >
              {paragraphParts?.word}
            </span>
            <span className="text-white text-lg font-semibold mb-4">
                {" - "}
              <TypewriterEffect
                text={definitions[activeWord.toLowerCase()]}
                onRemoveComplete={handleTypewriterRemoveComplete}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveParagraph;

 */
