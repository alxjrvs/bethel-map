import { DrawInstructions } from "../../../types"

type AddInteractors = (callbacks: {
  clickCallback?: () => void
  mouseoverCallback?: () => void
}) => DrawInstructions

const click = "click"
const mouseover = "mouseover"
const events = [click, mouseover]
export const addInteractors: AddInteractors = ({
  clickCallback,
  mouseoverCallback,
}) => g => {
  g.interactive = true
  events.forEach(event => g.removeListener(event))
  clickCallback && g.on(click, clickCallback)
  mouseoverCallback && g.on(mouseover, mouseoverCallback)
}
