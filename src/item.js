import { h, Element } from "atomico";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get props() {
        return ["text", "checked"];
    }
    styled() {
        return `
            input{
                text-align: center;
                border: none;
                /* Mobile Safari */
                -webkit-appearance: none;
                appearance: none;
                padding: .2rem .5rem;
                outline:none;
            }
            input:after{
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
            }
            input:checked:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
            }
            input:checked~.text{
                color: #d9d9d9;
                text-decoration: line-through;
            }
            .group{
                display:flex;
                align-items:center;
            }
            .text{
                flex:0%;
                padding : 1rem;
                font-size: 24px;
                text-align:left;
            }
            button{
                color: #cc9a9a;
                background:none;
                border:0;
                font-size : 30px;
                margin-right:1rem;
            }
        `;
    }
    render() {
        return (
            <div class="group">
                <style>{this.styled()}</style>
                <input
                    type="checkbox"
                    change={() => {
                        this.dispatch("toggle");
                    }}
                    checked={this.props.checked}
                />
                <div class="text">{this.props.text}</div>
                <button
                    click={() => {
                        this.dispatch("remove");
                    }}
                >
                    x
                </button>
            </div>
        );
    }
}
