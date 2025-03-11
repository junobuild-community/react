# Repository

## Goal

The repository contains the "plumbing" that ties together the Juno core with the React UI.

## Inputs

The idea here is that you define the structure of the data that you'll use. Then those are passed as inputs. The inputs are the specific details required for you use of Juno and its services.

## Outputs

The outputs are components and services that you need to pull the juno/core into your React app.

## Example

You have data that you would like to store in the Juno Datastore. You define the structure of the data. Then pass that into the context provider when you add the context to your Juno React app. The hooks will return the data in a format that you can use in your React app.

```tsx
// JunoDataContext.tsx
import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [dataStore, setDataStore] = useState({});

  const setDoc = (doc) => {
    setDataStore((prevDataStore) => ({
      ...prevDataStore,
      [doc.collection]: {
        ...prevDataStore[doc.collection],
        [doc.doc.key]: doc.doc,
      },
    }));
  };

  return (
    <DataContext.Provider value={{ dataStore, setDoc }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data store
export const useDataStore = (collection) => {
  const { dataStore } = useContext(DataContext);
  return dataStore[collection] || {};
};
```

```tsx
// App.js
import React from "react";
import { DataProvider, useDataStore } from "./JunoDataContext";

const App = () => {
  return (
    <DataProvider>
      <MyComponent />
    </DataProvider>
  );
};

const MyComponent = () => {
  const profileData = useDataStore("profile");

  return (
    <div>
      {Object.keys(profileData).length ? (
        Object.entries(profileData).map(([key, data]) => (
          <div key={key}>
            <h1>{data.description}</h1>
            <p>{JSON.stringify(data.data)}</p>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default App;
```
