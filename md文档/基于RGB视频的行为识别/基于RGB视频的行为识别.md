# 基于RGB视频的行为识别

## 1. 综述

**行为识别Action Recognition**是指对视频中人的行为动作进行识别，即读懂视频。

- 类型划分：
  - **Hand gesture**：集中于处理视频片段中单人的手势
  - **Action**：短时间的行为动作，场景往往是短视频片段的单人行为，比如Throw，catch，clap等
  - **Activity**：持续时间较长的行为，场景往往是较长视频中的单人或多人行为

- 任务划分：
  
  - **Classification**：给定预先裁剪好的视频片段，预测其所属的行为类别✨
  - **Detection：**视频是未经过裁剪的，需要先进行人的检测where和行为定位（分析行为的始末时间）when，再进行行为的分类what。（行为检测）
  
- 解读：

  [一文了解通用行为识别ActionRecognition：了解及分类 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/103566134)![preview](picture/v2-d1df4c0d34ccb1cda0a5627ac80966ed_r.jpg)

- 框架：

  [open-mmlab/mmaction2: OpenMMLab's Next Generation Video Understanding Toolbox and Benchmark (github.com)](https://github.com/open-mmlab/mmaction2)

- 3D-Conv与CNN+LSTM算法参考代码（PyTorch）

  [MRzzm/action-recognition-models-pytorch: The models of action recognition with pytorch (github.com)](https://github.com/MRzzm/action-recognition-models-pytorch)

- 基于RGB-D的行为识别综述

  [基于RGB-D的深度学习人体运动识别：|调查深爱 (deepai.org)](https://deepai.org/publication/rgb-d-based-human-motion-recognition-with-deep-learning-a-survey)
  
- 深度学习分类不绝对，涉及到融合模型🍳

  <img src="picture/image-20220315154723003.png" alt="image-20220315154723003" style="zoom:80%;" />

### 1.1 A Comprehensive Study of Deep Video Action Recognition（2020 ArXiv）

#### 行为识别模型在深度学习方向的三种趋势：

1. 第一种趋势始于关于**双流网络**的开创性论文，它增加了第二条路径，通过在光流上训练卷积神经网络来学习视频中的时间信息。它的巨大成功激发了大量后续论文。
2. 第二个趋势是使用**3D卷积**核对视频时间信息建模。
3. 第三种趋势**侧重于计算效率**，以扩展到更大的数据集，以便在实际应用中采用。

- 介绍17种数据集，部分总结在**5.** 

#### 在开发有效的视频动作识别算法方面有几个主要挑战:

- ##### 在数据集方面：

  - 首先，定义用于训练动作识别模型的标签空间非常重要。这是因为**人类行为通常是复合概念**，这些概念的层次结构没有很好的定义。
  - 其次，**为动作识别添加视频注释是一项艰巨的任务**（例如，需要观看所有视频帧），而且模棱两可。（例如，很难确定行动的确切开始和结束）。
  - 第三，一些流行的基准数据集（如Kinetics系列）只发布供用户下载的视频链接，而不是实际的视频，这导致了在不同数据上评估方法的情况。在方法之间进行公平的比较并获得见解是不可能的。

- ##### 在建模方面：

  - 首先，**捕捉人类行为的视频具有强烈的类内和类间差异**。人们可以在不同的视角下以不同的速度执行相同的动作。此外，有些动作有着相似的动作模式，很难区分。
  - 其次，识别人类行为需要**同时理解短期特定行为的运动信息和长期时间信息。**我们可能需要一个的模型来处理不同的视角（perspectives），而不是使用单一的卷积神经网络。
  - 第三，**训练和推理的计算成本都很高**，阻碍了动作识别模型的开发和部署。

#### **深度学习在视频行为识别中的应用** 🐱‍🏍

<img src="picture/image-20220316201750798.png" alt="image-20220316201750798" style="zoom:80%;" />

这一部分回顾了2014年至2020基于深度学习的视频动作识别方法，并介绍了相关的早期工作。

#####  1. From hand-crafted features to CNNs

1. 手工制作的特征[209,210,158,112]，尤其是改进的密集轨迹**（IDT）[210]**，由于其高精度和良好的鲁棒性，在2015年之前主导了视频理解文献。

2. 深度学习在行为识别开创性工作**DeepVideo[99]**提出在每个视频帧上单独使用一个2D CNN模型

   > [99] Andrej Karpathy, George Toderici, Sanketh Shetty, Thomas Leung, Rahul Sukthankar, and Li Fei-Fei. Large-Scale Video Classification with Convolutional Neural Networks. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2014.

##### 2. Two-stream networks

Simonyan等人提出了**TwoStreamCNN[187]**，包括空间流和时间流，空间流以原始视频帧作为输入来捕获视觉外观信息。时间流以一堆光流图像作为输入，以捕获视频帧之间的运动信息。**基于CNN的方法首次实现了与之前最好的手工制作功能IDT类似的性能。**

自从[187]后出现了许多关于twostream网络的后续论文，极大地推动了视频动作识别的发展。将它们分为几个类别： 

- **Using deeper network architectures**

  双流网络[187]使用了相对较浅的网络架构。因此，**对双流网络的自然扩展需要使用更深的网络。**

  1. **Wang等人[217]**引入了一系列良好的实践，包括跨模态初始化、同步批处理规范化、角点裁剪和多尺度裁剪数据增强、大Dropout率等，以防止更深层次的网络过度拟合。通过这些良好的实践，[217]能够使用VGG16模型[188]来训练双流网络，在UCF101上的表现大大优于[187]。这些良好做法已被广泛采用，并仍在使用。后来，

     > [217] Limin Wang, Y uanjun Xiong, Zhe Wang, and Y u Qiao. Towards Good Practices for V ery Deep Two-Stream ConvNets. arXiv preprint arXiv:1507.02159, 2015.

  2. 时间段网络**（TSN）[218]**对网络体系结构进行了彻底的研究，如VGG16、ResNet[76]、Inception[198]，并证明更深的网络通常可以实现更高的视频动作识别准确率。

     > [218] Limin Wang, Y uanjun Xiong, Zhe Wang, Y u Qiao, Dahua Lin, Xiaoou Tang, and Luc V an Gool. Temporal Segment Networks: Towards Good Practices for Deep Action Recognition. In The European Conference on Computer Vision (ECCV), 2016

- **Two-stream fusion**

  由于双流网络中有两个流，**早期融合有助于两个流学习更丰富的功能，**并比后期融合提高性能。

  1. Fusion[50]是研究早期融合范例的几篇论文中的第一篇，包括如何执行空间融合（例如，使用sum、max、双线性、卷积和级联等运算符），在何处融合网络（例如，早期交互发生的网络层），以及如何执行时间融合（例如，在网络的后期使用2D或3D卷积融合）。[50]表明，早期融合有助于两个流学习更丰富的功能，并比后期融合提高性能。

     > [50] Christoph Feichtenhofer, Axel Pinz, and Andrew Zisserman. Convolutional Two-Stream Network Fusion for Video Action Recognition. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016

  2. Feichtenhofer等人通过引入两条流之间的剩余连接**ST-ResNet + IDT[46]**，将ResNet推广到了时空域。

     > [46] Christoph Feichtenhofer, Axel Pinz, and Richard P . Wildes. Spatiotemporal Residual Networks for Video Action Recognition. In Advances in Neural Information Processing Systems (NeurIPS), 2016

  3. Feichtenhofer等人[47]进一步提出了一种用于剩余网络的乘法选通函数，以更好地学习时空特征。

     > [47] Christoph Feichtenhofer, Axel Pinz, and Richard P Wildes. Spatiotemporal Multiplier Networks for Video Action Recognition. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017

  4. [225]采用时空金字塔来执行两个流之间的分层早期融合。 

     > [225] Y unbo Wang, Mingsheng Long, Jianmin Wang, and Philip S. Y u. Spatiotemporal Pyramid Network for Video Action Recognition. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.

- **Recurrent neural networks**

  由于视频本质上是一个时间序列，研究人员探索了用于视频内部时间建模的递归神经网络（RNN），特别是长短时记忆（LSTM）的使用[78]。

  1. **LRCN[37]和Beyond Short Snippets[253]**是在双流网络环境下使用LSTM进行视频动作识别的几篇论文中的第一篇。他们将CNN的特征图作为深层LSTM网络的输入，并将帧级CNN特征聚合为视频级预测。请注意，它们分别在两个流上使用LSTM，最终结果仍然是通过后期融合获得的。

  2. 根据CNN-LSTM框架，提出了几种变体，如双向LSTM[205]、CNN-LSTM融合[56]和分层多粒度LSTM网络[118]。

     > [118] Qing Li, Zhaofan Qiu, Ting Yao, Tao Mei, Y ong Rui, and Jiebo Luo. Action Recognition by Learning Deep MultiGranular Spatio-Temporal Video Representation. In The ACM International Conference on Multimedia Retrieval (ICMR), 2016

  3. [125]描述了VideoLSTM，其中包括基于相关性的空间注意机制和基于轻量级运动的注意机制。VideoLSTM不仅展示了改进的动作识别结果，还展示了如何通过仅依赖动作类标签将学习到的注意力用于动作定位。

     > [125] Zhenyang Li, Kirill Gavrilyuk, Efstratios Gavves, Mihir Jain, and Cees GM Snoek. VideoLSTM Convolves, Attends and Flows for Action Recognition. Computer Vision and Image Understanding (CVIU), 2018

  4. Lattice LSTM[196]通过学习单个空间位置的记忆单元的独立隐态转换来扩展LSTM，因此它可以精确地模拟长期和复杂的运动。

     > [196] Lin Sun, Kui Jia, Kevin Chen, Dit-Yan Yeung, Bertram E. Shi, and Silvio Savarese. Lattice Long Short-Term Memory for Human Action Recognition. In The IEEE International Conference on Computer Vision (ICCV), 2017.

  5. ShuttleNet[183]是一项并行工作，它考虑RNN中的前馈和反馈连接，以了解长期依赖关系。

     > [183] Yemin Shi, Y onghong Tian, Yaowei Wang, Wei Zeng, and Tiejun Huang. Learning Long-Term Dependencies for Action Recognition With a Biologically-Inspired Deep Network. In The IEEE International Conference on Computer Vision (ICCV), 2017.

  6. FASTER[272]设计了一个FAST-GRU，从昂贵的主干网和廉价的主干网聚合剪辑级功能。该策略降低了冗余片段的处理成本，从而加快了推理速度。

  7. Ma等人[135]为公平比较建立了一个强大的基线，并通过使用RNN彻底研究了学习时空特征的效果。他们发现，为了提高性能，需要适当的注意，例如，LSTM需要预分割数据来充分利用时间信息。

- **Segment-based methods**

  由于光流，双流网络能够推断帧之间的短期运动信息。然而，它们仍然无法捕获远程时间信息。

  1. Wang等人[218]提出了一种时间段网络（TSN）来执行视频级别的行为识别。TSN能够建模长期时间结构，因为模型可以看到整个视频中的内容。此外，这种稀疏采样策略降低了长视频序列的训练成本，但保留了相关信息。

  2. 深度局部视频特征（DVOF）[114]建议将在局部输入上训练的深度网络作为特征提取器，并训练另一个编码函数，以将全局特征映射到全局标签。

     > [114] Zhenzhong Lan, Yi Zhu, Alexander G. Hauptmann, and Shawn Newsam. Deep Local Video Feature for Action Recognition. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2017

  3. 时间线性编码（TLE）网络[36]与DVOF同时出现，但编码层被嵌入网络中，因此整个管道可以进行端到端的训练。

     > [36] Ali Diba, Vivek Sharma, and Luc V an Gool. Deep Temporal Linear Encoding Networks. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.

  4. VLAD3和ActionVLAD[123,63]也同时出现。他们将NetVLAD层扩展到视频域，以执行视频级编码，而不是使用[36]中的紧凑双线性编码。

     > [123] Yingwei Li, Weixin Li, Vijay Mahadevan, and Nuno V asconcelos. VLAD3: Encoding Dynamics of Deep Features for Action Recognition. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016
     >
     > [63] Rohit Girdhar, Deva Ramanan, Abhinav Gupta, Josef Sivic, and Bryan Russell. ActionVLAD: Learning SpatioTemporal Aggregation for Action Classification. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.

  5. 为了提高TSN的时间推理能力，时间关系网络TRN[269]来学习和推理多时间尺度下视频帧之间的时间依赖关系。

     > [269] Bolei Zhou, Alex Andonian, Aude Oliva, and Antonio Torralba. Temporal Relational Reasoning in Videos. In The European Conference on Computer Vision (ECCV), 2018.

  6. 最新最先进的高效模型TSM[128]也是基于分段的。我们将在第3.4.2节中详细讨论。 

- **Multi-stream networks**

  从本质上讲，多流网络是一种多模态学习方法，它使用不同的线索作为输入信号来帮助视频行为识别。

  

##### 3. The rise of 3D CNNs

预计算光流计算量大，存储要求高，不利于大规模训练或实时部署。从概念上讲，理解视频的一种简单方法是将其视为具有两个空间维度和一个时间维度的3D张量。因此，这导致使用3D CNN作为处理单元来模拟视频中的时间信息。

使用3D CNN进行动作识别的开创性工作是[91]。尽管令人振奋，但该网络的深度还不足以展示其潜力。

> [91] Shuiwang Ji, Wei Xu, Ming Yang, and Kai Y u. 3D Convolutional Neural Networks for Human Action Recognition. IEEE Transactions on Pattern Analysis and Machine Intelligence (PAMI), 2012

Tran等人[202]将[91]扩展到一个更深层的3D网络，称为**C3D**。C3D遵循[188]的模块化设计，可以将其视为VGG16网络的3D版本。它在标准基准测试中的性能并不令人满意，但显示出**强大的泛化能力**，可以用作各种视频任务的通用特征提取器[250]。然而，3D网络很难优化。为了更好地训练3D卷积滤波器，人们需要一个具有不同视频内容和动作类别的大规模数据集。幸运的是，有一个数据集Sports1M[99]，它足够大，可以支持深度3D网络的训练。然而，**C3D的训练需要数周时间才能完成。**尽管C3D很受欢迎，但大多数用户只是将其用作不同用例的功能提取器，而不是修改\微调网络。这也是基于2D CNN的双流网络在2014年至2017年间主导视频动作识别领域的部分原因。 

当Carreira等人[14]在2017年提出**I3D**时，情况发生了变化。I3D将视频剪辑作为输入，并通过堆叠的3D卷积层将其转发。视频剪辑是一系列视频帧，通常使用16或32帧。I3D的主要贡献是：1）它采用了成熟的图像分类体系结构，用于3D CNN；2） 对于模型权重，它采用了[217]中为初始化光流网络而开发的方法，将ImageNet预先训练的2D模型权重膨胀到3D模型中的对应权重。因此，**I3D绕过了3D CNN必须从头开始训练的困境。**通过对一个新的大规模数据集Kinetics400[100]进行预训练，I3D在UCF101和HMDB51上的得分分别为95.6%和74.8%。I3D终结了不同方法在UCF101和HMDB512等小型数据集上报告数字的时代。I3D之后的出版物需要报告它们在Kinetics400或其他大型基准数据集上的性能，这将视频动作识别推向了一个新的水平。（最终的I3D模型是3D CNN和twostream网络的组合。）

我们将在以下几类中回顾基于3D CNN的文献。我们想指出，**3D CNN并没有取代两个流网络，它们也不是相互排斥的。**他们只是用不同的方法来模拟视频中的时间关系。

- **Mapping from 2D to 3D CNNs**

  2D CNN享受着大规模图像数据集（如ImageNet[30]和Places205[270]）带来的预训练的好处，这些数据集甚至无法与当今最大的视频数据集相匹配。大量的工作致力于寻找更准确、更通用的2D CNN架构并借鉴优点用于3D-CNN.

  1. ResNet3D[74]直接采用2D ResNet[76]，并用3D内核替换所有2D卷积滤波器。他们相信，通过将深度3D CNN与大规模数据集结合使用，可以利用ImageNet上2D CNN的成功。

     > [74] Kensho Hara, Hirokatsu Kataoka, and Y utaka Satoh. Can Spatiotemporal 3D CNNs Retrace the History of 2D CNNs and ImageNet? In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018

  2. 受ResNeXt[238]的启发，Chen等人[20]提出了一种多光纤结构，将复杂的神经网络分割成一个轻量级网络（光纤）的集合，以促进光纤之间的信息流动，同时降低计算成本。

     > [20] Y unpeng Chen, Yannis Kalantidis, Jianshu Li, Shuicheng Yan, and Jiashi Feng. Multi-Fiber Networks for Video Recognition. In The European Conference on Computer Vision (ECCV), 2018.

  3. 受SENet[81]的启发，STCNet[33]提出在3D块内集成信道信息，以捕获整个网络中的空间信道和时间信道相关信息。 

     > [33] Ali Diba, Mohsen Fayyaz, Vivek Sharma, M. Mahdi Arzani, Rahman Y ousefzadeh, Juergen Gall, and Luc V an Gool. Spatio-Temporal Channel Correlation Networks for Action Classification. In The European Conference on Computer Vision (ECCV), 2018

- **Unifying 2D and 3D CNNs**

  为了降低3D网络训练的复杂性，P3D[169]和R2+1D[204]探索了3D分解的概念。具体来说，一个3D内核（例如3×3×3）可以分解为两个独立的操作，一个2D空间卷积（例如1×3×3）和一个1D时间卷积（例如3×1×1）。P3D和R2+1D之间的区别在于它们如何安排两个因式分解操作，以及如何形成每个剩余块。轨迹卷积[268]遵循这一思想，但对时间分量使用可变形卷积来更好地处理运动。简化3D CNN的另一种方法是在单个网络中混合2D和3D卷积。MiCTNet[271]集成了2D和3D CNN，以生成更深入、信息更丰富的特征地图，同时降低了每一轮时空融合的训练复杂性。ARTNet[213]通过使用新的构建块引入了一个外观和关系网络。构建块由使用二维CNN的空间分支和使用三维CNN的关系分支组成。S3D[239]结合了上述方法的优点。首先用二维核函数代替网络底部的三维卷积，发现这种顶重网络具有更高的识别精度。然后S3D将剩余的3D核分解为P3D和R2+1D，以进一步减小模型大小和训练复杂度。一个名为ECO[283]的并行作品也采用了这样一个重上加重的网络来实现在线视频理解。 

- 

## 2. 传统算法

### 2.1 DT（2013 IJCV）

> Dense Trajectories and Motion Boundary Descriptors for Action Recognition

[行为识别笔记：improved dense trajectories算法（iDT算法） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/27528934)

- **解读：**

  框架包括密集采样点特征、特征点轨迹跟踪和基于轨迹的特征提取三部分，后续再进行特征编码和分类。

  在得到视频对应的特征后，DT算法采用SVM分类器进行分类，采用one-against-rest策略训练多类分类器。

- **模型：**

  ![image-20220122131931570](picture/image-20220122131931570.png)

### 2.2 iDT（2013 ICCV）

> Action Recognition with Improved Trajectories

- iDT算法的基本框架和DT算法相同，主要改进在于对光流图像的优化，特征正则化方式的改进以及特征编码方式的改进。
- 通过估计相机运动估计来消除背景上的光流以及轨迹
  - 对于HOF,HOG和MBH特征采取了与DT算法（L2范数归一化）不同的方式——L1正则化后再对特征的每个维度开平方
- 使用效果更好的Fisher Vector特征编码



## 3. 深度学习方法

### 3.1 Two-Stream

Two-Stream将动作识别中的特征提取分为两个分支，一个是RGB分支提取空间特征，另一个是光流分支提取时间上的光流特征，最后结合两种特征进行动作识别。

- 解读：

  [论文笔记——基于深度学习的视频行为识别/动作识别（一） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/40964492)

#### 3.1.1 TwoStreamCNN（2014 NeurIPS）

> Two-stream convolutional networks for action recognition in videos

- **解读：**

  - 多任务学习

  - [(1条消息) 【论文学习】Two-Stream Convolutional Networks for Action Recognition in Videos_I am what i am-CSDN博客](https://blog.csdn.net/liuxiao214/article/details/78377791)




#### 3.1.2 TwoStreamFusion（2016 CVPR）

> Convolutional Two-Stream Network Fusion for Video Action Recognition

- **解读：**

  - 解决two stream的两个问题，一是不能在空间和时间特征之间学习像素级的对应关系，二是空域卷积只在单RGB帧上时域卷积只在堆叠的L个时序相邻的光流帧上，时间规模非常有限。
  - 该文章通篇谈的是融合(Fusion)，关键阐释的是如何去融合空域卷积网络与时域卷积网络、在哪里融合这两个网络、如何在时域上融合网络三个问题。
  - [【论文】Convolutional Two-Stream Network Fusion for Video Action Recognition_安静-CSDN博客](https://blog.csdn.net/u013588351/article/details/102074562?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~OPENSEARCH~Rate-1.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~OPENSEARCH~Rate-1.pc_relevant_aa&utm_relevant_index=2)

  


#### 3.1.3 TSN（2016 ECCV）

> Temporal segment networks: Towards good practices for deep action recognition

- **解读：**

  - [TSN(Temporal Segment Networks)算法笔记_AI之路-CSDN博客_tsn模型](https://blog.csdn.net/u014380165/article/details/79029309)

  - [视频理解-Temporal Segment Network TSN - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/84598874)

  





#### 3.1.5 TRN（2018 ECCV）

> Temporal Relational Reasoning in Videos

- **解读：**

  - 时间关系推理（Temporal relational reasoning）是指理解物体／实体在时间域的变化关系的能力。
  - 本文对TSN最后融合方式做一个改进，TSN每个snippet独立地预测，而TRN在预测前先进行snippet间的特征融合。另外TRN的输入用的是不同帧数的snippet(different scale)。
  - [【论文笔记】视频分类系列 Temporal Relational Reasoning in Videos （TRN）_elaine_bao的专栏-CSDN博客](https://blog.csdn.net/elaine_bao/article/details/80753506)

  


#### 3.1.6 TSM（2019 ICCV）

> TSM: Temporal Shift Module for Efficient Video Understanding



#### 3.1.7 LGD-3D Two-stream（2019 CVPR）

> Learning Spatio-Temporal Representation with Local and Global Diffusion





#### 3.1.9 TPM（2020 CVPR）

> Temporal Pyramid Network for Action Recognition

### 3.2 3D-Conv

3D convolution 直接将2D卷积扩展到3D（添加了时间维度），直接提取包含时间和空间两方面的特征。

- 解读：

  [论文笔记——基于的视频行为识别/动作识别算法笔记(三) - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/41659502)

#### 3.2.1 C3D（2015 ICCV）

> Learning spatiotemporal features with 3d convolutional networks



#### 3.2.2 P3D（2017 ICCV）

> Learning spatio-temporal representation with pseudo-3d residual networks



#### I3D（2017 CVPR）

> Quo Vadis, Action Recognition? A New Model and the Kinetics Dataset



#### 3.2.3 S3D（2018 ECCV）

> Rethinking Spatiotemporal Feature Learning: Speed-Accuracy Trade-offs in Video Classification



#### 3.2.4 R(2+1)D（2018 CVPR）

> A Closer Look at Spatiotemporal Convolutions for Action Recognition



#### 3.2.5 ResNet3D（2018 CVPR）

> Can Spatiotemporal 3D CNNs Retrace the History of 2D CNNs and ImageNet?



#### 3.2.6 MARS（2019 CVPR）

> MARS: Motion-Augmented RGB Stream for Action Recognition

#### 3.1.8 SlowFast（2019 ICCV）

> SlowFast Networks for Video Recognition



#### 3.2.7 X3D（2020 CVPR）

> X3D: Expanding Architectures for Efficient Video Recognition
>

### 3.3 CNN+LSTM

这种方法通常使用CNN提取空间特征，使用RNN（如LSTM）提取时序特征，进行行为识别。

- 解读：

  [论文笔记——基于深度学习的视频行为识别/动作识别（二） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/41125934)

#### 3.3.1 LRCN（2015 CVPR）

> Long-term recurrent convolutional networks for visual recognition and description



#### 3.3.2  Beyond short snippets（2015 CVPR）

> Beyond Short Snippets: Deep Networks for Video Classification



#### 3.3.3 TS-LSTM（2019 SPIC）

> TS-LSTM and Temporal-Inception: Exploiting Spatiotemporal Dynamics for Activity Recognition



### 3.4 Transformer-based

#### 3.4.1 VidTr（2021 ICCV）

> VidTr: Video Transformer Without Convolutions

#### 3.4.2 ViViT（2021 ICCV）

> ViViT: A Video Vision Transformer

#### 3.4.3 MViT-B, 32x3（2021 ICCV）

> Multiscale Vision Transformers

#### 3.4.4 Mformer-HR（2021NeurIPS）

> Keeping Your Eye on the Ball: Trajectory Attention in Video Transformers



#### 3.4.5 MViT-L/B（2021）

> Improved Multiscale Vision Transformers for Classification and Detection

#### 3.4.6 X-Vit（2021 NeurIPS）

> Space-time Mixing Attention for Video Transformer

#### 3.4.7 RSANet-R50（2021 NeurIPS）

> Relational Self-Attention: What's Missing in Attention for Video Understanding

#### 3.4.8 UniFormer（2022 ICLR）

> UniFormer: Unified Transformer for Efficient Spatial-Temporal Representation Learning



### 3.5 others（暂定）

#### 3.5.1 OmniSource（2020 ECCV）

> Omni-sourced Webly-supervised Learning for Video Recognition

#### 3.5.2 HATNet（2020 ECCV）

> Large Scale Holistic Video Understanding



#### 3.5.3 SMART（2021 AAAI）

> SMART Frame Selection for Action Recognition



#### 3.5.4 MorphMLP（2021）

> MorphMLP: A Self-Attention Free, MLP-Like Backbone for Image and Video



#### 3.5.5 ACTION-Net（2021 CVPR）

> ACTION-Net: Multipath Excitation for Action Recognition

#### 3.5.6 MoViNets（2021 CVPR）

> MoViNets: Mobile Video Networks for Efficient Video Recognition

#### 3.5.7 TDN（2021 CVPR）

> TDN: Temporal Difference Networks for Efficient Action Recognition

#### 3.5.8 SELFYNet-TSM-R50En（2021 ICCV）

> Learning Self-Similarity in Space and Time as Generalized Motion for Video Action Recognition

#### 3.5.9 CT-Net（2021 ICLR）

> CT-Net: Channel Tensorization Network for Video Classification



## 4. 自监督/对抗学习/多模态等

### 4.1 DEEP-HAL with ODF+SDF（2021 ACM MM）

> Self-supervising Action Recognition by Statistical Moment and Subspace Descriptors

### 4.2 VideoMoCo（2021 CVPR）

> VideoMoCo: Contrastive Video Representation Learning with Temporally Adversarial Examples

### 4.3 VIMPAC（2021）

> VIMPAC: Video Pre-Training via Masked Token Prediction and Contrastive Learning

### 4.4 MaskFeat（2021）

> Masked Feature Prediction for Self-Supervised Visual Pre-Training

## 5. RGB数据集

对于视频动作识别任务，数据集通常是通过以下过程构建的：

（1）定义一个动作列表，将以前动作识别数据集的标签组合起来，并根据用例添加新的类别。

（2） 通过将视频标题/副标题与动作列表匹配，从各种来源获取视频，如YouTube和电影。

（3） 手动提供时间注释，以指示操作的开始和结束位置；

（4）通过重复数据消除和过滤掉嘈杂的类/样本，最终清理数据集。

<img src="picture/image-20220315201728223.png" alt="image-20220315201728223" style="zoom:80%;" />

### 5.1 HMDB-51

于2011年推出。它主要来自电影，还有一小部分来自公共数据库，如Prelinger archive、Y ouTube和谷歌视频。该数据集包含**6849**个剪辑，分为**51**个动作类别，每个类别至少包含101个剪辑。该数据集有三个官方拆分。大多数以前的论文要么报告**top-1精度**，要么报告**三次分类的平均精度。** 

### 5.2 UCF-101

目前行为识别最常使用的数据集之一，于2012年推出，是之前UCF50数据集的扩展。它包含了13320个来自Y ouTube的视频，涵盖101类人类行为。该数据集有三个类似于HMDB51的官方拆分，也以相同的方式进行评估。

### 5.3 Something-Something V1/V2

2017年推出了V1，2018年推出了V2。这个家族是另一个流行的基准，由**174**个动作类组成，描述人类对日常物品执行基本动作。V1中有108499个视频，V2中有220847个视频。注意，Something-Something数据集**需要强大的时间建模**，因为大多数活动不能仅基于空间特征推断（例如打开某物、用某物覆盖某物）。



### 数据集特征分析

流行视频动作数据集的视觉示例

<img src="picture/image-20220315205819378.png" alt="image-20220315205819378" style="zoom:80%;" />

**不同数据集有不同特征：**

- 在前两行中，我们从**UCF101和Kinetics400数据集**中选择动作类。有趣的是，我们发现，这些**行为有时可以由上下文或场景单独决定**。例如，该模型可以预测骑自行车的动作，只要它在视频帧中识别出一辆自行车。该模型还可以预测板球保龄球的动作，如果它能识别板球场。因此，对于这些类别，视频动作识别可能成为一个对象/场景分类问题，而不需要推理运动/时间信息。
- 在中间的两行中，我们从**something-something v2数据集**中挑选动作类。该数据集侧重于人机交互，因此更细粒度，**需要强大的时间建模，不能仅通过第一帧来区分这两个动作。**例如，如果我们只看丢东西和捡东西的第一帧，而不看其他视频帧，就不可能区分这两个动作。
- 在最下面一行中，我们从Moments in time数据集中选择动作类。该数据集不同于大多数视频动作识别数据集，其设计目的是具有较大的类间和类内变化，以表示不同抽象级别的动态事件。即在不同的环境中，同样的行动可能会有不同的参与者。 例如，动作攀岩可以在不同的环境（楼梯或树）中有不同的参与者（人或动物） 

## 6. 其他

### 6.1 光流

- **光流**是空间运动物体在**观察成像平面**上的像素运动的**瞬时速度**，是利用图像序列中像素在时间域上的变化以及相邻帧之间的**相关性**来找到上一帧跟当前帧之间存在的对应关系，从而计算出相邻帧之间物体的运动信息的一种方法。

- 光流之所以生效是依赖于这几个假设：

  1. 物体的像素强度不会在连续帧之间改变；
  2. 一张图像中相邻的像素具有相似的运动。

- **光流的计算方法**

  假设第一帧图像中的像素 *I(x, y, t)* 在时间 *dt* 后移动到第二帧图像的 *(x+dx, y+dy)* 处。根据上述第一条假设：灰度值不变，我们可以得到：

  <img src="picture/image-20220221153601761.png" alt="image-20220221153601761" style="zoom:80%;" />

  对等号右侧进行泰勒级数展开，消去相同项，两边都除以 *dt* ，得到如下方程：

  <img src="picture/image-20220221153623441.png" alt="image-20220221153623441" style="zoom:80%;" />

  ![image-20220221153635509](picture/image-20220221153635509.png)

  fx,fy均可由图像数据求得，而**(u,v)即为所求光流矢量**。

  上述一个等式中有两个未知数。有几个方法可以解决这个问题，其中的一个是 Lucas-Kanade 法 。增加有一个假设：

  这里就要用到上面提到的第二个假设条件，领域内的所有像素点具有相同的运动。Lucas-Kanade法就是利用一个3x3的领域中的9个像素点具有相同的运动，就可以得到9个点的光流方程(即上述公式)，用这些方程来求得*(u, v)* 这两个未知数，显然这是个约束条件过多的方程组，不能解得精确解，一个好的解决方法就是使用最小二乘来拟合。

  opencv提供函数计算，参考[OpenCV小例程——光流法_xiao_lxl的专栏-CSDN博客_opencv 光流算法](https://blog.csdn.net/xiao_lxl/article/details/95330541)

