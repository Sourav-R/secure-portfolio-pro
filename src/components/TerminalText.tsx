import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalTextProps {
  texts: string[];
  className?: string;
}

const TerminalText = ({ texts, className = "" }: TerminalTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const speed = isDeleting ? 30 : 70;

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary"
      >
        █
      </motion.span>
    </span>
  );
};

export default TerminalText;
