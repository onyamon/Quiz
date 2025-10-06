"use client";

import { useState } from "react";
import { theme } from "../theme";

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div style={{ marginTop: theme.spacing.sm, marginLeft: theme.spacing.md }}>
      <input
        type="text"
        placeholder="แสดงความคิดเห็น..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{
          padding: theme.spacing.sm,
          borderRadius: theme.borderRadius.sm,
          border: `1px solid ${theme.colors.border}`,
          marginRight: theme.spacing.sm,
          flex: 1,
        }}
      />
      <button
        onClick={addComment}
        style={{
          backgroundColor: theme.colors.accent,
          color: "#fff",
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.borderRadius.md,
          cursor: "pointer",
        }}
      >
        ส่ง
      </button>

      <ul style={{ marginTop: theme.spacing.sm, display: "flex", flexDirection: "column", gap: theme.spacing.sm, padding: 0 }}>
        {comments.map((c, i) => (
          <li
            key={i}
            style={{
              backgroundColor: theme.colors.background,
              padding: theme.spacing.sm,
              borderRadius: theme.borderRadius.md,
              boxShadow: theme.boxShadow.sm,
            }}
          >
            💬 {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
