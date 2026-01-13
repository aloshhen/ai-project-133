import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

const gridItems = [
  {
    icon: Coffee,
    title: 'Smart Order',
    description: 'Предзаказ кофе с персонализированными рекомендациями',
    className: 'bg-slate-900/50 border border-white/10'
  },
  {
    icon: Wallet,
    title: 'Crypto Payments',
    description: 'Поддержка TON и Stars. Удобные криптовалютные платежи',
    className: 'bg-slate-900/50 border border-white/10 col-span-2'
  },
  {
    icon: Trophy,
    title: 'NFT Loyalty',
    description: 'Уникальные NFT-бонусы для постоянных клиентов',
    className: 'bg-slate-900/50 border border-white/10'
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    description: 'Детальная аналитика для владельцев бизнеса',
    className: 'bg-slate-900/50 border border-white/10'
  }
]

function BentoGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {gridItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`p-6 rounded-2xl backdrop-blur-2xl ${item.className} hover:scale-[1.02] transition-transform`}
          >
            <item.icon className="w-10 h-10 text-electric-coffee-from mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BentoGrid