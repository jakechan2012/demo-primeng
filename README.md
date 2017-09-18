# demo-primeng

该Demo基于Angular + Primeng实现，适用于需要Tab标签的后台管理系统，


## 实现思路

* 使用一个数组维护所有的标签，添加删除Tab只要针对数组操作即可
* Tab Panel中既是一个动态组件
    动态组件实现参考官方文档 [动态组件加载器](https://angular.cn/guide/dynamic-component-loader) 
    
## 说明

这个demo会有很多缺陷，仅可作为 **动态组件实现Tab标签** 的一种思路。 另外其中涉及到了 [@ngx-translate](https://github.com/ngx-translate/core) 国际化方案，也可做一定参考。
