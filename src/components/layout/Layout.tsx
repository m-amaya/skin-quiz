import { AppShell } from "@mantine/core";
import { ThemeButton } from "@src/components/layout/ThemeButton";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <AppShell>
      <ThemeButton />
      <Outlet />
    </AppShell>
  );
}
