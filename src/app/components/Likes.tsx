"use client";

import { useState } from "react";
import { theme } from "../theme";

export default function Likes() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ display: "flex", gap: theme.spacing.sm, marginTop: theme.spacing.sm }}>
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          backgroundColor: theme.colors.accent,
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.borderRadius.md,
          color: "#fff",
          cursor: "pointer",
        }}
      >
        👍 Like
      </button>
      <button
        onClick={() => setLikes(likes > 0 ? likes - 1 : 0)}
        style={{
          backgroundColor: theme.colors.muted,
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.borderRadius.md,
          color: "#fff",
          cursor: "pointer",
        }}
      >
        👎 Unlike
      </button>
      <span style={{ marginLeft: theme.spacing.sm }}>❤️ {likes}</span>
    </div>
  );
}
