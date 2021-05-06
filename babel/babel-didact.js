module.exports = function ({ type: t }) {
    return {
        name: "babel-didact-plugin",
        visitor: {
            JSXElement(path, state) {
                const comment =
                    path.node.leadingComments &&
                    path.node.leadingComments.find(
                        (item) => item.value === " @jsx Didact.createElement"
                    );
                const isDidact = !!comment;
            },
        },
    };
};
