"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Check, Copy } from "lucide-react";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const CodeBlock = ({ code, language, title }: { code: string, language: string, title?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d] font-mono text-sm shadow-2xl">
      {/* Mac-style Window Controls & Title */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          {title && <span className="ml-3 text-xs text-white/40">{title}</span>}
        </div>
        <button 
          onClick={handleCopy}
          className="text-white/40 hover:text-white transition-colors p-1"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-5 overflow-x-auto text-white/80 leading-relaxed">
        <pre><code className={`language-${language}`}>{code}</code></pre>
      </div>
    </div>
  );
};

export default function ArticlePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toc = [
    { id: "intro", title: "1. Why AI Agents are changing software forever" },
    { id: "architecture", title: "2. Single Agent vs Multi-Agent Architecture" },
    { id: "mcp", title: "3. Why MCP became the new standard" },
    { id: "memory", title: "4. Memory systems" },
    { id: "planning", title: "5. Planning and reasoning" },
    { id: "tools", title: "6. Tool calling" },
    { id: "deployment", title: "7. Production deployment & Observability" },
    { id: "lessons", title: "8. Lessons learned" },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white pb-0">
      <Navbar />
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <article className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-[70%]">
            
            {/* Breadcrumbs & Meta */}
            <div className="mb-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-md">
                  AI Engineering
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Clock className="w-4 h-4" /> 12 min read
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Calendar className="w-4 h-4" /> July 12, 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-machina tracking-tight mb-8 leading-[1.1]">
                Building Production-Ready AI Agents: Architecture, Challenges, and Lessons from Real Projects
              </h1>
              
              <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20 flex-shrink-0 relative">
                  <Image src="/veeresh-enfield.jpg" alt="Veeresh Hindiholi" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Veeresh Hindiholi</p>
                  <p className="text-sm text-white/50">Founder & Lead Engineer</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image 
                src="/blog/ai_agents_hero.png" 
                alt="AI Agents Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Body - Hand-coded Prose Styles */}
            <div className="text-[17px] leading-[1.8] text-white/80 font-manrope space-y-8">
              
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12">
                Over the past year, the industry has shifted from building simple wrappers around LLM APIs to deploying autonomous, tool-wielding agents. However, getting an agent to work in a Jupyter notebook is easy; getting it to reliably execute complex workflows in production without hallucinating or getting stuck in infinite loops is a completely different ballgame.
              </p>

              <h2 id="intro" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                1. Why AI Agents are changing software forever
              </h2>
              <p>
                Traditional software engineering forces users to map their intent to a rigid graphical user interface. You want to extract data from a PDF, summarize it, and save it to a database? You have to click a dozen buttons, wait for loaders, and manually bridge the gap between distinct systems.
              </p>
              <p>
                AI Agents invert this paradigm. Instead of providing the user with a UI, we provide the <em>agent</em> with tools (APIs, databases, file systems), and let the LLM&apos;s reasoning engine plan the sequence of actions required to satisfy the user&apos;s raw intent.
              </p>

              <h2 id="architecture" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                2. Single Agent vs Multi-Agent Architecture
              </h2>
              <p>
                When we first started building autonomous systems, we used a single powerful agent (like GPT-4) armed with 20 different tools. This architecture quickly broke down. The agent would get confused, hallucinate tool parameters, or forget the original objective after a long context window.
              </p>
              <p>
                The solution? <strong>Multi-Agent Systems (MAS)</strong>. By using frameworks like LangGraph, we can isolate responsibilities. A Router Agent classifies the intent, a Research Agent browses the web, and a Coder Agent writes the script. 
              </p>

              <CodeBlock 
                title="langgraph-architecture.mermaid"
                language="mermaid"
                code={`graph TD
    User((User Input)) --> Router{Router Agent}
    Router -->|Code Task| Coder[Coder Agent]
    Router -->|Research Task| Researcher[Researcher Agent]
    Router -->|General| QA[QA Agent]
    
    Coder --> Evaluator{Evaluator Agent}
    Evaluator -->|Fails| Coder
    Evaluator -->|Passes| Executor[Environment Executor]
    
    Researcher --> Executor
    Executor --> FinalOutput((Final Response))`} 
              />

              <h2 id="mcp" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                3. Why MCP became the new standard
              </h2>
              <p>
                The Model Context Protocol (MCP) standardized how AI agents connect to external tools. Instead of writing custom API integrations and hardcoding tool schemas into the LLM system prompt, we now simply spin up an MCP server. The agent dynamically negotiates tool capabilities over a secure RPC connection.
              </p>
              
              <CodeBlock 
                title="mcp_server.ts"
                language="typescript"
                code={`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "database-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "query_db",
        description: "Executes a read-only SQL query against the production replica.",
        inputSchema: {
          type: "object",
          properties: {
            sql: { type: "string" }
          },
          required: ["sql"]
        }
      }
    ]
  };
});`} 
              />

              <h2 id="memory" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                4. Memory systems
              </h2>
              <p>
                Stateless LLM calls are cheap, but agents require state. We implement a hybrid memory architecture:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Short-term memory:</strong> The immediate context window (managed via LangGraph&apos;s state).</li>
                <li><strong>Long-term memory:</strong> A Vector Database (like Pinecone) for semantic retrieval of past decisions.</li>
                <li><strong>Episodic memory:</strong> A relational database storing exact transcripts for auditability.</li>
              </ul>

              <h2 id="planning" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                5. Planning and reasoning
              </h2>
              <p>
                We rely heavily on ReAct (Reasoning and Acting) prompting paradigms. However, for complex tasks, we found that forcing the agent to output a <code>&lt;thought&gt;</code> block before outputting a <code>&lt;tool_call&gt;</code> reduces hallucination by 40%. The LLM essentially uses the output tokens as a scratchpad to align its reasoning.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-10">
                <h4 className="text-primary font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Production Tip
                </h4>
                <p className="text-white/80">
                  Never expose destructive tools (e.g., DROP TABLE, DELETE /users) to an agent without a human-in-the-loop validation step. In LangGraph, you can pause execution and wait for an external API webhook to approve the state transition.
                </p>
              </div>

              <h2 id="tools" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                6. Tool calling
              </h2>
              <p>
                The biggest point of failure in Agentic workflows is malformed JSON during tool calling. Even state-of-the-art models occasionally output trailing commas or forget required parameters. Our middleware pipeline uses Zod to validate the JSON schema; if it fails, it catches the error and feeds it back to the LLM, saying:
              </p>
              
              <CodeBlock 
                language="json"
                code={`{
  "system": "Your previous tool call failed with the following error. Please fix your JSON and try again.",
  "error": "ZodError: Required parameter 'date_range' is missing."
}`} 
              />

              <h2 id="deployment" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                7. Production deployment & Observability
              </h2>
              <p>
                Deploying agents requires massive asynchronous scalability. We deploy our LangGraph agents inside Docker containers on Kubernetes, triggered via BullMQ or AWS SQS.
              </p>
              <p>
                For observability, traditional APM tools fall short. You need to trace the LLM&apos;s thought process. We use LangSmith and custom OpenTelemetry spans to trace the exact prompt, the tools called, the latency, and the token usage per node in the graph.
              </p>

              <h2 id="lessons" className="text-3xl font-bold font-machina text-white mt-16 mb-6">
                8. Lessons learned
              </h2>
              <ol className="list-decimal pl-6 space-y-4 mb-6">
                <li><strong>Narrow scopes win.</strong> An agent designed to only format resumes will beat an &quot;all-purpose assistant&quot; 10 times out of 10.</li>
                <li><strong>Latency kills UX.</strong> Stream the thought process (or an artificial loader) to the user. Blank screens during a 30-second multi-step reasoning chain will cause users to refresh.</li>
                <li><strong>Fallbacks are mandatory.</strong> If the LLM goes down or hits a rate limit, the system should gracefully degrade.</li>
              </ol>

              <p className="mt-12 text-white/60 italic">
                Building AI systems is a constantly moving target. The architecture we use today will likely be obsolete in a year, but the fundamental engineering principles of decoupling, observability, and robust error handling will remain exactly the same.
              </p>
            </div>

            {/* Social Share Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex gap-2">
                {["Next.js", "AI", "System Design", "LangGraph"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-white/40">Share</span>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:border-transparent transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-transparent transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
          
          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-[30%] hidden lg:block">
            <div className="sticky top-32">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Table of Contents</h4>
              <nav className="flex flex-col gap-3 border-l border-white/10 pl-4">
                {toc.map((item, index) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className={`text-sm transition-colors hover:text-primary ${index === 0 ? 'text-primary' : 'text-white/50'}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              
              {/* Promo Widget */}
              <div className="mt-16 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[40px] rounded-full" />
                <h5 className="font-bold font-machina text-xl mb-2 relative z-10">Need AI Agents?</h5>
                <p className="text-xs text-white/60 mb-6 relative z-10 leading-relaxed">
                  We design and deploy production-ready multi-agent systems for enterprises. Let&apos;s discuss your architecture.
                </p>
                <Link href="#" className="inline-flex items-center justify-center w-full bg-white text-black font-bold text-sm py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </aside>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
