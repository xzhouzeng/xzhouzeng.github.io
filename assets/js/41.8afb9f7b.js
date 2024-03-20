(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{765:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"c-类和结构区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-类和结构区别"}},[s._v("#")]),s._v(" C++类和结构区别")]),s._v(" "),a("p",[s._v("Created: March 17, 2024 10:48 PM")]),s._v(" "),a("p",[s._v("在C++中，结构体（"),a("strong",[a("code",[s._v("struct")])]),s._v("）和类（"),a("strong",[a("code",[s._v("class")])]),s._v("）是两种支持面向对象编程的主要构造。它们之间有很多相似之处，但也有一些关键区别。在C语言中，仅有结构体，而没有类的概念。")]),s._v(" "),a("h3",{attrs:{id:"c-中的结构体与类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的结构体与类"}},[s._v("#")]),s._v(" "),a("strong",[s._v("C++中的结构体与类")])]),s._v(" "),a("h3",{attrs:{id:"相似之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相似之处"}},[s._v("#")]),s._v(" 相似之处")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("成员变量和成员函数")]),s._v("：C++中的结构体和类都可以包含数据成员（成员变量）和成员函数（方法）。")]),s._v(" "),a("li",[a("strong",[s._v("继承")]),s._v("：结构体和类都可以用来实现继承。")]),s._v(" "),a("li",[a("strong",[s._v("访问控制")]),s._v("：结构体和类都支持三种访问控制级别："),a("strong",[a("code",[s._v("public")])]),s._v("、"),a("strong",[a("code",[s._v("protected")]),a("strong",[s._v("和")]),a("code",[s._v("private")])]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"主要区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要区别"}},[s._v("#")]),s._v(" 主要区别")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("默认的访问控制")]),s._v("：类的成员默认是**"),a("code",[s._v("private")]),a("strong",[s._v("的，而结构体的成员默认是")]),a("code",[s._v("public")]),s._v("**的。\n"),a("ul",[a("li",[s._v("在类中，如果不显式指定访问控制符，成员将默认为**"),a("code",[s._v("private")]),s._v("**。")]),s._v(" "),a("li",[s._v("在结构体中，如果不显式指定访问控制符，成员将默认为**"),a("code",[s._v("public")]),s._v("**。")])])]),s._v(" "),a("li",[a("strong",[s._v("默认的继承类型")]),s._v("：如果继承类型（"),a("strong",[a("code",[s._v("public")])]),s._v("、"),a("strong",[a("code",[s._v("protected")]),a("strong",[s._v("或")]),a("code",[s._v("private")])]),s._v("）未被明确指定，\n"),a("ul",[a("li",[s._v("类从其他类继承时，默认为**"),a("code",[s._v("private")]),s._v("**继承。")]),s._v(" "),a("li",[s._v("结构体从其他类或结构体继承时，默认为**"),a("code",[s._v("public")]),s._v("**继承。")])])])]),s._v(" "),a("h3",{attrs:{id:"为什么存在两种不同的构造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么存在两种不同的构造"}},[s._v("#")]),s._v(" "),a("strong",[s._v("为什么存在两种不同的构造？")])]),s._v(" "),a("p",[s._v("尽管C++中的类和结构体在功能上非常相似，但它们的存在有其历史原因和使用场景：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("历史原因")]),s._v("：C++保留了来自其祖先语言C的**"),a("code",[s._v("struct")]),s._v("**关键字。在C中，结构体只能包含数据成员，不能包含函数。C++扩展了结构体的功能，允许它们包含函数，并引入了类作为支持面向对象编程的一种更完整的方式。")]),s._v(" "),a("li",[a("strong",[s._v("使用场景")]),s._v("：结构体通常用于需要打包数据的场合，而类用于需要封装和继承的复杂对象。这一区别更多是基于约定，而不是语言强制的。")])]),s._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" "),a("strong",[s._v("示例")])]),s._v(" "),a("h3",{attrs:{id:"c-中的结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的结构体"}},[s._v("#")]),s._v(" C++中的结构体")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("cppCopy code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyStruct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认公开")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认公开")]),s._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"c-中的类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的类"}},[s._v("#")]),s._v(" C++中的类")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("cppCopy code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认私有")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("尽管C++中的结构体和类非常相似，选择使用哪一个通常取决于你的编程风格和需要表示的数据结构的复杂性。")])])}),[],!1,null,null,null);t.default=r.exports}}]);