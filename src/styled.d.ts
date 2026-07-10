import "styled-components"
import temaLight from "./themes/light"

type Theme = typeof temaLight

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
