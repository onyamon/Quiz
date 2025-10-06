"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { theme } from "../theme";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "onyamon.p@kkumail.com" && password === "ciskku1412") {
      localStorage.setItem("auth", "true");
      router.push(redirectTo);
    } else {
      alert("❌ Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: theme.colors.background }}>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.lg,
          borderRadius: theme.borderRadius.xl,
          boxShadow: theme.boxShadow.lg,
          width: 320,
          fontFamily: theme.fonts.body,
        }}
      >
        <h2 style={{ fontFamily: theme.fonts.heading, textAlign: "center", marginBottom: theme.spacing.md, color: theme.colors.primary, fontSize: "1.5rem" }}>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: theme.spacing.md, borderRadius: theme.borderRadius.md, border: `1px solid ${theme.colors.border}`, marginBottom: theme.spacing.md }}
        />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: theme.spacing.md, borderRadius: theme.borderRadius.md, border: `1px solid ${theme.colors.border}`, marginBottom: theme.spacing.md }}
        />
        <button type="submit"
          style={{
            width: "100%",
            backgroundColor: theme.colors.secondary,
            color: "#fff",
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.md,
            cursor: "pointer",
            fontWeight: 600,
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.accent)}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = theme.colors.secondary)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
