// src/directives/SmoothScrollbar.js
//调整思华滚轮的地方
import SmoothScrollbar from 'smooth-scrollbar';

export default {
    inserted(el, binding) {
        const { options } = binding.value || {}; // 获取指令参数中的选项对象
        SmoothScrollbar.init(el, options); // 将选项传递给 Smooth Scrollbar 的初始化方法
    },
    unbind(el) {
        const scrollbar = SmoothScrollbar.get(el);
        if (scrollbar) {
            scrollbar.destroy();
        }
    },
};
