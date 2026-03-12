function loadSidebar(activePage) {
  const sidebar = document.getElementById('shared-sidebar');
  if (!sidebar) return;

  const pages = [
    { id: 'sales', icon: 'fa-chart-line', label: 'Sales Analysis', href: 'main_view.html' },
    { id: 'items', icon: 'fa-magnifying-glass-chart', label: 'Item Details', href: '#' },
    { id: 'inventory', icon: 'fa-boxes-stacked', label: 'Inventory', href: '#' },
    { id: 'survey', icon: 'fa-clipboard-list', label: 'Survey', href: 'survey.html' },
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
  </nav>
  <div class="p-3 border-t border-gray-100">
    <button class="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-red-600 w-full transition-colors">
      <i class="fa-solid fa-right-from-bracket w-5"></i>
      <span class="font-medium">Logout</span>
    </button>
  </div>
</aside>`;
}
