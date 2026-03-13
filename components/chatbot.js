let chatbotOpen = false;
let chatbotMinimized = false;
let chatMessages = [];

const botResponses = [
  'ランチプレートが今月の人気メニューです。',
  'アンケート結果によると、全体満足度は4.2です。',
  '先月と比較して売上が12%増加しています。',
  '詳しい分析は各ページでご確認いただけます。',
  '本日の来客数は平均より15%多いです。',
  'ラーメンの売上が先週から20%伸びています。',
  'カレーのアンケート評価は4.3です。',
  '決済方法では楽Payが最も利用されています。',
];
let responseIndex = 0;

function saveChat() {
  localStorage.setItem('chatbotMessages', JSON.stringify(chatMessages));
  localStorage.setItem('chatbotOpen', chatbotOpen ? '1' : '0');
  localStorage.setItem('chatbotResponseIndex', responseIndex);
}

function loadChatbot() {
  // Inject chat panel into the page
  const panel = document.createElement('div');
  panel.id = 'chatbotPanel';
  panel.className = 'hidden';
  panel.innerHTML = `
    <div id="chatbotWindow" style="position:absolute; bottom:16px; right:16px; width:350px; height:450px; z-index:30;"
         class="flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300">
      <div class="flex items-center justify-between px-4 py-3 bg-primary text-white flex-shrink-0 cursor-pointer" onclick="if(chatbotMinimized) restoreChatbot()">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-robot"></i>
          <span class="font-bold text-sm">チャットボット</span>
        </div>
        <div class="flex items-center gap-1">
          <button onclick="event.stopPropagation(); minimizeChatbot()" class="hover:bg-white/20 rounded-lg p-1 transition-colors">
            <i class="fa-solid fa-minus text-sm"></i>
          </button>
          <button onclick="event.stopPropagation(); toggleChatbot()" class="hover:bg-white/20 rounded-lg p-1 transition-colors">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      <div id="chatbotBody" class="flex flex-col flex-1 overflow-hidden">
        <div id="chatMessages" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        </div>
        <div class="flex items-center gap-2 p-3 border-t border-gray-200 bg-white flex-shrink-0">
          <input id="chatInput" type="text" placeholder="メッセージを入力..."
            class="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            onkeydown="if(event.key==='Enter')sendChatMessage()" autocomplete="off" />
          <button onclick="sendChatMessage()"
            class="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primaryDark transition-colors flex-shrink-0">
            <i class="fa-solid fa-paper-plane text-sm"></i>
          </button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(panel);

  // Restore saved state
  const saved = localStorage.getItem('chatbotMessages');
  const savedIndex = localStorage.getItem('chatbotResponseIndex');
  if (saved) {
    chatMessages = JSON.parse(saved);
    responseIndex = savedIndex ? parseInt(savedIndex) : 0;
    renderMessages();
  } else {
    addBotMessage('こんにちは！データについてご質問があればお気軽にどうぞ。');
  }

  // Restore open/closed state
  if (localStorage.getItem('chatbotOpen') === '1') {
    chatbotOpen = true;
    panel.classList.remove('hidden');
  }
}

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  chatbotMinimized = false;
  const panel = document.getElementById('chatbotPanel');
  const win = document.getElementById('chatbotWindow');
  const body = document.getElementById('chatbotBody');
  if (chatbotOpen) {
    panel.classList.remove('hidden');
    win.style.height = '450px';
    body.style.display = '';
    document.getElementById('chatInput').focus();
  } else {
    panel.classList.add('hidden');
    win.style.height = '450px';
    body.style.display = '';
  }
  saveChat();
}

function minimizeChatbot() {
  chatbotMinimized = true;
  const win = document.getElementById('chatbotWindow');
  const body = document.getElementById('chatbotBody');
  win.style.height = 'auto';
  body.style.display = 'none';
}

function restoreChatbot() {
  chatbotMinimized = false;
  const win = document.getElementById('chatbotWindow');
  const body = document.getElementById('chatbotBody');
  win.style.height = '450px';
  body.style.display = '';
  document.getElementById('chatInput').focus();
}

function addBotMessage(text) {
  chatMessages.push({ role: 'bot', text });
  renderMessages();
  saveChat();
}

function addUserMessage(text) {
  chatMessages.push({ role: 'user', text });
  renderMessages();
  saveChat();
}

function renderMessages() {
  const container = document.getElementById('chatMessages');
  container.innerHTML = chatMessages.map(m => {
    if (m.role === 'bot') {
      return `<div class="flex items-start gap-2">
        <div class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-700 max-w-[260px]">${m.text}</div>
      </div>`;
    } else {
      return `<div class="flex justify-end">
        <div class="bg-primary text-white rounded-2xl rounded-tr-sm px-3 py-2 text-sm max-w-[260px]">${m.text}</div>
      </div>`;
    }
  }).join('');
  container.scrollTop = container.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addUserMessage(text);

  // Simulate typing delay then respond
  setTimeout(() => {
    const reply = botResponses[responseIndex % botResponses.length];
    responseIndex++;
    addBotMessage(reply);
  }, 500);
}
