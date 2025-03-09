export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Krimai
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              We're on a mission to transform how people work with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Krimai was founded in 2023 by a team of AI researchers, engineers, and product designers who shared a common vision: to make advanced AI accessible and useful for everyday work.
              </p>
              <p>
                We recognized that while artificial intelligence was advancing rapidly, the tools available to most people weren't capturing the full potential of this technology. Many existing solutions were either too complex for non-technical users or too simplistic to be truly useful for professional work.
              </p>
              <p>
                Our team set out to build something different—an AI assistant that combined sophisticated capabilities with an intuitive interface, making powerful AI accessible to everyone regardless of their technical background.
              </p>
              <p>
                After months of research and development, we launched Krimai with a commitment to continuous improvement and a focus on solving real problems for our users. Today, we're proud to serve thousands of professionals across various industries, helping them enhance their productivity, creativity, and capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Values</h2>
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-4 text-center">Mission</h3>
              <p className="text-lg text-gray-300 text-center">
                To empower people and organizations with AI tools that enhance human capabilities, foster creativity, and transform how work gets done.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Human-Centered AI",
                  description: "We believe AI should enhance human capabilities, not replace them. Our products are designed to work with you, adapting to your needs and amplifying your strengths."
                },
                {
                  title: "Continuous Innovation",
                  description: "We're committed to pushing the boundaries of what's possible with AI, constantly improving our technology to deliver better results for our users."
                },
                {
                  title: "Accessibility",
                  description: "We believe powerful AI should be accessible to everyone. We design our products to be intuitive and easy to use, regardless of technical background."
                },
                {
                  title: "Ethical Development",
                  description: "We're committed to developing AI responsibly, with careful consideration of the ethical implications of our technology and a focus on positive impact."
                },
              ].map((value, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  title: "Co-Founder & CEO",
                  bio: "Former AI research lead with 15+ years experience in machine learning and product development."
                },
                {
                  name: "Michael Rodriguez",
                  title: "Co-Founder & CTO",
                  bio: "PhD in Computer Science with expertise in natural language processing and AI systems architecture."
                },
                {
                  name: "Alex Thompson",
                  title: "Chief Product Officer",
                  bio: "Experienced product leader who previously built AI products used by millions of users globally."
                },
                {
                  name: "Priya Sharma",
                  title: "VP of Engineering",
                  bio: "Engineering leader with extensive experience scaling AI systems and building reliable infrastructure."
                },
                {
                  name: "David Kim",
                  title: "VP of Design",
                  bio: "Award-winning designer focused on creating intuitive and accessible user experiences."
                },
                {
                  name: "Taylor Jackson",
                  title: "VP of Customer Success",
                  bio: "Passionate about helping customers get the most value from AI technology."
                },
              ].map((member, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.title}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented people who are passionate about AI and building products that make a difference.
            </p>
            <a href="/careers" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition inline-block">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
