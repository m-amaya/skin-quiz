import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { GrMoon as MoonIcon, GrSun as SunIcon } from "react-icons/gr";

export function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const isLight = colorScheme === "light";

  return (
    <Tooltip label={isLight ? "Dark Mode" : "Light Mode"}>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        radius="xl"
        size="xl"
        style={{ position: "absolute", top: 20, right: 20, zIndex: 5 }}
        variant="outline"
      >
        {isLight ? <MoonIcon size={20} /> : <SunIcon size={20} />}
      </ActionIcon>
    </Tooltip>
  );
}
