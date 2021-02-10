import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const styles = {
  global: () => ({
    body: {
      bg: "white",
      color: "gray.800",
    },
  }),
};

const additionalStyles = {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
};

export const theme = extendTheme({
  styles,
  ...additionalStyles,
});

export default function Theme({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
