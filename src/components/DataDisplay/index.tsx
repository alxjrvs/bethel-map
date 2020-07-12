import React, { FC, Dispatch, SetStateAction } from "react"

type DataDisplayProps = {
  setCurrentCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
}
export const DataDisplay: FC<DataDisplayProps> = ({
  setCurrentCoords,
  highlightedCoords,
}) => {
  return (
    <>
      <h1>{highlightedCoords}</h1>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
    </>
  )
}
