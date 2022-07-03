import { KeyboardEvent } from "react";

export function handleEnterKeyPress(
  event: KeyboardEvent<HTMLElement>,
  action: () => void
) {
  if (event.key === "Enter") {
    action();
  }
}
