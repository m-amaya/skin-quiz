import {
  Button,
  Chip,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  Tooltip
} from "@mantine/core";
import { GrCheckmark as CheckIcon } from "react-icons/gr";

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
  defaultRadius: 3,
  focusRing: "auto",
  fontFamily: "'Recursive Variable', sans-serif",
  headings: {
    fontFamily: "'League Spartan Variable', sans-serif",
    fontWeight: "700",
    sizes: {
      h1: {
        fontSize: "3rem"
      },
      h2: {
        fontSize: "2.5rem"
      }
    }
  },
  primaryColor: "burgundy",
  components: {
    Button: Button.extend({
      styles: {
        root: {
          transition: "background-color 300ms"
        }
      }
    }),
    Chip: Chip.extend({
      defaultProps: {
        icon: <CheckIcon />,
        size: "lg",
        variant: "filled"
      }
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        offset: 10
      },
      styles: {
        tooltip: {
          "--tooltip-bg": "var(--mantine-tooltip-bg)",
          "--tooltip-color": "var(--mantine-tooltip-color)",
          "--tooltip-radius": "3px"
        }
      }
    })
  },
  other: {
    burgundy: {
      black: "#331522",
      bgz1: "#481e30"
    }
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-chip-bg": theme.colors.burgundy[2],
    "--mantine-chip-checked-bg": theme.colors.burgundy[5],
    "--mantine-chip-hover": theme.colors.burgundy[3],
    "--mantine-color-body": theme.colors.burgundy[1],
    "--mantine-color-border": theme.colors.burgundy[3],
    "--mantine-color-text": theme.colors.burgundy[9],
    "--mantine-heading-outline": theme.colors.burgundy[9],
    "--mantine-heading-subtitle-text": theme.colors.burgundy[9],
    "--mantine-splitscreen-top-bg": theme.white,
    "--mantine-splitscreen-bottom-bg": theme.colors.burgundy[1],
    "--mantine-tooltip-bg": theme.colors.burgundy[9]
  },
  dark: {
    "--mantine-chip-bg": theme.colors.burgundy[9],
    "--mantine-chip-checked-bg": theme.colors.burgundy[4],
    "--mantine-chip-hover": theme.colors.burgundy[8],
    "--mantine-color-body": theme.other.burgundy.black,
    "--mantine-color-border": theme.colors.burgundy[4],
    "--mantine-color-text": theme.colors.burgundy[1],
    "--mantine-heading-outline": theme.other.burgundy.black,
    "--mantine-heading-subtitle-text": theme.colors.burgundy[4],
    "--mantine-splitscreen-top-bg": theme.other.burgundy.bgz1,
    "--mantine-splitscreen-bottom-bg": theme.other.burgundy.black,
    "--mantine-tooltip-bg": theme.colors.burgundy[1],
    "--mantine-tooltip-color": theme.colors.burgundy[9]
  }
});
