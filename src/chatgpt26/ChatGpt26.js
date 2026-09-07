import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ChatGpt26.css';

const ASSET = (name) => `${process.env.PUBLIC_URL}/other-assets/chatgpt26/${name}`;

const SLIDES = [
  {
    id: 'neuromod',
    image: ASSET('CS124-60.jpg'),
    descriptionPlain:
      'Low-cost, discreet, non-invasive “above-the-ear” clip-on neuromodulation device for treating major depression and anxiety. As ubiquitous as AirPods. (Currently working as a student researcher on wearable fMRI at MIT Media Lab’s Fluid Interfaces group.)',
    description: (
      <>
        Low-cost, discreet, non-invasive “above-the-ear” clip-on neuromodulation device for treating major depression and
        anxiety. As ubiquitous as AirPods. (Currently working as a student researcher on wearable fMRI at &apos;s{' '}
        <a
          href="https://www.media.mit.edu/groups/fluid-interfaces/overview/"
          className="wwm-paper__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          MIT Media Lab's Fluid Interfaces
        </a>
        {' '}
        group.)
      </>
    ),
  },
  {
    id: 'gut',
    image: ASSET('CS124-59.jpg'),
    description:
      'A way to “talk” to and augment your gut health in real time—inspired by my mom, who has end-stage kidney disease. A system that continuously reads your body and can live-modulate gut chemistry through a conversational interface.',
  },
  {
    id: 'wearables',
    image: ASSET('CS124-61.jpg'),
    description:
      'Wearable bracelets and jewelry for continuous, unobtrusive monitoring and pre-crisis detection of mood disorders like bipolar disorder and panic attacks.',
  },
  {
    id: 'peers',
    image: ASSET('CS124-57.jpg'),
    descriptionPlain:
      "A structured peer-matching system that connects people through shared adversity and sociocultural context. (I'm currently building this with KnowMe.)",
    description: (
      <>
        A structured peer-matching system that connects people through shared adversity and sociocultural context.{' '}
        (I&apos;m currently building this with{' '}
        <a
          href="https://joinknowme.vercel.app"
          className="wwm-paper__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          KnowMe
        </a>.)
      </>
    ),
  },
  {
    id: 'nano',
    image: ASSET('CS124-56.jpg'),
    descriptionPlain:
      'Nanoparticles that let you “talk” to and influence your own brain, its health, and your mental health. A new kind of neurotechnology! (Shout out to Subsense, where my mentor Dr. David Eagleman serves as a scientific advisor.)',
    description: (
      <>
        Nanoparticles that let you “talk” to and influence your own brain, its health, and your mental health. A new kind of
        neurotechnology! (Shout out to{' '}
        <a
          href="https://subsense-bci.com/"
          className="wwm-paper__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Subsense
        </a>
        , where my mentor{' '}
        <a
          href="https://eagleman.com/"
          className="wwm-paper__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Dr. David Eagleman
        </a>{' '}
        serves as a scientific advisor.)
      </>
    ),
  },
  
  {
    id: 'services',
    image: ASSET('CS124-58.jpg'),
    descriptionPlain:
      "An automated, streamlined search engine for mental health services and resources—like Yelp, but for local, tailored mental health care. (I'm currently building this with SearchMentalHealth.)",
    description: (
      <>
        An automated, streamlined search engine for mental health services and resources—like Yelp, but for local,
        tailored mental health care. (I&apos;m currently building this with{' '}
        <a
          href="https://searchmentalhealth.com"
          className="wwm-paper__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          SearchMentalHealth
        </a>.)
      </>
    ),
  },
  {
    id: 'sleep',
    image: ASSET('CS124-54.jpg'),
    description:
      'Augmenting and treating sleep disorders through real-time measurement of neural activity and targeted intervention. I\'m envisioning high-techsleep masks, pillows, or even sound systems built into bedrooms.',
  },
  {
    id: 'neural-data',
    image: ASSET('CS124-55.jpg'),
    descriptionPlain:
      'Understanding and unlocking the mysteries of the brain—surfacing unexpected discoveries in high-dimensional neural and behavioral data through de novo pattern detection. (Possibly through continuing my research at Stanford’s Center for Interdisciplinary Brain Science Research.)',
    description: (
      <>
        Understanding and unlocking the mysteries of the brain—surfacing unexpected discoveries in high-dimensional neural
        and behavioral data through de novo pattern detection. (Possibly through continuing my research at{' '}
        <Link
          to="/mchri"
          className="wwm-paper__link"
          onClick={(e) => e.stopPropagation()}
        >
          Stanford&apos;s Center for Interdisciplinary Brain Science Research
        </Link>
        .)
      </>
    ),
  },
  
];

const HEADLINE = 'My Hopes for Technology';
const SUBHEADLINE = 'Eight sketches of what I want built';
const SUBMISSION_LINE = 'ChatGPT 26 Submission - Mira Pry';
const LEDE_PARTS = [
  'I want to build life-saving technology. Losing my dad to suicide, watching my mom live with end-stage kidney disease and dialysis, and seeing too many people I love run into systemic barriers to care made that goal personal. I want to use technology to make care more accessible and to catch people before crisis.',

  'With AI, I can imagine building tools that intervene across the whole chain: in the body, in behavior, in communities, and in systems. I have seen how my own low-income Hispanic family in Oakland can fall behind when new healthcare and health technology arrive unevenly. I want not only to help build these technologies but to help ensure they reach the communities that need them most.',
];

function ChatGpt26() {
  const [index, setIndex] = useState(0);
  const [peeling, setPeeling] = useState(false);
  const peelArmed = useRef(false);
  const touchStart = useRef(null);

  const total = SLIDES.length;
  const done = index >= total;
  const visible = SLIDES.slice(index);

  const advance = useCallback(() => {
    if (peeling || done) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIndex((i) => i + 1);
      return;
    }
    peelArmed.current = true;
    setPeeling(true);
  }, [peeling, done]);

  useEffect(() => {
    if (!peeling) return;
    const id = window.setTimeout(() => {
      if (!peelArmed.current) return;
      peelArmed.current = false;
      setPeeling(false);
      setIndex((i) => i + 1);
    }, 700);
    return () => window.clearTimeout(id);
  }, [peeling]);

  const goBack = useCallback(() => {
    if (peeling) return;
    setIndex((i) => Math.max(0, i - 1));
  }, [peeling]);

  const restart = useCallback(() => {
    peelArmed.current = false;
    setPeeling(false);
    setIndex(0);
  }, []);

  useEffect(() => {
    document.title = 'My Hopes for Technology — Mira Pry';
    return () => {
      document.title = 'Mira Pry';
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (!done) advance();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goBack();
      } else if (e.key === 'Home') {
        e.preventDefault();
        restart();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [advance, goBack, restart, done]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (dx < -48 && !done) advance();
    else if (dx > 48) goBack();
  };

  const onPaperTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    if (!peelArmed.current) return;
    peelArmed.current = false;
    setPeeling(false);
    setIndex((i) => i + 1);
  };

  return (
    <div className="App wwm-app">
      <div className="wwm-root">
        <main className="wwm-main">
          <div className="wwm-content">
            <div className="wwm-project">
              <h1 className="wwm-project__headline">{HEADLINE}</h1>
              <p className="wwm-project__subheadline">{SUBHEADLINE}</p>
              {LEDE_PARTS.map((p) => (
                <p key={p} className="wwm-project__lede">
                  {p}
                </p>
              ))}
              <p className="wwm-project__submission-line">{SUBMISSION_LINE}</p>
            </div>

            {!done ? (
              <div
                className="wwm-stack-wrap"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                role="presentation"
              >
                <div className="wwm-stack" aria-live="polite">
                {visible.map((slide, stackPos) => {
                  const isTop = stackPos === 0;
                  const depth = visible.length - stackPos;
                  const stackX = stackPos * 5;
                  const stackY = stackPos * 7;
                  const stackR = stackPos * -0.85;
                  const transform =
                    isTop && peeling
                      ? 'translate(42vw, -72vh) rotate(11deg) scale(0.97)'
                      : `translate(${stackX}px, ${stackY}px) rotate(${stackR}deg)`;
                  const opacity = isTop && peeling ? 0 : 1;
                  return (
                    <article
                      key={slide.id}
                      className={`wwm-paper ${isTop ? 'is-top' : ''} ${isTop && peeling ? 'is-peeling' : ''}`}
                      style={{
                        zIndex: depth,
                        transform,
                        opacity,
                      }}
                      onTransitionEnd={isTop ? onPaperTransitionEnd : undefined}
                      onClick={isTop && !peeling ? advance : undefined}
                      onKeyDown={
                        isTop
                          ? (ev) => {
                              if (ev.key === 'Enter' || ev.key === ' ') {
                                ev.preventDefault();
                                advance();
                              }
                            }
                          : undefined
                      }
                      tabIndex={isTop ? 0 : -1}
                      aria-label={
                        isTop
                          ? `Sheet ${index + 1} of ${total}. ${
                              slide.descriptionPlain ??
                              (typeof slide.description === 'string' ? slide.description : '')
                            }`
                          : undefined
                      }
                    >
                      <div className="wwm-paper__inner">
                        <div className="wwm-paper__img">
                          <img src={slide.image} alt="" loading={index + stackPos < 2 ? 'eager' : 'lazy'} />
                        </div>
                        <p className="wwm-paper__desc">{slide.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
                <p className="wwm-hint">Lift the top sheet</p>
              </div>
            ) : (
              <div className="wwm-done">
                <p className="wwm-done__text">That’s the stack of my sketches!</p>
                <button type="button" className="wwm-restack" onClick={restart}>
                  Lay them out again
                </button>
              </div>
            )}
          </div>
        </main>

        <footer className="wwm-footer">
          <nav className="wwm-footer__inner" aria-label="Footer navigation">
          <Link className="wwm-footer__home" to="/">
              Visit my personal site
            </Link>
            {!done && (
              <>
                <button type="button" className="wwm-foot-btn" onClick={goBack} disabled={index === 0}>
                  Back one slide
                </button>
                <span className="wwm-foot-count">
                  {index + 1} / {total}
                </span>
              </>
            )}
           
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default ChatGpt26;
