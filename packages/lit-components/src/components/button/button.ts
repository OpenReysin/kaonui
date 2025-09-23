import {html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {buttonCss} from "./button.css";

@customElement('kaon-button')
export class KaonButton extends LitElement {
	static styles = buttonCss

	@property({ type: Boolean }) asChild = false;
	@property({ type: String }) variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' = 'primary';

	render() {
		const variantClass = `variant-${this.variant}`;
		this.classList.add(variantClass);

		return this.asChild
			? html`<slot
				@click=${this.#handleClick}
			></slot>`
			: html`
          <button
            @click=${this.#handleClick}
          >
            <slot></slot>
          </button>
        `;
	}

	#handleClick(e: Event) {
		this.dispatchEvent(new CustomEvent('click', {
			detail: { originalEvent: e },
			bubbles: true,
			composed: true
		}));
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kaon-button': KaonButton;
	}
}
