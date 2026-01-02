(function() {
  const BUTTON_ID = 'manual_refresh_button';

  // 添加刷新按钮到菜单
  function addRefreshButton() {
    if (document.getElementById(BUTTON_ID)) return;

    // 找到扩展菜单或 options 菜单
    let menu = document.getElementById('extensionsMenu') || document.getElementById('options');
    if (!menu) {
      console.warn('[RefreshButton] Menu not found. Cannot add refresh button.');
      return;
    }

    // 替换原有 createElement 方式，创建与参考代码样式一致的按钮（原生JS实现，等价于jQuery的$('<div>')）
    const btn = document.createElement('div');
    // 设置ID和所有参考样式的class
    btn.id = BUTTON_ID;
    btn.className = 'list-group-item flex-container flexGap5 interactable tavern-helper-shortcut-item';
    // 设置title提示文字
    btn.title = '手动刷新当前页面';

    // 创建图标容器（对应参考代码中的fa-solid fa-save容器）
    const iconDiv = document.createElement('div');
    iconDiv.className = 'fa-solid fa-refresh extensionsMenuExtensionButton'; // 使用刷新图标fa-refresh，保持样式类一致

    // 创建文字span（对应参考代码中的<span>保存聊天</span>）
    const textSpan = document.createElement('span');
    textSpan.innerText = '刷新页面';

    // 将图标和文字添加到按钮容器中（还原参考代码的DOM结构）
    btn.appendChild(iconDiv);
    btn.appendChild(textSpan);

    // 点击事件
    btn.addEventListener('click', () => {
      console.log('[RefreshButton] 页面刷新触发');
      location.reload(); // 刷新页面
    });

    // 添加到菜单
    menu.appendChild(btn);
  }

  // 尝试多次添加按钮（页面可能尚未加载菜单）
  const interval = setInterval(() => {
    const menu = document.getElementById('extensionsMenu') || document.getElementById('options');
    if (menu) {
      addRefreshButton();
      clearInterval(interval);
    }
  }, 500);
})();
