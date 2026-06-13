import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const blogPosts = [
    {
      title: 'Why I Love Building AI Safety Projects',
      excerpt: 'Working on edge-based computer vision systems like AquaSentinel drowning detection has taught me how technology can actively save lives. Combining intelligence with safety is the ultimate engineering challenge.',
      content: 'Working on edge-based computer vision systems like AquaSentinel drowning detection has taught me how technology can actively save lives. Combining intelligence with safety is the ultimate engineering challenge.\n\nIn this project, I worked on optimizing deep learning object detection models (YOLO) to run in real-time on edge devices. By minimizing latency and memory footprints, AquaSentinel was able to identify anomalies and potential drowning events with 94% accuracy, triggering immediate alerts.\n\nAI safety is not just about avoiding worst-case scenarios; it is about actively using technology to construct a safer physical world. Integrating computer vision, software engineering, and real-time alerts shown me that coding can be a direct instrument for saving lives.',
      image: './blog1.png',
      date: 'Nov 20, 2025',
      readTime: '5 min read',
    },
    {
      title: 'The Beauty of Simple Code',
      excerpt: 'Clean code isn’t just about fewer lines — it’s about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.',
      content: 'Clean code isn’t just about fewer lines — it’s about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.\n\nWhen developers first start out, they often write complex, nested logic to solve problems. However, the true mark of mastery is simplicity. By breaking large problems into small, focused, and pure functions, code becomes self-documenting and resilient to bugs.\n\nI strive to reduce cognitive load when writing my code. Using descriptive naming conventions, maintaining a clear separation of concerns, and writing comprehensive comments only where the "why" isn\'t obvious ensures my work remains maintainable for years to come.',
      image: './blog2.png',
      date: 'Nov 15, 2025',
      readTime: '7 min read',
    },
    {
      title: 'My Journey with IoT and Embedded Systems',
      excerpt: 'Building Swachh Netra showed me the power of sensor-based automation. Connecting the physical world to software opens up endless possibilities for urban and environmental optimization.',
      content: 'Building Swachh Netra showed me the power of sensor-based automation. Connecting the physical world to software opens up endless possibilities for urban and environmental optimization.\n\nSwachh Netra integrates ultrasonic sensors, NodeMCU microcontrollers, and Firebase to automate waste management dispatch. Instead of trucks visiting empty bins on fixed schedules, the system computes optimized routes dynamically based on real-time bin levels, reducing fuel consumption and city maintenance costs by over 50%.\n\nConnecting hardware to software bridges the digital divide and brings tangible improvements to the physical communities we live in. It\'s a field where coding meets physical reality.',
      image: './blog3.png',
      date: 'Nov 10, 2025',
      readTime: '6 min read',
    },
    {
      title: 'Scaling Real-Time App Ingestion',
      excerpt: 'From GPS heatmaps in Nexotrack to career path recommendations in CareerCompass AI, managing real-time data flow teaches the fundamentals of normalized tables and scalable cloud services.',
      content: 'From GPS heatmaps in Nexotrack to career path recommendations in CareerCompass AI, managing real-time data flow teaches the fundamentals of normalized tables and scalable cloud services.\n\nWhether rendering heatmaps based on live GPS coordinate updates in Nexotrack or serving personalized recommendations in CareerCompass AI, backend efficiency is key. Achieving this requires normal forms in database architecture, efficient index creation, and caching layers like Redis.\n\nHandling concurrent data ingestion from multiple clients taught me how to identify database bottlenecks, handle race conditions, and format APIs for scalability. It is an essential skill set for building production-grade services.',
      image: './blog4.png',
      date: 'Nov 5, 2025',
      readTime: '8 min read',
    },
  ];

  const [selectedPost, setSelectedPost] = useState<null | typeof blogPosts[0]>(null);

  return (
    <section id="blog" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12"
        >
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Thoughts</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-white/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="border rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto overflow-x-hidden p-6 md:p-8 relative shadow-2xl"
              style={{
                backgroundColor: 'var(--c-box)',
                color: 'var(--c-text)',
                borderColor: 'var(--c-border)'
              }}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--c-text)'
                }}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Meta info */}
              <div 
                className="flex items-center gap-4 text-sm mb-4"
                style={{ color: 'var(--c-text-secondary, var(--c-text))', opacity: 0.8 }}
              >
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--c-text)' }}
              >
                {selectedPost.title}
              </h3>

              {/* Content */}
              <p 
                className="leading-relaxed whitespace-pre-line text-base md:text-lg"
                style={{ color: 'var(--c-text-secondary, var(--c-text))', opacity: 0.95 }}
              >
                {selectedPost.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}