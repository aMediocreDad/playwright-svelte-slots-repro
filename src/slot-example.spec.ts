import { test, expect } from "@playwright/experimental-ct-svelte";

import Component from "./slot-example.svelte";

test("Named Slots", async ({ mount }) => {
	const component = await mount(Component, {
		props: {
			title: "Named Slots",
		},
		slots: {
			text: "Hello World",
		},
	});

	const title = component.locator("h1");

	await expect(title).toHaveText("Named Slots");

	const text = component.locator("p");

	await expect(text).toContainText("Hello World");
});
