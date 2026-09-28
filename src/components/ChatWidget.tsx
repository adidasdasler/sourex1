import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! 👋 Чем могу помочь?', isBot: true, time: '10:00' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses: Record<string, string> = {
    'цен': 'Наши подписки начинаются от 299₽/день. Самый популярный план — "Оптимальный" за 1 999₽ на 3 месяца. С ним вы экономите до 50% на запчастях! 💰',
    'достав': 'Мы доставляем по всей России через Яндекс.Доставку. По Москве — 1-2 дня, по России — 3-7 дней. Также доступен самовывоз из пунктов выдачи. 🚚',
    'vin': 'VIN-декодер работает просто: введите 17-символьный код в поиске, и мы покажем все характеристики автомобиля и подходящие запчасти. 🔍',
    'возвр': 'Возврат возможен в течение 14 дней. Оригинальные запчасти в заводской упаковке принимаются без вопросов. Оформите возврат в личном кабинете. ✅',
    'оплат': 'Принимаем оплату банковскими картами, через СБП и электронные кошельки. Для юрлиц — безналичный расчёт по счёту. 💳',
    'привет': 'Привет! Рады видеть вас в SouRex! Могу рассказать о подписках, доставке, поиске запчастей или помочь с заказом. Что вас интересует? 😊',
  };

  const getBotResponse = (text: string): string => {
    const lower = text.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (lower.includes(key)) return response;
    }
    return 'Спасибо за вопрос! Наш специалист ответит вам в течение 5 минут. А пока вы можете ознакомиться с разделом FAQ или позвонить нам: 8-800-123-45-67 📞';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-h-[500px] glass-card overflow-hidden flex flex-col z-[90] animate-fade-in-up shadow-2xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#f6ad55] to-[#e67a2e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <div className="font-semibold text-[#0a1628]">SouRex Помощник</div>
                <div className="text-xs text-[#0a1628]/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></span>
                  Онлайн
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-[#0a1628] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px] max-h-[300px]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.isBot
                    ? 'bg-white/10 text-white/90 rounded-tl-md'
                    : 'bg-[#f6ad55] text-[#0a1628] rounded-tr-md'
                }`}>
                  {msg.text}
                  <div className={`text-xs mt-1 ${msg.isBot ? 'text-white/30' : 'text-[#0a1628]/50'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {['Цены', 'Доставка', 'VIN', 'Возврат'].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/50 hover:text-white transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Напишите сообщение..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-[#f6ad55] hover:bg-[#e67a2e] flex items-center justify-center text-[#0a1628] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-4 sm:right-6 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 hover:bg-white/20 rotate-0'
            : 'bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] hover:scale-110 animate-pulse-glow'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-[#0a1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#34d399] rounded-full border-2 border-[#0a1628] animate-pulse" />
        )}
      </button>
    </>
  );
}
