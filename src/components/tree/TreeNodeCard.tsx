import { useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import type { Locale, TreeNode } from "../../types/tree";
import Tooltip from "../Tooltip";

interface Props {
  node: TreeNode;
  locale: Locale;
  accentColor?: string;
  uploadedImage?: string;
  onImageChange: (nodeId: string, dataUrl: string) => void;
}

const ENTER_KEYS = ["Enter", " ", "Spacebar"];

function TreeNodeCard({
  node,
  locale,
  accentColor,
  uploadedImage,
  onImageChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const copy = node.copy[locale] ?? node.copy.es;
  const imageSrc = uploadedImage || node.image;

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (ENTER_KEYS.includes(event.key)) {
      event.preventDefault();
      handleUpload();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target.files || [];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        onImageChange(node.id, result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      ref={cardRef}
      className={`node-card ${
        node.variant === "king" ? "node-card--king" : ""
      }`}
      style={
        accentColor && node.variant !== "king"
          ? { borderBottomColor: accentColor }
          : undefined
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {node.variant === "king" ? (
        <div className="badge">{t("kingBadge")}</div>
      ) : null}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="file-input"
        onChange={handleFileChange}
        aria-label={`Upload image for ${copy.name}`}
      />

      <div
        className={`avatar ${imageSrc ? "avatar--filled" : ""}`}
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
        onClick={handleUpload}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={copy.placeholder || copy.name}
      >
        {!imageSrc && <span>{copy.placeholder || copy.name}</span>}
      </div>

      <div className="node-text">
        <div className="node-name">{copy.name}</div>
        <div className="node-role">{copy.title}</div>
      </div>

      {copy.tooltip ? (
        <>
          <div className="tooltip">
            <div className="tooltip-trigger" aria-hidden="true">
              ?
            </div>
          </div>
          <Tooltip
            content={copy.tooltip}
            isVisible={isHovered}
            anchorRef={cardRef as React.RefObject<HTMLElement>}
          />
        </>
      ) : null}
    </div>
  );
}

export default TreeNodeCard;
