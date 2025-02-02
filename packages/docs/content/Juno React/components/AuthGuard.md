# AuthGuard

The `AuthGuard` component is a wrapper that addresses the issue of unauthenticated users accessing content that depends on authentication. If the user is not authenticated, it will display your error message or your component if either are passed in as a prop.

If both are passed in as a prop, the component will be displayed.

## Example that returns a default error message as an element.

```tsx
import { AuthGuard } from "@juno-react";

const App = () => {
  return (
    <AuthGuard>
      <div>Hello World</div>
    </AuthGuard>
  );
};
```

## Example that returns a custom error message as an element.

```tsx
import { AuthGuard } from "@juno-react";

const failedAuthComponent = <div>You are not authenticated.</div>;

const App = () => {
  return (
    <AuthGuard failedAuthComponent={failedAuthComponent}>
      <div>Content that depends on authentication.</div>
    </AuthGuard>
  );
};
```

## Example that returns a custom error message as a string.

```tsx
import { AuthGuard } from "@juno-react";

const errorMessage = "Your custom message for unauthenticated users.";

const App = () => {
  return (
    <AuthGuard errorMessage={errorMessage}>
      <div>Content that depends on authentication.</div>
    </AuthGuard>
  );
};
```

## Example that returns your custom component and ignores the error message.

```tsx
import { AuthGuard } from "@juno-react";

const errorMessage = "Your custom message for unauthenticated users.";
const failedAuthComponent = <div>You are not authenticated.</div>;

const App = () => {
  return (
    <AuthGuard
      errorMessage={errorMessage}
      failedAuthComponent={failedAuthComponent}
    >
      <div>Content that depends on authentication.</div>
    </AuthGuard>
  );
};
```
