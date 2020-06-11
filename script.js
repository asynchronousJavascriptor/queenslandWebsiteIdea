gsap.from('#nav h3', {duration: 1, ease: 'expo.inOut', x: 40, opacity: 0});

gsap.from('#links a', {stagger: .2, duration: 1, ease: 'expo.inOut', x: 40, opacity: 0});

gsap.from('#rightopts .ranim', {delay: 1, stagger: .2, duration: 1, ease: 'expo.inOut', x: 30, opacity: 0});

gsap.from('#right', {duration: 2.5, ease: 'expo.inOut', x: '100%', opacity: 0});

// gsap.from('#heading', {duration: 2.5, ease: 'expo.inOut', y: '35%', opacity: 0});

gsap.from('#heading .manim', {stagger: .3, duration: 2, ease: 'expo.inOut', y: '55%', opacity: 0});

gsap.from('#heading #line', {delay: 1.5,duration: 1.5, ease: 'expo.inOut', width: '0%'});

gsap.from('#credits img', {delay : 1, stagger: .3, duration: 1, ease: 'expo.inOut', y: '70%', opacity: 0});

gsap.to('#right img', {delay: 1, duration: 1.5, ease: 'expo.inOut', scale: 1})