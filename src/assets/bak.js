const anchors = document.querySelectorAll('a[href^="/#"]');
// 为每个锚点元素添加点击事件监听器
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认点击事件

        const targetId = this.getAttribute('href').substring(1); // 获取锚点的目标ID
        const targetElement = document.getElementById(targetId); // 获取目标元素

        if (targetElement) {
            const offsetTop = targetElement.offsetTop; // 获取目标元素距离页面顶部的偏移量
            const scrollOffset = window.scrollY; // 获取当前页面滚动的偏移量

            let distance = 0;
            console.log("targetId", targetId)
            //特殊判断#top锚点
            if (String(targetId) === "#top") {
                console.log("侦测到", targetId)
                distance = offsetTop - scrollOffset;
            } else {
                distance = offsetTop - scrollOffset + window.innerHeight; // 计算目标元素与当前页面顶部的距离
            }
            // 使用 requestAnimationFrame() 实现平滑滚动效果
            requestAnimationFrame((currentTime) => {
                const duration = 1700; // 总滚动持续时间（以毫秒为单位）
                let startTime = currentTime;

                const easeOutCubic = (t, b, c, d) => {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                };

                // 使用 requestAnimationFrame() 实现平滑滚动效果
                const smoothScroll = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;

                    // 添加延迟
                    if (timeElapsed < delay) {
                        requestAnimationFrame(smoothScroll);
                        return;
                    }

                    const scrollAmount = easeOutCubic(timeElapsed - delay, scrollOffset, distance, duration);
                    window.scrollTo(0, scrollAmount);
                    if (timeElapsed - delay < duration) {
                        requestAnimationFrame(smoothScroll);
                    }
                };

                const delay = 400; // 初始延迟时间（以毫秒为单位）
                setTimeout(() => {
                    requestAnimationFrame(smoothScroll); // 开始平滑滚动
                }, delay);

                requestAnimationFrame(smoothScroll); // 开始平滑滚动
            });
        }
    });
});
