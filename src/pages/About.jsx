import ContentSection from '../components/ContentSection'

export default function About() {
  return (
    <ContentSection title="About CarbonCalci">
      <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          padding: '2rem',
          color: '#fff',
          marginTop: '1rem',
          boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.5)', // dark overlay for readability
        }}
      >
        <p>
          Imagine if every bite you took told a story-not just about taste, but about its impact on the planet. That’s exactly what <strong>CarbonCalci</strong> is here to do. We help you uncover the hidden carbon footprint behind your favorite foods-from juicy steaks and fresh fish to creamy cheese and more.
        </p>
        <p>
          Our mission is simple: give you the knowledge to make smarter, more climate-friendly choices. Because what we eat today shapes the world we’ll live in tomorrow. Small changes on your plate can create big waves for the planet.
        </p>
        <ul>
          <li>Founded in 2024 with a passion for protecting our planet</li>
          <li>Provides easy-to-understand carbon footprint info for a wide range of foods</li>
          <li>Encourages mindful eating habits that help reduce environmental impact</li>
          <li>A growing community of people committed to making a difference</li>
        </ul>
        <p>
          At CarbonCalci, every meal is a chance to be a climate hero-one delicious choice at a time. Ready to join us? Let’s calculate, reflect, and change the way we eat for a greener, brighter future.
        </p>
      </div>
    </ContentSection>
  )
}


