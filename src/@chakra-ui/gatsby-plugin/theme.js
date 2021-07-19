import { extendTheme } from "@chakra-ui/react"
const overrides = {
  fonts: {
    body: "Merriweather, serif",
    heading: "Montserrat, sans-serif",
  },
  styles: {
    global: {},
  },
}
export default extendTheme(overrides)
