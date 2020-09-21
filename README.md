# React-Moda11y

React-Moda11y is a component library of accessible modal and modal-like components that are TypeScript ready and best paired with Styled Components.

**Jump to:**

- [Getting Started](#getting-started)
- [Components](#components)
  - [Modal](#modal)
  - [Slider](#slider)
  - [DropdownMenu](#dropdownmenu)

---

## Getting Started

```bash
npm install --save react-moda11y
```

```jsx
import { Modal, Slider, DropdownMenu } from 'react-moda11y';
```

## Components

### `<Modal>`

[animated gif of modal in use]

When the `Modal` is open, it will auto focus its content by first looking inside `<Modal.Content>` then `<Modal.Footer>` to assign initial focus. Tabbing within the modal will be trapped inside of it, marking all content outside as `aria-hidden="true"` and locking page scroll in the background.

Learn more about these features at [React Focus On](https://github.com/theKashey/react-focus-on).

```jsx
import { Modal } from 'react-moda11y';
```

[show sample code of it in use]

#### `<Modal.Container>`

##### Props

```ts
interface Props {
  className?: string;
  close: () => void;
}
```

##### `className`

The `className` prop is optional and exists to allow extending the component with Styled Components in order to override the default appearance of `<Modal.Container>`

##### `close`

The `close` prop accepts a function. This is often the action of a `useState` value.

#### `<Modal.Header>`

```ts
interface Props {
  className?: string;
  align?: 'left' | 'center' | 'right';
  close?: () => void;
}
```

##### `className`

The `className` prop is optional and exists to allow extending the component with Styled Components in order to override the default appearance of `<Modal.Container>`

##### `align`

> ###### Default: 'left'

The `align` prop can be used to position any text within the component.

##### `close`

By default, `<Modal.Header>` will inherit the `close` prop from the primary `<Main.Container>`.

#### `<Modal.Content>`

```ts
interface Props {
  className?: string;
}
```

##### `className`

The `className` prop is optional and exists to allow extending the component with Styled Components in order to override the default appearance of `<Modal.Container>`

#### `<Modal.Footer>`

```ts
interface Props {
  className?: string;
}
```

##### `className`

The `className` prop is optional and exists to allow extending the component with Styled Components in order to override the default appearance of `<Modal.Container>`

---

### `<Slider>`

Hang tight. I am building out the components and will update this with thorough docs and examples.

---

### `<DropdownMenu>`

Hang tight. I am building out the components and will update this with thorough docs and examples.

---

#### Resources

- [Create React Library](https://github.com/transitive-bullshit/create-react-library)
- [React Focus On](https://github.com/theKashey/react-focus-on)

#### License

MIT © [yuschick](https://twitter.com/yuschick)
