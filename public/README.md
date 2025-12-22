(1)Ans: JSX is a syntax extension for JavaScript. It allows you to write HTML-like code directly inside JavaScript files.It makes building user interfaces (like in React) easier and cleaner. It helps developers visualize the layout logic right alongside the functionality.

(2)Ans:Props are like arguments passed to a function. Data comes from a parent component down to a child component. Props are read-only And State is like a local variable inside a component. It is managed within the component itself. State can change over time.

(3)Ans:useState is a built-in React Hook that lets you add "state" (data that changes) to functional components.When you call useState, it returns an array with two things:
1.The current value of the state.
2.A function to update that value.

(4)Ans:Lifting State Up: Move the state to a common parent component and pass it down to children using props.

Context API: Use React Context to share data globally (like themes or user info) to avoid passing props through every level (Prop Drilling).

State Management Libraries: Use external tools like Redux, Zustand, or Recoil for large, complex applications.

(5)Ans:In React, event handling is very similar to HTML but uses camelCase for event names (like onClick) and accepts a function directly as the handler instead of a string. Additionally, you cannot return false to stop default behavior; you must explicitly call e.preventDefault() inside your function.
