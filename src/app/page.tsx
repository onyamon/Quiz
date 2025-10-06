"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Members from "./components/Members";
import Post from "./components/Post";
import { theme } from "./theme";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) router.push("/login");
  }, [router]);

  return (
    <div
      style={{
        padding: theme.spacing.lg,
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        fontFamily: theme.fonts.body,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: theme.spacing.lg,
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.lg,
          backgroundColor: theme.colors.secondary,
          color: "#fff",
          fontFamily: theme.fonts.heading,
        }}
      >
        <h1>🖥️ CIS KKU</h1>
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            router.push("/login");
          }}
          style={{
            backgroundColor: theme.colors.accent,
            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
            borderRadius: theme.borderRadius.md,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.primary)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.accent)
          }
        >
          Logout
        </button>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: theme.spacing.lg,
        }}
      >
        <Members />
        <Post />
      </div>
    </div>
  );
}
