import { useMemo } from "react";

const useTuncateText = (text = "", maxLength =100, suffix = "...") => {
  const truncate = useMemo(() => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.slice(0, maxLength)}${suffix}`
      : text;
  }, [text, maxLength, suffix]);
  return truncate;
};

export default useTuncateText;
