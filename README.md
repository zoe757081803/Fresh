
# Fresh
“猴鲜生”生鲜电商小程序前端设计
## 需求分析
生鲜电商能够在一定程度上取代产业链中从农户到消费者中间的层层批发商，通过从批发市场采购、与供应商合作、产地直采或自建基地的方式取代传统农产品流通的多级批发商模式。其中，产地直采或自建基地将供应链压缩到最短，直接控制供应端的采购，利用网站平台实现向消费者的销售，最后通过物流配送中心将产品送达消费者。对比传统的农贸市场渠道，生鲜经营模式能实现“众多农户—生鲜电商—众多消费者”的“从产地到餐桌”的直线模式。
## 开发工具
微信开发者工具
## 程序规划
“猴鲜生”微信小程序属于电子商务型小程序，目的是搭建一个面向消费者的购物平台，主要功能根据小组的需要和计划确定为概览、分类、商品购买和用户管理四大功能，分别由底部导航栏中的页面实现；商品总览、详情展示、订单管理、收货地址管理等具体功能可以设置从四个主页面中进行跳转。
下图是预设计的小程序结构图，其中“首页”、“分类”、“购物车”、“我的”、“商品总览”、“产品展示”、“收货地址”、“订单详情”为存在跳转关系的八个页面，为小程序的各个功能实现构成基础。
![image](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682407286655.png)
1.	商品展览：通过横幅展览框模块滚动播放商品的精修广告图片
（1） 服务导航：通过四个导航项简要展示“猴鲜生”网站能够提供服务，即主页、分类、购物车、我的；
（2） 商品推荐：通过精选主题、最近新品，多方位、多选择展示网站推荐商品；
（3） 图册展示：通过横幅展览框模块滚动播放商品的精修广告图片。
2.	分类功能：商品分类页面，页面中包括以下页面链接模块细化分类
（1） 进口水果：通过首页导航栏跳转到产品列表页面，显示挑选出的进口产品；
（2） 国产水果：通过首页导航栏跳转到产品列表页面，显示挑选出的国产产品；
3.	购物车功能：通过首页导航栏跳转，将用户希望购买的商品做集中处理，进行购买及增删功能；
4.	用户管理功能：功能包括用户登录、收货地址管理以及查看订单信息。
5.	商品总览功能：在首页和商品分类页面中有商品链接，可以跳转到商品介绍页面查看商品详情与购买。
6.	详情展示功能：展示特定商品信息，能通过点击小程序中的任意商品图片进行跳转。
7.	订单管理功能：显示订单详情的页面，用户可以查看选购的商品并支付钱款，但是因为小程序目前没有后台数据不支持真正付款，只做演示用。
8.	收货地址管理功能：即管理收货地址的页面，用户可以输入收货地址，方便用户在平台购买商品。

## 功能规划
“猴鲜生”微信小程序的主要功能确定为概览、分类、商品购买和用户管理四大功能，分别由底部导航栏中的页面实现；商品总览、详情展示、收货地址管理等具体功能可以设置从四个主页面中进行跳转，帮助顾客快速浏览搜寻自己想要的产品并购买。
### 首页
首页的作用是一个网站内容的汇总和索引，在首页有很多图标和链接，栏目也比较多，通往各个模块，首页是网站必需的。
首页对应链接小程序代码中的“index”页面，相应图标放置在导航栏中，能够通过导航栏进行跳转。

![image](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682409463870.png)

### 分类
分类，可以条理清楚地说明产品。分类是将复杂的产品说清楚和帮助客户购买选择商品的重要方法，能够为顾客提供一个搜寻自己想要类型水果的一个索引，方便客户快速找到自己想要的产品。
分类页面对应链接小程序代码中的“category”页面，相应图标放置在导航栏中，能够通过导航栏进行跳转，也能通过商品详情（details_bxg、details_xm、details_cm、details_hlg）页面中左上方的“返回”图标进行跳转。

![图3-5 分类页面整体预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682410826433.png)
### 购物车
购物车能够将用户希望购买的商品做集中处理，一方面能够在用户付款前增加二次选择商品的机会，另一方面能够避免用户一个个分别下单的重复、冗余操作，减少用户的操作成本，提升用户的购买体验。
购物车页面对应链接小程序代码中的“cart”页面，相应图标放置在导航栏中，能够通过导航栏进行跳转，也能通过商品详情（details）页面中右上方的“购买”图标进行跳转。

![图3-6 购物车页面整体预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682410877040.png)
### 我的
即用户管理页面，包括登录页面和个人资料模块以及查看订单信息。在此页面可以查看客户自己的基本相关信息，商品订单，地址管理。方便客户管理查看自己的相关信息和订单。
我的页面对应链接小程序代码中的“user”页面，相应图标放置在导航栏中，能够通过导航栏进行跳转，也能通过地址管理（address）页面中右上方的“返回”图标进行跳转。

![图3-9 分类页面整体预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682410948683.png)
### 商品总览
即展示全部商品的页面，对应链接小程序代码中的“list”页面，能够通过点击主页的“精选主题”模块中的图片进行跳转。
在此页面中，用户可以查看本平台中所有产品的信息，通过点击商品图片进入相应商品的详情页面（details_bxg、details_xm、details_cm、details_hlg），方便用户进行平台商品概览。

![图3-10 商品总览页面预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682410989926.png)
### 商品详情
即展示特定商品信息的页面，不同的产品分别对应链接小程序代码中的“details_\*”页面（即details_bxg、details_xm、details_cm、details_hlg），能够通过点击小程序中的任意商品图片进行跳转。
在此页面中，用户可以查看本平台中特定产品的信息，通过点击右上角图标进入购物车（cart）页面，方便用户进行放入购物车中的商品概览。

![图3-11 商品详情页面预览图（以百香果为例）](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682411047638.png)
### 地址管理
即管理收货地址的页面，对应链接小程序代码中的“address”页面，能够通过在订单中的“添加收货地址”进行跳转。
在此页面中，用户可以输入收货地址，方便用户在平台购买商品。

![图3-12 商品总览页面预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682411085606.png)
### 订单管理
即显示订单详情的页面，对应链接小程序代码中的“order”页面，能够通过在购物车中右下方的箭头进行跳转。
在此页面中，用户可以查看选购的商品并支付钱款，但是因为小程序目前没有后台数据不支持真正付款，只做演示用。

![图3-13 商品总览页面预览图](https://gitee.com/zoe14/image_xiaoshuku/raw/main/小书匠/1682411209796.png)
