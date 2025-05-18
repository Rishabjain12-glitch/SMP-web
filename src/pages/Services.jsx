import { useState } from 'react'

const servicesData = [
  {
    title: "🌍 Carbon Footprint Calculator",
    description:
      "Quickly see how much carbon your meals produce and track your progress towards a greener lifestyle.",
  },
  {
    title: "🥩 Food Impact Insights",
    description:
      "Uncover the true environmental cost of foods like meat, fish, and cheese - knowledge is power!",
  },
  {
    title: "💡 Personalized Tips",
    description:
      "Get smart, easy-to-follow recommendations tailored to your eating habits to shrink your footprint.",
  },
  {
    title: "🤝 Community & Challenges",
    description:
      "Join a vibrant community, share your journey, and take part in fun challenges that make sustainability social.",
  },
  {
    title: "📚 Learning Hub",
    description:
      "Dive into articles, videos, and guides that inspire and educate you on sustainable eating habits.",
  },
]

function ServiceCard({ title, description }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#4caf50' : '#fff',
        color: hovered ? '#fff' : '#333',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: hovered
          ? '0 8px 20px rgba(76, 175, 80, 0.4)'
          : '0 4px 10px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '1 1 280px',
        minWidth: '280px',
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section
      style={{
        background:
          'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)',
        padding: '5rem 2rem',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
          What We Offer
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', fontWeight: '500' }}>
          At CarbonCalci, we make it easy and fun to understand your food's carbon footprint and take meaningful steps towards a greener lifestyle.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {servicesData.map(({ title, description }) => (
            <ServiceCard key={title} title={title} description={description} />
          ))}
        </div>
        <button
          style={{
            marginTop: '3rem',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#4caf50',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.4)',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#e8f5e9'
            e.currentTarget.style.color = '#388e3c'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#fff'
            e.currentTarget.style.color = '#4caf50'
          }}
          onClick={() => alert('Let’s get started on your sustainable journey!')}
        >
          Get Started
        </button>
      </div>
    </section>
  )
}



