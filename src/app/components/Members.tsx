"use client";

import { useState } from "react";
import { theme } from "../theme";

const dummyMembers = [
  { name: "Jom", year: 2021 },
  { name: "Mook", year: 2022 },
  { name: "Tle", year: 2021 },
  { name: "Fon", year: 2023 },
];

export default function Members() {
  const [year, setYear] = useState<number | null>(null);
  const filtered = year ? dummyMembers.filter((m) => m.year === year) : dummyMembers;

  return (
    <div
      style={{
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.surface,
        boxShadow: theme.boxShadow.md,
        fontFamily: theme.fonts.body,
      }}
    >
      <h2
        style={{
          fontFamily: theme.fonts.heading,
          color: theme.colors.primary,
          fontWeight: 600,
          marginBottom: theme.spacing.md,
        }}
      >
        💻 Members
      </h2>
      <select
        onChange={(e) => setYear(Number(e.target.value))}
        style={{
          width: "100%",
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.md,
          border: `1px solid ${theme.colors.border}`,
          marginBottom: theme.spacing.md,
        }}
      >
        <option value="">ทั้งหมด</option>
        <option value="2021">รุ่น 2021</option>
        <option value="2022">รุ่น 2022</option>
        <option value="2023">รุ่น 2023</option>
      </select>

      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: theme.spacing.sm }}>
        {filtered.map((m, i) => (
          <li
            key={i}
            style={{
              padding: theme.spacing.sm,
              borderRadius: theme.borderRadius.md,
              backgroundColor: theme.colors.background,
              boxShadow: theme.boxShadow.sm,
              color: theme.colors.text,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLLIElement).style.backgroundColor = theme.colors.accent)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLLIElement).style.backgroundColor = theme.colors.background)
            }
          >
            {m.name} (ปี {m.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
