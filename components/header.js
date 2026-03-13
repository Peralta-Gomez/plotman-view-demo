function loadHeader() {
  const header = document.getElementById('shared-header');
  if (!header) return;
  header.outerHTML = `
<header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-10 z-20 shadow-sm flex-shrink-0" data-purpose="header">
  <div class="flex items-center gap-4">
    <img alt="Shokudoraku Logo" class="h-10 object-contain" src="img/logo.png"/>
    <span class="text-3xl font-bold text-gray-800 hidden md:inline-block">Data Analytics</span>
  </div>
  <div class="flex items-center gap-6">
    <div class="relative">
      <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      <i class="fa-solid fa-bell text-gray-400 text-2xl cursor-pointer hover:text-primary"></i>
    </div>
    <div class="flex items-center gap-3 pl-4 border-l border-gray-200">
      <div class="text-right hidden sm:block">
        <p class="text-sm font-semibold text-gray-900">Admin User</p>
        <p class="text-xs text-gray-500 text-primary">Manager</p>
      </div>
      <div class="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">AD</div>
    </div>
  </div>
</header>`;
}
