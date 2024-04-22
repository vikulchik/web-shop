## Separation of Business Logic:
### Components: 
Presentational components for UI rendering. Styles for components

### Hooks: 
Custom hooks for managing state and business logic related to specific pages or features (shared state using, react queries).

### Services: 
Modules responsible for data fetching, backend interactions, and business logic (filtering, validation, formatting, translations).

### Store:
Store data (`Redux`: actions, reducers, constants, slices, etc...)

### Styles:
Generals styles

### Utils: 
Utility functions and constants used throughout the application.

### Design Pattern Choices: 
### React Hooks: 
Using hooks like `useState`, `useEffect`, and custom hooks (`useProductPage`, etc.) to manage state and encapsulate business logic within functional components.

## Explanation of Architecture/Design Choices:
### File and Folder Structure: 
Organized based on functionality and responsibility, facilitating easy maintenance and extension.

### Separation of Business Logic: 
Hooks encapsulate business logic related to specific pages or features, promoting reusability and maintainability.

### Design Pattern Choices: 
Utilizing React hooks allows for cleaner and more concise code compared to traditional class components, while still providing a clear separation of concerns and facilitating code reuse.

This architecture/design approach aims to provide a modern and scalable structure for building an online shop with React, leveraging the power and simplicity of hooks for managing state and logic within functional components.