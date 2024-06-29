export const formattedDate = (date) =>
  new Date(date)
    .toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    })
    .replace(",", "")
    .replace(/(\d{2})$/, "'$1");

export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  let result = "";

  if (hours > 0) {
    result += `${String(hours).padStart(2, "0")} hr`;
  }

  if (minutes > 0) {
    if (result) result += " ";
    result += `${String(minutes).padStart(2, "0")} min`;
  }

  if (secs > 0 || (!hours && !minutes)) {
    if (result) result += " ";
    result += `${String(secs).padStart(2, "0")} sec`;
  }

  return result;
}
