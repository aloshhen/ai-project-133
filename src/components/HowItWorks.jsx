import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
  {
    title: 'Регистрация',
    description: 'Создайте аккаунт через Telegram или почту'
  },
  {
    title: 'Первый заказ',
    description: 'Получите бесплатный кофе и NFT-бонус'
  },
  {
    title: 'Постоянство',
    description: 'Копите баллы, получайте крипто-награды'
  }
]

function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">
          Как это работает
        </h2>
        <p className="text-slate-400">
          Простые шаги к революции кофейной лояльности
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl text-center"
          >
            <div className="w-12 h-12 bg-electric-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-slate-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks