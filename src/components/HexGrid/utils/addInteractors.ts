import { Graphics } from "pixi.js"

type AddInteractors = (
  hexGraphics: Graphics,
  callbacks: {
    clickCallback?: () => void
  }
) => Graphics

export const addInteractors: AddInteractors = (
  hexGraphics,
  { clickCallback }
) => {
  hexGraphics.interactive = true
  clickCallback && hexGraphics.on("click", clickCallback)
  return hexGraphics
}
