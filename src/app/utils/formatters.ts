export function formatDuration(seconds: number) {
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

export function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function formatTime(date: Date) {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}
