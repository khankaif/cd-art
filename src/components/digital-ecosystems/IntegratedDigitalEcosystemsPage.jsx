import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Link2,
    RefreshCw,
    Activity,
    Network,
    ShoppingBag,
    Sliders,
    Eye,
    Cpu,
    Boxes,
    Shield
} from 'lucide-react';

import DigitalHero from './DigitalHero';
import DigitalInfrastructure from './DigitalInfrastructure';
import DigitalFeatures from './DigitalFeatures';
import DigitalWorkflow from './DigitalWorkflow';
import DigitalDataVisual from './DigitalDataVisual';
import DigitalCraftsmanship from './DigitalCraftsmanship';
import DigitalAdvantages from './DigitalAdvantages';
import DigitalCTA from './DigitalCTA';
import DigitalContact from './DigitalContact';

gsap.registerPlugin(ScrollTrigger);

const IntegratedDigitalEcosystemsPage = () => {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const parallaxBgRef = useRef(null);
    const workflowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Hero Entrance Animation
            const heroTl = gsap.timeline();
            heroTl.fromTo(".de-hero-animate",
                { opacity: 0, y: 40, filter: "blur(12px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.2 }
            );

            // 2. Hero Background Parallax
            if (heroBgRef.current) {
                gsap.to(heroBgRef.current, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                    y: 100,
                    scale: 1.05
                });
            }

            // 3. Section Reveal Animations
            const revealSelectors = [
                ".de-infra-animate",
                ".de-feature-card",
                ".de-craft-animate",
                ".de-advantage-row",
                ".de-live-animate",
                ".de-cta-animate"
            ];

            revealSelectors.forEach((selector) => {
                gsap.utils.toArray(selector).forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 45, filter: "blur(8px)" },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 1.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });

            // 4. Horizontal Workflow Line and Node Animations
            if (workflowRef.current) {
                gsap.fromTo(".de-workflow-line",
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        transformOrigin: "left center",
                        duration: 2.0,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: workflowRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                gsap.fromTo(".de-workflow-node",
                    { opacity: 0, scale: 0.7, y: 20 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: workflowRef.current,
                            start: "top 70%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }

            // 5. Scroll Zoom for Gallery/Visual elements
            gsap.utils.toArray(".de-scroll-zoom-img").forEach((img) => {
                gsap.fromTo(img,
                    { scale: 1.0 },
                    {
                        scale: 1.1,
                        scrollTrigger: {
                            trigger: img,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });

            // 6. Immersive Section Parallax
            if (parallaxBgRef.current) {
                gsap.to(parallaxBgRef.current, {
                    scrollTrigger: {
                        trigger: ".de-parallax-trigger",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    },
                    y: -120
                });
            }

        }, pageRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    // Scroll to section helper
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 10 Ecosystem Features data
    const features = [
        {
            icon: <Link2 className="w-5 h-5 text-luxury-gold" />,
            title: "API Integration",
            desc: "Direct endpoints for design upload and automated manufacturing routing, enabling programmatic order creation from your store design tools."
        },
        {
            icon: <RefreshCw className="w-5 h-5 text-luxury-gold" />,
            title: "Inventory Synchronization",
            desc: "Real-time stone-level and metal weight synchronization across your storefronts, central warehouses, and casting studios."
        },
        {
            icon: <Activity className="w-5 h-5 text-luxury-gold" />,
            title: "Production Pipeline Tracking",
            desc: "Microscopic status visibility of individual items, detailing steps from initial resin prints through settings and polishing."
        },
        {
            icon: <Network className="w-5 h-5 text-luxury-gold" />,
            title: "ERP Connectivity",
            desc: "Flawless bidirectional sync with enterprise resource platforms including NetSuite and SAP to automate accounting and inventory."
        },
        {
            icon: <ShoppingBag className="w-5 h-5 text-luxury-gold" />,
            title: "E-Commerce Integration",
            desc: "Turnkey connections for Shopify Plus and custom storefronts, instantly pushing custom configurations into active manufacturing lines."
        },
        {
            icon: <Sliders className="w-5 h-5 text-luxury-gold" />,
            title: "Client Dashboards",
            desc: "Custom-branded portal offering designers full control over digital asset storage, CAD approvals, and live shipment tracking."
        },
        {
            icon: <Eye className="w-5 h-5 text-luxury-gold" />,
            title: "Real-Time Status",
            desc: "Visual status checks showing high-resolution inspection photos as each piece transitions through the factory floor."
        },
        {
            icon: <Cpu className="w-5 h-5 text-luxury-gold" />,
            title: "Order Automation",
            desc: "Intelligent logic checks parsing metal specifications, gem details, and size configurations to instantly format CAD files."
        },
        {
            icon: <Boxes className="w-5 h-5 text-luxury-gold" />,
            title: "Multi-Warehouse Coordination",
            desc: "Distribute gem casting and setting tasks across multiple regional workshops based on specialized artisan capacities."
        },
        {
            icon: <Shield className="w-5 h-5 text-luxury-gold" />,
            title: "Secure Cloud Infrastructure",
            desc: "Military-grade encryption securing proprietary digital files, CAD files, and client-sensitive pricing structures."
        }
    ];

    // Interconnected Workflow Stages
    const workflowStages = [
        {
            num: "01",
            title: "Client Order",
            label: "E-Commerce Sync",
            desc: "API triggers a live order, generating structural requirements and raw asset requests immediately."
        },
        {
            num: "02",
            title: "Digital System",
            label: "Automated Validation",
            desc: "Core server checks geometric tolerances, gem pocket specifications, and raw material availability."
        },
        {
            num: "03",
            title: "CAD Engineering",
            label: "Digital Blueprint",
            desc: "3D team checks adjustments, formatting the layout for precision multi-axis resin printing."
        },
        {
            num: "04",
            title: "Manufacturing",
            label: "Casting & Setting",
            desc: "Casters translate models to physical metals, setting artisans mount gems under microscope arrays."
        },
        {
            num: "05",
            title: "Quality Control",
            label: "Micron-Level Inspection",
            desc: "Pieces pass strict dimensional tolerance checks and macro photography, updating the client panel."
        },
        {
            num: "06",
            title: "Logistics",
            label: "Secure Fulfillment",
            desc: "Automated custom dispatch codes generate, forwarding high-security insured courier details."
        }
    ];

    // Technology Advantages
    const advantages = [
        {
            title: "Compressed Lead Times",
            desc: "Our automated validation systems eliminate back-and-forth communication. Order configurations pass directly to 3D printers, decreasing average manufacturing cycles by up to 45%."
        },
        {
            title: "Zero Manual Friction",
            desc: "Manual errors are the enemy of premium craftsmanship. By connecting store configurators to CAD pipelines, parameters translate perfectly with zero administrative steps."
        },
        {
            title: "Scalable Production",
            desc: "Maintain personal artisan standards at scale. The ecosystem dynamically balances work orders across specialized workshops to absorb high volume surges seamlessly."
        },
        {
            title: "Absolute Asset Security",
            desc: "CAD designs are your brand’s core intellectual property. Our platform secures each file in isolated cloud containers, only distributing files to machines when casting begins."
        },
        {
            title: "Streamlined Communication",
            desc: "Eliminate email threads. Track statuses, review macro high-res images of castings, and request modifications inside a unified dashboard."
        },
        {
            title: "Enterprise Grade Scalability",
            desc: "Built on resilient microservices, our infrastructure handles thousands of concurrent data streams, keeping your brand connected from design studio to shipping deck."
        }
    ];

    return (
        <div ref={pageRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            <DigitalHero heroRef={heroRef} heroBgRef={heroBgRef} scrollToSection={scrollToSection} />
            <DigitalInfrastructure />
            <DigitalFeatures features={features} />
            <DigitalWorkflow workflowRef={workflowRef} workflowStages={workflowStages} />
            <DigitalDataVisual />
            <DigitalCraftsmanship />
            <DigitalAdvantages advantages={advantages} />
            <DigitalCTA parallaxBgRef={parallaxBgRef} />
            <DigitalContact />
        </div>
    );
};

export default IntegratedDigitalEcosystemsPage;
