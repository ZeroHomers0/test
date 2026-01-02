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

    // 使用与 saveButton 相同的结构和样式
    const btn = document.createElement('div');
    btn.id = BUTTON_ID;
    btn.className = 'list-group-item flex-container flexGap5 interactable tavern-helper-shortcut-item';
    btn.title = '刷新当前页面';

    // 图标（使用 Font Awesome）
    const icon = document.createElement('div');
    icon.className = 'fa-solid fa-rotate extensionsMenuExtensionButton'; // 刷新图标：fa-rotate 或 fa-arrow-rotate-right
    // 如果你偏好其他刷新图标，也可以用 'fa-arrow-rotate-right'

    // 文字
    const text = document.createElement('span');
    text.innerText = '刷新页面';

    // 组装
    btn.appendChild(icon);
    btn.appendChild(text);

    // 点击事件：保持原逻辑
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
