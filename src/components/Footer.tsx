"use client";

import { motion } from "framer-motion";
import React from "react";
import {
    ArrowRight,
    Mail,
    MapPin,
    Phone,
    ChevronRight,
    Globe
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };

    const linkHover = {
        rest: { x: 0, color: "var(--text-muted)" },
        hover: {
            x: 8,
            color: "var(--teal-light)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const socialHover = {
        rest: { scale: 1, background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" },
        hover: {
            scale: 1.1,
            background: "var(--teal)",
            borderColor: "var(--teal-light)",
            boxShadow: "0 0 20px var(--teal-glow-strong)",
            transition: { type: "spring", stiffness: 400, damping: 17 }
        }
    };

    return (
        <footer style={{
            backgroundColor: "#0b1224", // Matches hero section background
            color: "var(--off-white)",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'DM Sans', sans-serif"
        }}>
            {/* Background Tech Grid */}
            <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `
          linear-gradient(to right, rgba(59, 173, 176, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 173, 176, 0.05) 1px, transparent 1px)
        `,
                backgroundSize: "40px 40px",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                pointerEvents: "none",
                zIndex: 0
            }} />

            {/* Decorative Glow Orbs */}
            <div style={{
                position: "absolute",
                top: "-10%",
                left: "-5%",
                width: "500px",
                height: "500px",
                background: "var(--teal-light)",
                filter: "blur(180px)",
                opacity: 0.08,
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
            }} />
            <div style={{
                position: "absolute",
                bottom: "-10%",
                right: "-5%",
                width: "600px",
                height: "600px",
                background: "var(--teal)",
                filter: "blur(200px)",
                opacity: 0.05,
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
            }} />

            <div style={{
                maxWidth: "1300px",
                margin: "0 auto",
                padding: "6rem 2rem 2rem",
                position: "relative",
                zIndex: 1
            }}>

                {/* Pre-footer Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: "5rem",
                        paddingBottom: "4rem",
                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}
                >
                    <h2 style={{
                        fontFamily: "'Orbitron', sans-serif", // Utilizing the theme's heading font
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        background: "linear-gradient(135deg, #ffffff 0%, var(--teal-light) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        READY TO DEPLOY THE FUTURE?
                    </h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", marginBottom: "2rem" }}>
                        Join forces with OctaBitLogics. We architect intelligent systems and scalable infrastructures for tomorrow's industry leaders.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,173,176,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: "linear-gradient(90deg, var(--teal) 0%, var(--teal-light) 100%)",
                            color: "#0b1224",
                            padding: "1rem 2.5rem",
                            borderRadius: "50px",
                            fontFamily: "'Oxanium', monospace",
                            fontWeight: 700,
                            fontSize: "1rem",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}
                    >
                        Start a Project <ArrowRight size={18} />
                    </motion.button>
                </motion.div>

                {/* Main Footer Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "4rem",
                        marginBottom: "5rem"
                    }}
                >
                    {/* Brand Info */}
                    <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 0 15px var(--teal-glow-strong)"
                            }}>
                                <Globe size={24} color="#0b1224" strokeWidth={2.5} />
                            </div>
                            <h3 style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: "1.8rem",
                                fontWeight: 800,
                                color: "var(--white)",
                                letterSpacing: "1px",
                                margin: 0
                            }}>
                                <span style={{ color: "var(--teal)" }}>OctaBit</span>Logics
                            </h3>
                        </div>

                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            Engineering digital excellence through cutting-edge SaaS platforms, AI-driven automation, and secure cloud infrastructures. We don't just build software; we architect the future.
                        </p>

                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" }
                            ].map((Social, index) => (
                                <motion.a
                                    key={index}
                                    href={Social.href}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    variants={socialHover}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "12px",
                                        color: "var(--white)",
                                        textDecoration: "none",
                                        border: "1px solid"
                                    }}
                                >
                                    <Social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Column 1: Solutions */}
                    <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <h4 style={{
                            fontFamily: "'Oxanium', monospace",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "var(--white)",
                            letterSpacing: "1px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                            <div style={{ width: "8px", height: "8px", background: "var(--teal)", borderRadius: "50%" }} />
                            Solutions
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["AI Automation", "Cloud Architecture", "SaaS Development", "Enterprise Security", "Data Analytics"].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        fontSize: "0.95rem",
                                        cursor: "pointer",
                                        width: "fit-content"
                                    }}
                                >
                                    <motion.span variants={linkHover} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <ChevronRight size={14} style={{ opacity: 0.7 }} />
                                        {item}
                                    </motion.span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Column 2: Company */}
                    <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <h4 style={{
                            fontFamily: "'Oxanium', monospace",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "var(--white)",
                            letterSpacing: "1px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                            <div style={{ width: "8px", height: "8px", background: "var(--teal)", borderRadius: "50%" }} />
                            Company
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["About Us", "Case Studies", "Blog & News", "Careers", "Contact"].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={`#${item.toLowerCase().replace(/ /g, "").replace(/&/g, "")}`}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        fontSize: "0.95rem",
                                        cursor: "pointer",
                                        width: "fit-content"
                                    }}
                                >
                                    <motion.span variants={linkHover} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <ChevronRight size={14} style={{ opacity: 0.7 }} />
                                        {item}
                                    </motion.span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <h4 style={{
                            fontFamily: "'Oxanium', monospace",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "var(--white)",
                            letterSpacing: "1px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                            <div style={{ width: "8px", height: "8px", background: "var(--teal)", borderRadius: "50%" }} />
                            Contact Hub
                        </h4>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <MapPin size={20} color="var(--teal)" style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span>Global HQ<br />Silicon Valley, CA 94025</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <Mail size={20} color="var(--teal)" style={{ flexShrink: 0 }} />
                                <a href="mailto:hello@octabitlogics.com" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--white)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                                    hello@octabitlogics.com
                                </a>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <Phone size={20} color="var(--teal)" style={{ flexShrink: 0 }} />
                                <a href="tel:+18001234567" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--white)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                                    +1 (800) 123-4567
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Glass Input */}
                        <div style={{
                            marginTop: "1rem",
                            padding: "0.5rem",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "50px",
                            display: "flex",
                            position: "relative",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)"
                        }}>
                            <input
                                type="email"
                                placeholder="Subscribe to our newsletter"
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    padding: "0.5rem 1rem",
                                    width: "100%",
                                    fontSize: "0.9rem",
                                    fontFamily: "inherit"
                                }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: "var(--teal)",
                                    border: "none",
                                    borderRadius: "50px",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    color: "#0b1224",
                                    flexShrink: 0
                                }}
                            >
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    }}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem"
                    }}>
                        <p style={{
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.05em",
                        }}>
                            &copy; {currentYear} OctaBitLogics Inc. All Rights Reserved.
                        </p>
                        <div style={{
                            display: "flex",
                            gap: "2rem",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.4)"
                        }}>
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                                <a key={i} href="#" style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    transition: "color 0.2s"
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--white)"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

// SVG Icons for Brands
const Twitter = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Github = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

export default Footer;
