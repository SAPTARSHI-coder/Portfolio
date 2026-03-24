/*
================================================================================
SCRIPT.JS - PORTFOLIO LOGIC
================================================================================
This file contains the Javascript used across the portfolio. 
Currently, it handles Tailwind configuration to ensure class names work correctly
when the page loads in the browser. 

Feel free to add your own functionality (e.g., scroll listeners, interactions) here!
*/

// Wait until the HTML document is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {

    /*
    ----------------------------------------------------------------------------
    CIRCULAR ORBIT ANIMATION
    ----------------------------------------------------------------------------
    JS injects nodes around to form concentric orbits around the user's profile picture.
    */
    const allIcons = [
        "c.png", "cpp.png", "c-sharp.png", "python.png", "java.png", "js.png", 
        "typescript.png", "go.png", "rust.png", "ruby.png", "php.png", "r-project.png", 
        "dart.png", "kotlin.png", "html.png", "css.png", "bootstrap.png", "Tailwind_CSS.png", 
        "react.png", "vuejs.png", "angular.png", "nextjs.png", "nuxtjs.png", "vite.png", 
        "jQuery.png", "ejs.png", "node.png", "express.png", "django.png", "flask.png", 
        "spring-boot.png", ".net-framework.png", "mysql.png", "postgresql.png", "mongodb.png", 
        "supabase.png", "firebase.png", "flutter.png", "docker.png", "kubernetes.png", 
        "amazon-aws.png", "azure.png", "google-cloud.png", "cloudflare.png", "tensorflow.png", 
        "pytorch.png", "anaconda.png"
    ];

    function getGlowColor(imgName) {
        const n = imgName.toLowerCase();
        
        // Special enlarged & super-glowy icons
        // Special enlarged icons (Keep a bit stronger but still tight)
        if (n.includes('ejs') || n.includes('jquery') || n.includes('tailwind') || n.includes('nuxt') || n.includes('express')) {
            return 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.4))';
        }

        // Specific brand colors requested with tight neon halos
        if (n.includes('python')) {
            return 'drop-shadow(0 0 12px rgba(250, 204, 21, 0.5)) drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))'; // Blue-Yellow
        }
        if (n.includes('aws') || n.includes('amazon')) {
            return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(251, 146, 60, 0.35))'; // Soft Amber
        }

        if (n.includes('react') || n.includes('css') || n.includes('c.png') || n.includes('cpp') || n.includes('flutter') || n.includes('postgres') || n.includes('docker') || n.includes('kubernetes')) {
            return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))'; // Soft Cyan/Blue
        }
        if (n.includes('js') || n.includes('java.png') || n.includes('html') || n.includes('firebase') || n.includes('rust') || n.includes('go')) {
            return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(249, 115, 22, 0.35))'; // Warm Orange
        }
        if (n.includes('node') || n.includes('vue') || n.includes('mongodb') || n.includes('spring') || n.includes('django')) {
            return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(34, 197, 94, 0.35))'; // Green
        }
        if (n.includes('angular') || n.includes('ruby') || n.includes('r-project')) {
            return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(239, 68, 68, 0.35))'; // Red
        }
        return 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.35))';
    }

    const orbitContainer = document.getElementById('orbit-icons-container');
    if (orbitContainer) {
        orbitContainer.innerHTML = '';
        const orbitRadius = 220;

        // --- Technology Icons (270° arc orbit) ---
        const totalNodes = 12;
        const angularSpacing = 360 / totalNodes;
        let iconPoolIndex = 0;
        
        // Shuffle allIcons initially for variety
        let pool = [...allIcons].sort(() => Math.random() - 0.5);

        function getNextIcon() {
            const icon = pool[iconPoolIndex];
            iconPoolIndex = (iconPoolIndex + 1) % pool.length;
            return icon;
        }

        const nodes = [];
        
        for (let i = 0; i < totalNodes; i++) {
            const node = document.createElement('div');
            node.className = 'orbit-node-single';
            const img = document.createElement('img');
            const initialIcon = getNextIcon();
            img.src = `icons/${initialIcon}`;
            img.className = 'orbit-icon-img-single';
            img.style.filter = getGlowColor(initialIcon);
            const n = initialIcon.toLowerCase();
            img.style.transform = (n === 'ejs.png' || n === 'jquery.png' || n === 'tailwind_css.png' || n === 'nuxtjs.png' || n === 'express.png')
                ? 'scale(1.8)' : 'scale(1)';
            node._angleOffset = angularSpacing * i;
            node._img = img;
            node._isSwapped = false;
            node.appendChild(img);
            orbitContainer.appendChild(node);
            nodes.push(node);
        }

        // ---- GALAXY LAYERS: glows set ONCE, only transform updated in RAF ----

        // Layer A: Inner cosmic dust particles
        const dustNodes = [];
        const dustPalette  = ['56, 189, 248', '139, 92, 246', '255, 255, 255', '249, 115, 22'];
        for (let i = 0; i < 34; i++) {
            const d   = document.createElement('div');
            const col = dustPalette[Math.floor(Math.random() * dustPalette.length)];
            const sz  = (1.5 + Math.random() * 3).toFixed(1);
            d.style.cssText = `position:absolute;top:50%;left:50%;width:${sz}px;height:${sz}px;
                border-radius:50%;pointer-events:none;z-index:3;
                background:rgba(${col},${(0.6 + Math.random()*0.4).toFixed(2)});
                box-shadow:0 0 ${Math.round(4+Math.random()*8)}px 2px rgba(${col},0.85);`;
            d._angle  = Math.random() * 360;
            d._radius = 128 + Math.random() * 58;
            d._speed  = (0.022 + Math.random() * 0.028) * (Math.random() > 0.5 ? 1 : -1);
            orbitContainer.appendChild(d);
            dustNodes.push(d);
        }

        // Layer B: Outer energy trail streaks
        const trailNodes = [];
        const trailPalette = ['56, 189, 248', '249, 115, 22', '139, 92, 246'];
        for (let i = 0; i < 18; i++) {
            const t   = document.createElement('div');
            const col = trailPalette[Math.floor(Math.random() * trailPalette.length)];
            const w   = Math.round(14 + Math.random() * 24);
            t.style.cssText = `position:absolute;top:50%;left:50%;width:${w}px;height:2px;
                border-radius:2px;pointer-events:none;z-index:2;
                background:linear-gradient(90deg,rgba(${col},0),rgba(${col},0.9));
                box-shadow:0 0 8px 1px rgba(${col},0.55);`;
            t._angle  = Math.random() * 360;
            t._radius = 248 + Math.random() * 52;
            t._speed  = 0.005 + Math.random() * 0.007;
            orbitContainer.appendChild(t);
            trailNodes.push(t);
        }

        let globalAngle = 0;
        let lastTime = 0;

        function animateOrbit(time) {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;
            lastTime = time;
            const angleDelta = (12 / 1000) * deltaTime;
            globalAngle = (globalAngle + angleDelta) % 360;

            // A. Inner dust — only transform
            for (let i = 0; i < dustNodes.length; i++) {
                const d = dustNodes[i];
                d._angle = (d._angle + d._speed * deltaTime) % 360;
                const r = d._angle * Math.PI / 180;
                d.style.transform = `translate(calc(-50% + ${d._radius*Math.cos(r)}px), calc(-50% + ${d._radius*Math.sin(r)}px))`;
            }

            // B. Outer trails — only transform
            for (let i = 0; i < trailNodes.length; i++) {
                const t = trailNodes[i];
                t._angle = (t._angle + t._speed * deltaTime) % 360;
                const r = t._angle * Math.PI / 180;
                const x = t._radius * Math.cos(r);
                const y = t._radius * Math.sin(r);
                t.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${t._angle + 90}deg)`;
            }

            // C. Icons — 270° visible arc
            // 1. Animate Icons tracking a Circular Path
            nodes.forEach(node => {
                const currentAngle = (node._angleOffset + globalAngle) % 360;
                const theta = (currentAngle + 225) % 360;
                let opacity = 0, scale = 0.5;
                if (theta >= 0 && theta <= 270) {
                    if (theta < 30)       { opacity = theta / 30; scale = 0.6 + 0.4 * opacity; }
                    else if (theta > 240) { opacity = (270 - theta) / 30; scale = 0.6 + 0.4 * opacity; }
                    else                  { opacity = 1; scale = 1; }
                }
                const rad = currentAngle * Math.PI / 180;
                node.style.transform = `translate(${orbitRadius * Math.cos(rad)}px, ${orbitRadius * Math.sin(rad)}px) scale(${scale})`;
                node.style.opacity = opacity;
                // Swap icon while hidden — filter set ONCE, not every frame
                if (theta > 270 && theta < 360) {
                    if (!node._isSwapped) {
                        const newIcon = getNextIcon();
                        node._img.src = `icons/${newIcon}`;
                        node._img.style.filter = getGlowColor(newIcon);
                        const n2 = newIcon.toLowerCase();
                        node._img.style.transform = (n2 === 'ejs.png' || n2 === 'jquery.png' || n2 === 'tailwind_css.png' || n2 === 'nuxtjs.png' || n2 === 'express.png')
                            ? 'scale(1.8)' : 'scale(1)';
                        node._isSwapped = true;
                    }
                } else {
                    node._isSwapped = false;
                }
            });
            requestAnimationFrame(animateOrbit);
        }
        
        // Start animation loop
        requestAnimationFrame(animateOrbit);
    }

    /*
    ----------------------------------------------------------------------------
    EXAMPLE EVENT LISTENER
    ----------------------------------------------------------------------------
    You can use this block to detect when the user scrolls the page.
    Uncomment the code inside to see it work.
    */
    window.addEventListener('scroll', () => {
        // let currentScrollPosition = window.scrollY;
        // console.log("User has scrolled to: " + currentScrollPosition + "px");
        
        // Example: If user scrolls past 100px, do something
        // if(currentScrollPosition > 100) {
        //     // document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0.9)';
        // }
    });
    
    /*
    ----------------------------------------------------------------------------
    TYPING ANIMATION LOGIC
    ----------------------------------------------------------------------------
    */
    const typingSpan = document.getElementById('typing-text');
    
    if (typingSpan) {
        const phrases = [
            "Building scalable web systems",
            "Researching machine learning models",
            "Crafting full-stack applications",
            "Solving complex algorithmic problems",
            "Designing efficient data structures",
            "Developing intelligent software solutions",
            "Engineering robust backend architectures"
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                // Remove a character
                typingSpan.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Faster when deleting
            } else {
                // Add a character
                typingSpan.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100; // Normal typing speed
            }
            
            // If word is completely typed out
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at the end of the phrase before deleting
            } 
            // If word is completely deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase, loop back to 0
                typingSpeed = 500; // Pause before starting to type the next phrase
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start the animation
        setTimeout(typeEffect, 1000);
    }

    /*
    ----------------------------------------------------------------------------
    MARQUEE INFINITE LOOP FIX & ICON EFFECTS
    ----------------------------------------------------------------------------
    Clones items only until the track is just wider than the viewport + one
    extra set. Keeps the track tight — no extreme over-extension.
    */
    document.querySelectorAll('.marquee-inner').forEach(track => {
        const originalItems = Array.from(track.children);
        const originalCount = originalItems.length;

        // Apply glows and scales to original items based on their image src
        originalItems.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
                const src = img.getAttribute('src');
                if (src) {
                    const imgName = src.split('/').pop();
                    img.style.filter = getGlowColor(imgName);
                    const n = imgName.toLowerCase();
                    if (n === 'ejs.png' || n === 'jquery.png' || n === 'tailwind_css.png' || n === 'nuxtjs.png' || n === 'express.png') {
                        img.style.transform = 'scale(3.8)';
                    }
                }
            }
        });

        // Clone just enough to comfortably overflow the viewport (viewport + 1 set buffer)
        // Minimum 2 full sets so the snap is always invisible
        let sets = 1;
        while (track.scrollWidth < window.innerWidth + track.scrollWidth) {
            originalItems.forEach(item => {
                track.appendChild(item.cloneNode(true));
            });
            sets++;
            // Safety cap: never clone more than 4 sets total
            if (sets >= 4) break;
        }

        // Calculate exact translate amount = one original set / total width
        const totalWidth = track.scrollWidth;
        const oneSetWidth = totalWidth / Math.round(track.children.length / originalCount);
        const pct = (oneSetWidth / totalWidth * 100).toFixed(4);
        track.style.setProperty('--scroll-amount', `-${pct}%`);
    });

    /*
    ----------------------------------------------------------------------------
    FADE UP OBSERVER FOR ABOUT SECTION
    ----------------------------------------------------------------------------
    */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

    /*
    ----------------------------------------------------------------------------
    SKILLS MATRIX AUTO-GENERATION AND PROGRESS ANIMATION
    ----------------------------------------------------------------------------
    */
    const skillLevelConfig = {
        'Advanced': { color: 'bg-cyan-500', width: '100%', opacityClass: 'skill-advanced' },
        'Intermediate': { color: 'bg-violet-500', width: '65%', opacityClass: 'skill-intermediate' },
        'Beginner': { color: 'bg-slate-700', width: '35%', opacityClass: 'skill-beginner' }
    };
    
    // 1. Generate HTML inside each row based on attributes so user can easily edit level
    document.querySelectorAll('.skill-row').forEach(row => {
        const name = row.getAttribute('data-name');
        let level = row.getAttribute('data-level');
        
        // Map any old 'Familiar' levels to 'Beginner'
        if (level === 'Familiar') level = 'Beginner';

        const config = skillLevelConfig[level] || skillLevelConfig['Beginner'];
        
        row.innerHTML = `
            <div class="flex justify-between items-end mb-1.5 ${config.opacityClass}">
                <span class="text-slate-200 text-[13px] font-semibold">${name}</span>
                <span class="text-slate-500 text-[11px]">${level}</span>
            </div>
            <div class="w-full bg-slate-800/60 h-1.5 rounded-full overflow-hidden ${config.opacityClass}">
                <div class="${config.color} h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%;" data-target-width="${config.width}"></div>
            </div>
        `;
    });

    // 2. Animate progress bars on scroll
    const skillBarObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('[data-target-width]');
                if (bar) {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-target-width');
                    }, 400); // Trigger after the container fades up
                }
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.skill-row').forEach(el => skillBarObserver.observe(el));

    /*
    ----------------------------------------------------------------------------
    3D WORKSTATION PARALLAX & SCROLL FIX
    ----------------------------------------------------------------------------
    */
    const pcContainer = document.getElementById('pc-container');
    const modelViewer = document.querySelector('model-viewer');

    if (pcContainer && modelViewer) {
        const workstation = pcContainer.parentElement;

        // Fix scroll hijacking: 
        // Start with zoom disabled so mouse wheels scroll the page instead of the model.
        modelViewer.disableZoom = true;

        // Enable zoom when the user clicks/taps to interact.
        modelViewer.addEventListener('pointerdown', () => {
            modelViewer.disableZoom = false;
        });

        // Re-disable zoom when the cursor leaves the model area.
        modelViewer.addEventListener('pointerleave', () => {
            modelViewer.disableZoom = true;
        });

        if (workstation) {
            workstation.addEventListener('mousemove', (e) => {
                const rect = workstation.getBoundingClientRect();
                // Calculate mouse position relative to center of the section (-1 to 1)
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Tilt limits (degrees)
                const maxTiltX = 10;
                const maxTiltY = 10;

                // Apply transform to the model-viewer directly, keeping CSS float on container
                modelViewer.style.transform = `scale(1.7) perspective(1000px) rotateY(${x * maxTiltX}deg) rotateX(${-y * maxTiltY}deg)`;
            });

            // Reset transform on mouse leave
            workstation.addEventListener('mouseleave', () => {
                modelViewer.style.transform = `scale(1.7) perspective(1000px) rotateY(0deg) rotateX(0deg)`;
            });
        }
    }

    /* Contact "Copy Email" Micro-interaction */
    const copyBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('contact-email');
    const copyText = document.getElementById('copy-text');
    const copyIconSvg = document.getElementById('copy-icon-svg');
    const toast = document.getElementById('copy-toast');
    
    if (copyBtn && emailText && copyText && copyIconSvg) {
        copyBtn.addEventListener('click', async () => {
            try {
                // Copy email to clipboard
                await navigator.clipboard.writeText(emailText.innerText);
                
                // Show inline "Copied!" text and change icon
                copyText.classList.remove('hidden');
                copyIconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;
                
                // Optional: keep toast if it exists for extra feedback
                if(toast) toast.classList.replace('opacity-0', 'opacity-100');
                
                // Revert state back after 1.5 seconds per requirements
                setTimeout(() => {
                    copyText.classList.add('hidden');
                    copyIconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`;
                    
                    if(toast) toast.classList.replace('opacity-100', 'opacity-0');
                }, 1500);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }

});
