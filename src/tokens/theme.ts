import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    burgundy: [
      "#ffeef5",
      "#f4dee7",
      "#dfbdca",
      "#cb98ad",
      "#ba7a94",
      "#b06785",
      "#ac5c7d",
      "#974d6b",
      "#894260",
      "#793653"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "burgundy"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
