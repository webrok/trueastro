import React from 'react'
const stats = [
    { id: 1, name: 'Professional Astrologers', value: '1500+' },
    { id: 2, name: 'Call/Chat Minutes', value: '4Cr+' },
    { id: 3, name: 'Happy Customers', value: '50L+' },
  ]

export default function Status() {
  return (
    <div className="bg-gray-50 sm:py-20 mt-5 text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col pr-7 gap-y-2 border-r-1 border-black lg:last:border-r-0">
              <dt className="text-base/5 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
