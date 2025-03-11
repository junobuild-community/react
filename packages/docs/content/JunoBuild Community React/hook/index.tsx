import { useContext } from "react"
import { DataContext } from "@/context/JunoDataContext"

// Custom hook to use the data store
export const useDataStore = (collection) => {
  const { dataStore } = useContext(DataContext)
  return dataStore[collection] || {}
}