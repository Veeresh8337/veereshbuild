"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogIndex() {
  const featuredArticle = {
    title: "Building Production-Ready AI Agents: Architecture, Challenges, and Lessons from Real Projects",
    description: "An in-depth guide on deploying multi-agent systems, navigating the complexities of MCP, handling memory, and optimizing reasoning pipelines for enterprise-grade applications.",
    category: "AI Engineering",
    readTime: "12 min read",
    date: "July 12, 2026",
    image: "/blog/ai_agents_hero.png",
    href: "/blog/ai-agents-architecture"
  };

  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Vector Databases in 2026",
      description: "Comparing Pinecone, Qdrant, and Milvus for scaling RAG applications.",
      category: "Data Engineering",
      readTime: "8 min read",
      date: "June 28, 2026",
      image: "/blog/thumbnail_rag.png",
      href: "#"
    },
    {
      id: 2,
      title: "Kubernetes for Serverless Microservices",
      description: "How we orchestrated 1,000+ microservices dynamically with minimal overhead.",
      category: "Cloud Infrastructure",
      readTime: "10 min read",
      date: "June 15, 2026",
      image: "/blog/thumbnail_kubernetes.png",
      href: "#"
    },
    {
      id: 3,
      title: "React Server Components Deep Dive",
      description: "Mastering the boundary between client and server in Next.js 16.",
      category: "Frontend",
      readTime: "6 min read",
      date: "May 30, 2026",
      image: "/how-we-build/web_app.png", // reusing an image
      href: "#"
    }
  ];

  const trendingTopics = [
    "AI Engineering", "MCP", "LangGraph", "Multi-Agent Systems", 
    "Cloud", "Next.js", "Node.js", "React", "LLMs", 
    "Vector Databases", "RAG", "Docker", "Kubernetes", "AWS"
  ];

  return (
    <main className="min-h-screen bg-black text-white font-manrope selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black font-machina tracking-tighter mb-6"
            >
              Engineering <br /> <span className="text-primary">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              Thoughts on AI, scalable systems, cloud infrastructure, product engineering, and startup technology.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-max"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase">15+ Technical Articles</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <Link href={featuredArticle.href} className="group flex flex-col lg:flex-row bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500">
            {/* Image Container */}
            <div className="lg:w-3/5 h-[300px] lg:h-[500px] relative overflow-hidden">
              <Image 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
            </div>
            
            {/* Content Container */}
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-md">
                  {featuredArticle.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-sm hidden sm:flex">
                  <Calendar className="w-4 h-4" /> {featuredArticle.date}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-extrabold font-machina tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                {featuredArticle.title}
              </h2>
              
              <p className="text-white/60 mb-8 leading-relaxed line-clamp-3">
                {featuredArticle.description}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-white font-semibold">
                Read Full Article <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Main Grid & Sidebar */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Latest Articles Grid */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold font-machina mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span> Latest Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={article.href} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,107,44,0.1)]">
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={article.image} 
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-white/50">
                        <span className="text-primary uppercase tracking-wider">{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="text-xl font-bold font-machina mb-3 group-hover:text-white transition-colors text-white/90">
                        {article.title}
                      </h4>
                      <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
                        {article.description}
                      </p>
                      <div className="mt-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 flex flex-col gap-12">
              
              {/* Trending Topics */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                <h4 className="text-lg font-bold font-machina mb-6">Trending Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Link 
                      key={topic} 
                      href="#" 
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/20 to-black border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-[60px] rounded-full" />
                <h4 className="text-2xl font-bold font-machina mb-2 relative z-10">Stay Updated</h4>
                <p className="text-white/60 text-sm mb-6 relative z-10">Join 2,000+ developers receiving our bi-weekly engineering insights.</p>
                <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-4 py-3 text-sm transition-colors flex items-center justify-center gap-2">
                    Subscribe <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </aside>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
