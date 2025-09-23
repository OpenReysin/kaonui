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
`;