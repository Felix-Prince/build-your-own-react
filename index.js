function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            // 如果节点不是一个对象，表示是字符串、数字等，针对这些这里通过创建一个文本节点的形式来处理
            // react 中并没有这一步，这里为了让我们的代码更简单易懂，因为我们不需要考虑性能问题
            children: children.map((child) =>
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    };
}

function createTextElement(text) {
    // 这里我们自定义了一个类型，用于后续创建 DOM 元素的时候作为区分，
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

const Didact = {
    createElement,
};

// const element = Didact.createElement(
//     "div",
//     { id: "foo" },
//     React.createElement("a", null, "bar"),
//     React.createElement("b")
// );

// 这里是给 babel 提示，说明接下来我们用的是 Didact.createElement 而不是 React.createElement
const element = (
    // @jsx Didact.createElement
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);
