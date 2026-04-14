"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";
import { ArrowLeft } from "lucide-react";
import { BLOGS } from "../../../components/Blogs";
import { useEffect, useState } from "react";

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const [blog, setBlog] = useState<typeof BLOGS[0] | null>(null);

    useEffect(() => {
        const foundBlog = BLOGS.find((b) => b.slug === slug);
        if (foundBlog) {
            setBlog(foundBlog);
        }
    }, [slug]);

    if (!blog) {
        return (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a1128", color: "white" }}>
                <p>Loading post...</p>
            </div>
        );
    }

    return (
        <>
            <Navbar activeSection="" />
            <main className="bp-page">
                <style>{`
          .bp-page { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; background: #ffffff; }

          .bp-hero { position: relative; padding: 12rem 2rem 7rem; color: #ffffff; }
          .bp-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 20%, rgba(59,173,176,0.1) 0%, transparent 55%); pointer-events: none; z-index: 0; }
          .bp-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }

          .bp-back { position: absolute; top: -4rem; left: 0; display: inline-flex; align-items: center; gap: 0.5rem; color: #a7fff9; font-family: 'Oxanium', monospace; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: 0.1em; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(167,255,249,0.3); backdrop-filter: blur(10px); }
          .bp-back:hover { color: #ffffff; border-color: #ffffff; transform: translateX(-4px); background: rgba(255,255,255,0.1); }

          .bp-badge { display: inline-flex; align-items: center; font-family: 'Oxanium', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #a7fff9; background: rgba(59,173,176,0.15); border: 1px solid rgba(167,255,249,0.3); padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem; backdrop-filter: blur(10px); }

          .bp-title { font-family: 'Oxanium', monospace; font-size: clamp(2.2rem, 4.5vw, 3.5rem); font-weight: 900; color: #ffffff; line-height: 1.15; margin-bottom: 2rem; }

          .bp-meta { display: flex; align-items: center; justify-content: center; gap: 1rem; font-family: 'Oxanium', monospace; font-size: 0.9rem; color: rgba(255,255,255,0.7); }
          .bp-meta-dot { width: 4px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 50%; }



          .bp-body { position: relative; background: #ffffff; padding: 6rem 2rem 8rem; color: #4e6070; }
          .bp-content { max-width: 760px; margin: 0 auto; font-size: 1.15rem; line-height: 1.9; }

          .bp-content h2 { font-family: 'Oxanium', monospace; font-size: 2rem; color: #1B2E5E; margin: 3rem 0 1.5rem; font-weight: 800; line-height: 1.2; }
          .bp-content h3 { font-family: 'Oxanium', monospace; font-size: 1.5rem; color: #3BADB0; margin: 2.5rem 0 1.2rem; font-weight: 700; }
          .bp-content p { margin-bottom: 1.8rem; }
          .bp-content img { width: 100%; border-radius: 12px; margin: 2.5rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.05); }

          .bp-content blockquote { border-left: 4px solid #3BADB0; padding-left: 1.5rem; margin: 2.5rem 0; font-size: 1.3rem; font-style: italic; color: #1B2E5E; font-weight: 600; line-height: 1.6; }

          .bp-content pre { background: #0f1c3f; color: #a7fff9; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.95rem; margin: 2rem 0; border: 1px solid rgba(59,173,176,0.3); }

          .bp-cta { position: relative; background: linear-gradient(135deg, #3BADB0 0%, #1f4080 45%, #1B2E5E 100%); padding: 5rem 2rem; text-align: center; overflow: hidden; margin-top: 4rem; }
          .bp-cta::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; }
          .bp-cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
          .bp-cta h2 { font-family: 'Oxanium', monospace; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; color: #ffffff; margin-bottom: 1rem; }
          .bp-cta p { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; line-height: 1.7; }
          .bp-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Oxanium', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #1B2E5E; background: #ffffff; border: none; padding: 14px 28px; border-radius: 100px; text-decoration: none; cursor: pointer; transition: background 0.25s, transform 0.2s, box-shadow 0.2s; }
          .bp-cta-btn:hover { background: #e8f8f8; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }

          @media (max-width: 768px) {
            .bp-hero { padding: 9rem 1.5rem 5rem; }
            .bp-back { top: -3rem; }
            .bp-body { padding: 4rem 1.5rem 4rem; }
          }
        `}</style>

                <header
                    className="bp-hero"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(8, 13, 30, 0.7), rgba(8, 13, 30, 0.95)), url(${blog.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="bp-hero-inner">
                        <SectionLink section="blogs" className="bp-back"><ArrowLeft size={16} /> Back to Blog</SectionLink>
                        <div className="bp-badge">{blog.category}</div>
                        <h1 className="bp-title">{blog.title}</h1>
                        <div className="bp-meta">
                            <span>{blog.date}</span>
                            <span className="bp-meta-dot" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </header>


                <section className="bp-body">
                    <article className="bp-content">
                        <p><strong>{blog.excerpt}</strong></p>

                        <p>
                            In the fast-paced world of technology, staying ahead of architectural paradigms is crucial for maintaining competitive velocity. The concepts we implement today will become the standard foundation for systems built over the next decade.
                        </p>

                        <h2>The Shift in Paradigm</h2>
                        <p>
                            For the past few years, the industry has heavily relied on established patterns which, while robust, introduced significant overhead as applications scaled. Client-side bundles bloated, hydration times increased, and time-to-interactive suffered on low-end devices.
                        </p>

                        <blockquote>
                            "The cost of abstraction should not be paid by the end-user. The future of architecture shifts the computational burden back to where it belongs: the edge and the server."
                        </blockquote>

                        <p>
                            By moving compute back to the server while retaining the developer experience of modern component models, we can achieve the best of both worlds: zero bundle size for static components and highly interactive client logic only where absolutely necessary.
                        </p>

                        <h2>Implementation Strategy</h2>
                        <p>
                            When implementing this approach in production, it is important to strictly define component boundaries. A common anti-pattern is leaking server state into client bundles unnecessarily.
                        </p>

                        <pre><code>{`// A clean boundary example
export default async function DataView() {
  const data = await db.query('SELECT * FROM insights');
  
  return (
    <div className="grid">
      {data.map(item => (
        <InteractiveWidget key={item.id} initialData={item} />
      ))}
    </div>
  );
}`}</code></pre>

                        <p>
                            By clearly delineating the boundary, the client is only responsible for parsing the specific JavaScript required for the <code>&lt;InteractiveWidget&gt;</code>, while the heavy data fetching and structural rendering is resolved before bytes even hit the wire.
                        </p>

                        <h3>Key Takeaways</h3>
                        <p>
                            The transition isn't just a framework upgrade; it's an architectural paradigm shift. It requires teams to rethink data flow, caching strategies, and where state truly lives. However, the performance benefits—especially for users on constrained networks—make the transition incredibly worthwhile.
                        </p>
                    </article>
                </section>

                <section className="bp-cta">
                    <div className="bp-cta-inner">
                        <h2>Need expert engineering for your next project?</h2>
                        <p>Our team builds high-performance, scalable platforms using the exact strategies outlined in our research.</p>
                        <SectionLink section="contact" className="bp-cta-btn">Start a Conversation →</SectionLink>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
