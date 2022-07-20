# Playwright: Svelte Slots Reproduction

```zsh
git clone git@github.com:aMediocreDad/playwright-svelte-slots-repro.git
cd playwright-svelte-slots-repro
npm install
npm test
```

## Expected

> **Note** Tests pass.

Specifically, the final assert:

```js
const component = await mount(Component, {
	//...
	slots: {
		// According to FAQ: https://github.com/microsoft/playwright/issues/14298
		// the following should pass the text to the slot named "text'.
		text: "Hello World",
	},
});

// ...

// This assert should therefore pass.
await expect(text).toContainText("Hello World");
```

## Actual

> **Warning** Tests fail.

```js
// This assert fails.
await expect(text).toContainText("Hello World");
```
