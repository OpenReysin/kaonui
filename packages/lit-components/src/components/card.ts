import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('kaon-card')
export class KaonCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      border: 1px solid #e0e0e0;
    }

    .header {
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      background-color: #f8f9fa;
    }

    .content {
      padding: 16px;
    }

    .footer {
      padding: 16px;
      border-top: 1px solid #e0e0e0;
      background-color: #f8f9fa;
    }

    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
  `;

  @property({ type: String })
  title = '';

  render() {
    return html`
      <div class="card">
        ${this.title
          ? html`
              <div class="header">
                <h3>${this.title}</h3>
              </div>
            `
          : ''}
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}