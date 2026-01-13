import { Coffee, Github, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="w-8 h-8 text-electric-coffee-from" />
            <span className="text-xl font-bold text-white">CoffeeCode</span>
          </div>
          <p className="text-slate-400 text-sm">
            Революция кофейной лояльности через код и криптовалюту
          </p>
        </div>

        {['Продукт', 'Компания', 'Поддержка', 'Юридическая информация'].map((col, idx) => (
          <div key={idx}>
            <h4 className="text-white font-semibold mb-4">{col}</h4>
            <ul className="space-y-2">
              {['О нас', 'Карьера', 'Контакты', 'Политика конфиденциальности'].map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a href="#" className="text-slate-400 hover:text-white transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
        <p className="text-slate-400 text-sm">
          © 2024 CoffeeCode. Все права защищены.
        </p>
        <div className="flex space-x-4">
          {[Github, Twitter, Linkedin].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-slate-400 hover:text-white transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer