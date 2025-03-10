// JunoDataContext.tsx
import React, { FC, createContext, useState, PropsWithChildren } from "react"

// Create a context
export const DataContext = createContext()

// Create a provider component
export const DataProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [dataStore, setDataStore] = useState({})

  const setDoc = (doc) => {
    setDataStore((prevDataStore) => ({
      ...prevDataStore,
      [doc.collection]: {
        ...prevDataStore[doc.collection],
        [doc.doc.key]: doc.doc,
      },
    }))
  }

  return (
    <DataContext.Provider value={{ dataStore, setDoc }}>
      {children}
    </DataContext.Provider>
  )
}