import { h, Element } from "atomico";
import TagInput from "./input";
import TagItem from "./item";
import item from "./item";

export const TAG_TODO = "atom-todo";
export const TAG_ITEM = "atom-todo-item";
export const TAG_INPUT = "atom-todo-input";

export default class TagTodo extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.state.list = [
            { text: "my initial todo", checked: false },
            { text: "Learn about Web Components", checked: true }
        ];
    }
    styled() {
        return `
            :host{
                width : 100%;
                display:block;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
            }
            .group{
                background : white;
            }
        `;
    }
    render() {
        let { list = [] } = this.state;
        return (
            <div class="group">
                <style>{this.styled()}</style>
                <atom-todo-input
                    placeholder="What needs to be done?"
                    create={({ detail }) => {
                        this.setState({
                            list: list.concat({
                                text: detail.text,
                                checked: false
                            })
                        });
                    }}
                />
                <div>
                    {list.map(({ text, checked }, localIndex) => (
                        <atom-todo-item
                            text={text}
                            checked={checked}
                            remove={() => {
                                this.setState({
                                    list: list.filter(
                                        (data, index) => index !== localIndex
                                    )
                                });
                            }}
                            toggle={() => {
                                this.setState({
                                    list: list.map(
                                        (data, index) =>
                                            index === localIndex
                                                ? {
                                                      ...data,
                                                      checked: !data.checked
                                                  }
                                                : data
                                    )
                                });
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

customElements.define(TAG_ITEM, TagItem);
customElements.define(TAG_INPUT, TagInput);
customElements.define(TAG_TODO, TagTodo);
