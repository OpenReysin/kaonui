import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('kaon-button')
export class KaonButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-family: inherit;
      transition: background-color 0.2s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    .variant-secondary {
      background-color: #6c757d;
    }

    .variant-secondary:hover {
      background-color: #545b62;
    }

    .variant-danger {
      background-color: #dc3545;
    }

    .variant-danger:hover {
      background-color: #c82333;
    }
  `;

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <button
        class="variant-${this.variant}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('kaon-click', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }
}