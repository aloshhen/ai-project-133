import { Menu, Coffee } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/30 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Coffee className="w-8 h-8 text-electric-coffee-from" />
            <span className="text-xl font-bold text-white tracking-tight">CoffeeCode</span>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            {['Функции', 'Как работает', 'Цены', 'Войти'].map((item, idx) => (
              <a 
                key={idx} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-white/10"
        >
          {['Функции', 'Как работает', 'Цены', 'Войти'].map((item, idx) => (
            <a 
              key={idx}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-4 py-3 text-slate-300 hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation