(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{747:function(t,n,r){"use strict";r.r(n);var a=r(1),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"大模型微调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大模型微调"}},[t._v("#")]),t._v(" 大模型微调")]),t._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Fine-tuning")]),t._v("是一种在自然语言处理（NLP）中使用的技术，用于将预训练的语言模型适应于特定任务或领域。Fine-tuning的基本思想是采用已经在大量文本上进行训练的预训练语言模型，然后在小规模的任务特定文本上继续训练它。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("参数高效的fine-tuning（parameter-efficient fine-tuning）")]),t._v("，简称PEFT，旨在在尽可能减少所需的参数和计算资源的情况下，实现对预训练语言模型的有效微调。它是自然语言处理（NLP）中一组用于将预训练语言模型适应特定任务的方法，其所需参数和计算资源比传统的fine-tuning方法更少。这些参数可能是现有模型参数的子集或新添加的一组参数。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("prompt-tuning")]),t._v("是一种更近期的精调预训练语言模型的方法，重点是调整输入提示（input prompt）而非修改模型参数。这意味着"),r("strong",[t._v("预训练模型保持不变")]),t._v("，只有输入提示被修改以适应下游的任务。通过设计和优化一组提示，可以使预训练模型执行特定任务。")])])]),t._v(" "),r("h3",{attrs:{id:"背景介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/620618701",target:"_blank",rel:"noopener noreferrer"}},[t._v("预训练大语言模型的三种微调技术总结：fine-tuning、parameter-efficient fine-tuning和prompt-tuning的介绍和对比 - 知乎 (zhihu.com)"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/UXgIPvLUG1cwIGAe4aLRZg",target:"_blank",rel:"noopener noreferrer"}},[t._v("大模型参数高效微调技术原理综述（一）-背景、参数高效微调简介 (qq.com)"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"相关工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关工作"}},[t._v("#")]),t._v(" 相关工作")]),t._v(" "),r("h3",{attrs:{id:"bitfit-2022-acl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bitfit-2022-acl"}},[t._v("#")]),t._v(" BitFit（2022 ACL）")]),t._v(" "),r("blockquote",[r("p",[t._v("BitFit: Simple Parameter-efficient Fine-tuning for Transformer-based Masked Language-models")])]),t._v(" "),r("p",[t._v("BitFit是一种稀疏的微调方法，它训练时"),r("strong",[t._v("只更新bias的参数或者部分bias参数")]),t._v("。")]),t._v(" "),r("p",[t._v("对于Transformer模型而言，冻结大部分 transformer-encoder 参数，只更新bias参数跟特定任务的分类层参数。涉及到的bias参数有attention模块中计算query,key,value跟合并多个attention结果时涉及到的bias，MLP层中的bias，Layernormalization层的bias参数。")]),t._v(" "),r("h3",{attrs:{id:"prefix-tuning-2021"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prefix-tuning-2021"}},[t._v("#")]),t._v(" Prefix-Tuning（2021）")]),t._v(" "),r("blockquote",[r("p",[t._v("Prefix-Tuning: Optimizing Continuous Prompts for Generation")])]),t._v(" "),r("p",[t._v("Prefix Tuning"),r("strong",[t._v("提出固定预训练LM，为LM添加可训练，任务特定的前缀，这样就可以为不同任务保存不同的前缀")]),t._v("，微调成本也小；同时，这种Prefix实际就是连续可微的Virtual Token（Soft Prompt/Continuous Prompt），相比离散的Token，更好优化，效果更好。")]),t._v(" "),r("h3",{attrs:{id:"prompt-tuning-2021-emnlp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prompt-tuning-2021-emnlp"}},[t._v("#")]),t._v(" Prompt Tuning（2021 EMNLP）")]),t._v(" "),r("blockquote",[r("p",[t._v("The Power of Scale for Parameter-Efficient Prompt Tuning")])]),t._v(" "),r("p",[t._v("该方法可以看作是Prefix Tuning的简化版本。它给每个任务定义了自己的Prompt，然后拼接到数据上作为输入，但"),r("strong",[t._v("只在输入层加入prompt tokens")]),t._v("，并且不需要加入 MLP 进行调整来解决难训练的问题。")]),t._v(" "),r("h3",{attrs:{id:"p-tuning-2021"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#p-tuning-2021"}},[t._v("#")]),t._v(" P-Tuning（2021）")]),t._v(" "),r("blockquote",[r("p",[t._v("GPT Understands, Too")])]),t._v(" "),r("p",[t._v("相比Prefix Tuning，P-Tuning加入的可微的virtual token，但仅限于输入层，没有在每一层都加；另外，virtual token的位置也不一定是前缀，插入的位置是可选的。这里的出发点实际是把传统人工设计模版中的真实token替换成可微的virtual token。")]),t._v(" "),r("h3",{attrs:{id:"p-tuning-v2-2022-acl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#p-tuning-v2-2022-acl"}},[t._v("#")]),t._v(" P-Tuning V2（2022  ACL）")]),t._v(" "),r("blockquote",[r("p",[t._v("P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally Across Scales and Tasks")])])])}),[],!1,null,null,null);n.default=e.exports}}]);