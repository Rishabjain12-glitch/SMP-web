export default function ContentSection({ title, children }) {
  return (
    <section className="content-section">
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  )
}

