import { DrawInstructions } from "../../../types"

type AddInteractors = (callbacks: {
  clickCallback?: () => void
}) => DrawInstructions

const click = "click"
export const addInteractors: AddInteractors = ({ clickCallback }) => g => {
  g.interactive = true
  g.removeListener(click)
  clickCallback && g.on(click, clickCallback)
}
