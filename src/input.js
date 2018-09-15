import { h, Element } from "atomico";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get props() {
        return ["placeholder"];
    }
    styled() {
        return `
        input{
            background: rgba(0, 0, 0, 0.003);
            width: 100%;
            font-size: 24px;
            color: inherit;
            padding: 6px;
            border: 1px solid #CCC;
            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
        }
        `;
    }
    render() {
        return (
            <form
                submit={event => {
                    event.preventDefault();
                    this.dispatch("create", {
                        text: event.target.task.value
                    });
                    event.target.reset();
                }}
            >
                <style>{this.styled()}</style>
                <input
                    name="task"
                    type="text"
                    placeholder={this.props.placeholder}
                />
            </form>
        );
    }
}
