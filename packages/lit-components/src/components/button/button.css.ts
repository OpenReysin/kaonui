import {css} from "lit";

export const buttonCss = css`
    :host > * {
        color: white;
        background-color: #000000;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
    }

    :host > *:hover {
        background-color: #252525;
        transition: 150ms;
    }

    :host(.variant-secondary) > * {
        background-color: #f5f5f5;
        color: #000000;
    }

    :host(.variant-secondary) > *:hover {
        background-color: #e5e5e5;
    }

    :host(.variant-outline) > * {
        background-color: transparent;
        border: 1px solid #d7d7d7;
        color: #000000;
    }

    :host(.variant-outline) > *:hover {
        background-color: #f5f5f5;
    }
    
    :host(.variant-ghost) > * {
        background-color: transparent;
        color: #000000;
    }
    
    :host(.variant-ghost) > *:hover {
        background-color: #f5f5f5;
    }
    
    :host(.variant-link) > * {
        background-color: transparent;
        color: black;
    }
    
    :host(.variant-link) > *:hover {
        text-decoration: underline;
        background-color: transparent;
    }
`;