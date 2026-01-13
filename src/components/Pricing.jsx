import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Lite',
    price: '0',
    features: [
      'Базовый функционал',
      'Один бесплатный кофе',
      'Стартовый NFT'
    ]
  },
  {
    name: 'Pro',
    price: '9.99',
    features: [
      'Все функции Lite',
      'Два бесплатных кофе в месяц',
      'Премиум NFT',
      'Криптовозврат 5%'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '99.99',
    features: [
      'Корпоративный аккаунт',
      'Неограниченные бонусы',
      'Персональный менеджер',
      'Расширенная аналитика'
    ]
  }
]

function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">
          Тарифы
        </h2>
        <p className="text-slate-400">
          Выберите план, который подходит именно вам
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`
              bg-slate-900/50 border border-white/10 p-6 rounded-2xl relative
              ${plan.popular ? 'ring-2 ring-electric-coffee-from' : ''}
            `}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-electric-gradient text-white px-3 py-1 rounded-bl-xl text-xs">
                Популярный
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-4">
              {plan.name}
            </h3>
            <div className="text-4xl font-bold text-white mb-6">
              ${plan.price} <span className="text-sm text-slate-400">/мес</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center text-slate-400">
                  <Check className="w-5 h-5 text-electric-coffee-from mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-electric-gradient text-white py-3 rounded-full hover:scale-105 transition">
              Выбрать {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing