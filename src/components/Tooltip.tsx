import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: string;
  isVisible: boolean;
  anchorRef: React.RefObject<HTMLElement>;
}

function Tooltip({ content, isVisible, anchorRef }: TooltipProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !tooltipRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const padding = 12;

    // Calculate initial position (above the card, aligned to the right)
    let top = anchorRect.top - tooltipRect.height - padding;
    let left = anchorRect.right - tooltipRect.width;

    // If tooltip goes above viewport, show it below
    if (top < padding) {
      top = anchorRect.bottom + padding;
    }

    // If tooltip goes off left edge, align to left of anchor
    if (left < padding) {
      left = anchorRect.left;
    }

    // If tooltip goes off right edge, constrain it
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    setPosition({ top, left });
  }, [anchorRef]);

  useEffect(() => {
    if (isVisible) {
      // Use requestAnimationFrame to ensure the tooltip is rendered before measuring
      requestAnimationFrame(updatePosition);

      // Update position on scroll/resize
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isVisible, updatePosition]);

  if (!isVisible) return null;

  return createPortal(
    <div
      ref={tooltipRef}
      className="tooltip-portal"
      style={{
        top: position.top,
        left: position.left,
      }}
      role="tooltip"
    >
      {content}
      <div className="tooltip-arrow" />
    </div>,
    document.body
  );
}

export default Tooltip;
