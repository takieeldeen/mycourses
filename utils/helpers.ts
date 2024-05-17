// Formating duration 250sec => 4min 10s
export function formatDuration(seconds: number): string {
  let hrs: number =
    Math.floor(seconds / 3600) > 0 ? Math.floor(seconds / 36000) : 0;
  let mins: number =
    Math.floor((seconds - hrs * 3600) / 60) > 0
      ? Math.floor((seconds - hrs * 3600) / 60)
      : 0;
  let secs: number = seconds - hrs * 3600 - mins * 60;
  return `${hrs > 0 ? `${hrs}h ` : ""}${mins > 0 ? `${mins}m ` : ""}${
    secs > 0 ? `${secs}s` : ""
  }`;
}
