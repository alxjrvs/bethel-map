import { isDev } from "../utils/isDev"
import { useLocation } from "react-router-dom"

export const useIsAdmin = (): boolean => {
  const { pathname } = useLocation()
  if (!isDev()) return false
  return pathname === "/sekret"
}
