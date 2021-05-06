# DidactBabel 说明

我们需要一个插件，这个插件的目的就是在运行代码的时候，把原先使用 React.createElement 替换位 Didact.createElement 这个我们自己实现的方法

原理：
通过运行时，把解析的代码中的 React 替换为我们的 Didact 就行，基于 ast 来处理的
