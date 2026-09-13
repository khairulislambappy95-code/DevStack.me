# DevStack

DevStack is a simple web app where you can look through popular web development technologies and build your own "stack" by picking the ones you like. You browse cards for things like React, Node.js, PostgreSQL, and Docker, add the ones you want to a list, and remove them again whenever you change your mind.

## Technology Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify

## Features

1. **Browse technology cards** – Every card shows the tech's icon, name, description, category, difficulty level, and a star rating, so you know what you're picking before you add it.
2. **Build your own stack** – Clicking "Add to Stack" puts that technology into a "Your Stack" panel on the side. You can remove one item at a time, or clear the whole stack with one click.
3. **Toast alerts** – Every action (adding, removing, or clearing your stack) shows a small popup message, so you always get feedback on what just happened.

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a way of writing HTML-looking code directly inside JavaScript. It's used in React because it makes it much easier to see what the UI will look like, instead of writing plain JavaScript to create every element by hand.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent, and the component itself cannot change them. State is data that a component keeps and manages on its own, and it can change over time (for example, when the user clicks something).

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component remember a value between renders and update it. I used it in the `AllStacks` component to keep track of the `stack` array — the list of technologies the user has added so far.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets you run code after a component renders, which is normally used for things like fetching data. In this project, instead of `useEffect`, I used React's newer `use()` hook together with `Suspense` to load the `data.json` file. The promise is created once in `App.tsx` and passed down through props, and `use()` pauses the component until the data is ready, while `Suspense` shows a loading message in the meantime.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` helps React tell items in a list apart, so it knows which one changed, was added, or was removed. Without a unique key, React can get confused and update the wrong item on screen. In this project each card and stack item uses `tech.id` as its key.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different content depending on some condition. One example in this project is the "Your Stack" panel: if there are no technologies added yet, it shows an empty message ("Your stack is empty..."), and if there are items, it shows the list instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props — for example, `AllStacks` passes the `stack` array to `YourStack` as a prop. To send something back up, the parent passes a function down as a prop instead, and the child calls that function when something happens. In this project, `AllStacks` passes `onRemove` and `onRemoveAll` functions to `YourStack`, and when the user clicks a remove button, `YourStack` calls those functions to tell the parent what to do.
