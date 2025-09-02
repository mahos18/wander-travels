import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'p',
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(() => {
    if (!ref.current || !text || !fontsLoaded) return;
    const el = ref.current;

    // cleanup old instance
    if (el._rbsplitInstance) {
      try {
        el._rbsplitInstance.revert();
      } catch (_) {}
      el._rbsplitInstance = null;
    }

    // split the text
    const splitInstance = new GSAPSplitText(el, {
      type: splitType,
      charsClass: 'split-char',
      wordsClass: 'split-word',
      linesClass: 'split-line',
    });
    el._rbsplitInstance = splitInstance;

    const targets =
      splitType.includes('chars') && splitInstance.chars.length
        ? splitInstance.chars
        : splitType.includes('words') && splitInstance.words.length
        ? splitInstance.words
        : splitInstance.lines;

    // Initial state
    gsap.set(targets, { ...from });

    // Animate on hover
    const onEnter = () => {
      gsap.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
      });
    };

    const onLeave = () => {
      gsap.to(targets, {
        ...from,
        duration,
        ease,
        stagger: delay / 1000,
      });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      try {
        splitInstance.revert();
      } catch (_) {}
      el._rbsplitInstance = null;
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [text, delay, duration, ease, splitType, from, to, fontsLoaded]);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      style={{ textAlign, willChange: 'transform, opacity' }}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
