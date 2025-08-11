"use client";

import { useState, ReactNode } from "react";

function TextExpander({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convert to string when splitting
  const text = typeof children === "string" ? children : String(children);

  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
