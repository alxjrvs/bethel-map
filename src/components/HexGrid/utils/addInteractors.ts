import { DrawInstructions } from "../types"

type AddInteractors = (callbacks: {
  clickCallback?: () => void
}) => DrawInstructions

export const addInteractors: AddInteractors = ({ clickCallback }) => g => {
  g.interactive = true
  clickCallback && g.on("click", clickCallback)
}
