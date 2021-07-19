import { extendTheme } from "@chakra-ui/react"
const overrides = {
  colors: {
    primary: "teal",
  },
  styles: {
    global: {
      a: {
        color: "primary",
      },
    },
  },
}
export default extendTheme(overrides)
