# Juno React Library

## Defined your Juno Data Context

```tsx
import { SetDoc } from "@junobuild/core";
// Data
const Data: SetDoc[] = [
  {
    id: "12345",
    title: "Example Document 1",
    content: "This is the first example document.",
    createdAt: new Date().toISOString(),
    author: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  },
  {
    id: "67890",
    title: "Example Document 2",
    content: "This is the second example document.",
    createdAt: new Date().toISOString(),
    author: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
  },
];
```

## Connect your application to Juno

```tsx
import { DataProvider } from "@/context/JunoDataContext";

const App = () => {
  return <DataProvider>{children}</DataProvider>;
};
```

## Create some data to add to your Juno Data Context

```tsx

```

## Read some data from your Juno Data Context

```tsx

```

## Update your Juno Data Context

```tsx

```

## Delete some data from your Juno Data Context

```tsx

```
