export default function HomePage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-6 custom-header">
        Welcome to My Portfolio
      </h2>
      <p className="text-center text-gray-700 max-w-xl mx-auto mb-8">
        Hi, I’m a web developer passionate about creating stunning, user-friendly websites. 
        Take a look at my work and get in touch!
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4">Creative Design</h3>
          <p className="text-gray-600">
            Crafting visually appealing and responsive layouts for modern web applications.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4">Clean Code</h3>
          <p className="text-gray-600">
            Writing maintainable, efficient, and scalable code for diverse projects.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
          <p className="text-gray-600">
            Implementing SEO strategies to improve website visibility and performance.
          </p>
        </div>
      </div>
    </div>
  );
}
