import { expect, test } from "vitest";
import { KaonButton } from "../components/button.js";

test("KaonButton is defined", () => {
	expect(customElements.get("kaon-button")).toBe(KaonButton);
});

test("KaonButton has correct default properties", () => {
	const button = new KaonButton();
	expect(button.variant).toBe("primary");
	expect(button.disabled).toBe(false);
});
