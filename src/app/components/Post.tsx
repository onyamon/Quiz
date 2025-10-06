"use client";

import { useState } from "react";
import Comments from "./Comments";
import Likes from "./Likes";
import { theme } from "../theme";

export default function Post() {
  const [posts, setPosts] = useState<{ text: string }[]>([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([...posts, { text: newPost }]);
    setNewPost("");
  };

  return (
    <div>
      <h2
        style={{
          fontFamily: theme.fonts.heading,
          color: theme.colors.primary,
          fontWeight: 600,
          marginBottom: theme.spacing.md,
        }}
      >
        📝 Posts
      </h2>

      <div style={{ display: "flex", marginBottom: theme.spacing.md }}>
        <input
          type="text"
          placeholder="เขียนสถานะ..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{
            flex: 1,
            padding: theme.spacing.md,
            borderRadius: `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}`,
            border: `1px solid ${theme.colors.border}`,
          }}
        />
        <button
          onClick={addPost}
          style={{
            padding: `0 ${theme.spacing.lg}`,
            borderRadius: `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0`,
            backgroundColor: theme.colors.secondary,
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.accent)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.secondary)
          }
        >
          โพสต์
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.md }}>
        {posts.map((post, i) => (
          <div
            key={i}
            style={{
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.surface,
              boxShadow: theme.boxShadow.md,
              fontFamily: theme.fonts.body,
              color: theme.colors.text,
            }}
          >
            <p>{post.text}</p>
            <Likes />
            <Comments />
          </div>
        ))}
      </div>
    </div>
  );
}
