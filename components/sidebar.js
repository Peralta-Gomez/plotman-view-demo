function loadSidebar(activePage) {
  const sidebar = document.getElementById('shared-sidebar');
  if (!sidebar) return;

  const pages = [
    { id: 'sales', icon: 'fa-chart-line', label: '売上分析', href: 'main_view.html' },
    { id: 'items', icon: 'fa-magnifying-glass-chart', label: '商品詳細', href: 'item_details.html' },
    // { id: 'inventory', icon: 'fa-boxes-stacked', label: '在庫管理', href: '#' },
    { id: 'survey', icon: 'fa-clipboard-list', label: 'アンケート', href: 'survey.html' },
  ];

  const navLinks = pages.map(p => {
    const isActive = p.id === activePage;
    const cls = isActive
      ? 'flex items-center gap-3 px-3 py-2.5 text-white bg-primary rounded-lg transition-colors'
      : 'flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors';
    return `<a class="${cls}" href="${p.href}"><i class="fa-solid ${p.icon} w-5"></i><span class="font-medium">${p.label}</span></a>`;
  }).join('\n');

  sidebar.outerHTML = `
<aside class="w-48 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col sidebar-transition hidden md:flex h-full" data-purpose="sidebar">
  <nav class="flex-1 py-4 px-3 space-y-1">
    ${navLinks}
    <button onclick="toggleChatbot()" class="flex items-center gap-3 px-3 py-2.5 text-primary hover:bg-primary/10 rounded-lg w-full transition-colors">
      <i class="fa-solid fa-robot w-5"></i>
      <span class="font-bold">チャット</span>
    </button>
  </nav>
  <div class="p-3 border-t border-gray-100 space-y-1">
    <button class="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-red-600 w-full transition-colors">
      <i class="fa-solid fa-right-from-bracket w-5"></i>
      <span class="font-medium">ログアウト</span>
    </button>
  </div>
</aside>`;
}
