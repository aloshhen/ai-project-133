import { motion } from 'framer-motion'
import { Coffee, ChevronRight, ExternalLink } from 'lucide-react'
import { isTelegramContext } from '../utils/telegram'

function Hero() {
  const isTelegram = isTelegramContext()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
        >
          Кофе. Код. Крипто.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-10"
        >
          Революционная система лояльности нового поколения
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button className="bg-electric-gradient text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center">
            Начать работу <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          
          <button className="border border-white/10 text-slate-300 px-6 py-3 rounded-full hover:bg-white/5 transition flex items-center">
            Документация <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </motion.div>

        {isTelegram && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm text-slate-500"
          >
            Открыто в Telegram Mini App
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero