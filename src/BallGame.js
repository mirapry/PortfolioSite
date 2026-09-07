import React, { useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const W = 440;
const H = 620;
const ROWS = 10;
const PEG_R = 3.6;
const BALL_R = 7;
const TOP = 80;
const PEG_BOTTOM = 440;
const FLOOR = H - 14;
const GRAVITY = 0.14;
const MAX_FALL = 3.6;
const BOUNCE = 0.68;

function buildBoard() {
  const dx = W / (ROWS + 3);
  const dy = (PEG_BOTTOM - TOP) / (ROWS - 1);
  const pegs = [];
  for (let i = 0; i < ROWS; i++) {
    const n = i + 3;
    for (let j = 0; j < n; j++) {
      pegs.push({ x: W / 2 + (j - (n - 1) / 2) * dx, y: TOP + i * dy, row: i });
    }
  }
  const bottom = pegs.filter((p) => p.row === ROWS - 1).map((p) => p.x);
  const walls = [0, ...bottom, W];
  const dividers = walls.map((x) => ({
    x,
    wobble: Array.from({ length: 6 }, () => (Math.random() - 0.5) * 1.6),
  }));
  return { pegs, dx, dividers, binTop: PEG_BOTTOM + 26 };
}

function BallGame() {
  const canvasRef = useRef(null);
  const balls = useRef([]);
  const board = useRef(buildBoard());
  const clearRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    const { pegs, dividers, binTop } = board.current;

    const binOf = (x) => {
      let b = 0;
      while (b < dividers.length - 2 && x > dividers[b + 1].x) b++;
      return b;
    };
    const resting = () => {
      const counts = new Array(dividers.length - 1).fill(0);
      balls.current.forEach((ball) => { if (ball.rest) counts[ball.bin]++; });
      return counts;
    };

    const step = () => {
      const counts = resting();
      for (const ball of balls.current) {
        if (ball.rest) continue;
        ball.vy = Math.min(ball.vy + GRAVITY, MAX_FALL);
        ball.x += ball.vx;
        ball.y += ball.vy;

        for (const p of pegs) {
          if (Math.abs(p.y - ball.y) > BALL_R + PEG_R + 2) continue;
          const ddx = ball.x - p.x;
          const ddy = ball.y - p.y;
          const dist = Math.hypot(ddx, ddy);
          const min = BALL_R + PEG_R;
          if (dist < min && dist > 0) {
            const nx = ddx / dist;
            const ny = ddy / dist;
            ball.x = p.x + nx * min;
            ball.y = p.y + ny * min;
            const dot = ball.vx * nx + ball.vy * ny;
            ball.vx = (ball.vx - 2 * dot * nx) * BOUNCE + (Math.random() - 0.5) * 0.6;
            ball.vy = (ball.vy - 2 * dot * ny) * BOUNCE;
            if (Math.abs(ball.vx) < 0.2) ball.vx += Math.random() < 0.5 ? -0.35 : 0.35;
          }
        }

        if (ball.x < BALL_R) { ball.x = BALL_R; ball.vx = Math.abs(ball.vx) * BOUNCE; }
        if (ball.x > W - BALL_R) { ball.x = W - BALL_R; ball.vx = -Math.abs(ball.vx) * BOUNCE; }

        if (ball.y > binTop - BALL_R) {
          const b = binOf(ball.x);
          const left = dividers[b].x + (b === 0 ? 0 : 1) + BALL_R;
          const right = dividers[b + 1].x - (b === dividers.length - 2 ? 0 : 1) - BALL_R;
          if (ball.x < left) { ball.x = left; ball.vx = Math.abs(ball.vx) * BOUNCE; }
          if (ball.x > right) { ball.x = right; ball.vx = -Math.abs(ball.vx) * BOUNCE; }
          ball.vx *= 0.97;
          const restY = FLOOR - BALL_R - counts[b] * (BALL_R * 2 - 1);
          if (ball.y >= restY) {
            ball.y = restY;
            if (Math.abs(ball.vy) < 0.9) {
              ball.rest = true;
              ball.bin = b;
              ball.x = (left + right) / 2 + (Math.random() - 0.5) * 2;
              counts[b]++;
              if (restY - BALL_R * 2 < binTop + BALL_R) {
                balls.current = balls.current.filter((o) => !(o.rest && o.bin === b));
              }
            } else {
              ball.vy = -Math.abs(ball.vy) * 0.45;
            }
          }
        }
        if (ball.y > H + 40) ball.rest = true;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#FAFAFA';
      ctx.fillRect(0, 0, W, H);

      ctx.lineWidth = 1.1;
      ctx.strokeStyle = '#9a9a9a';
      ctx.fillStyle = '#e6e6e6';
      for (const p of pegs) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, PEG_R, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      ctx.strokeStyle = '#bdbdbd';
      ctx.lineWidth = 1;
      dividers.forEach((d, i) => {
        if (i === 0 || i === dividers.length - 1) return;
        ctx.beginPath();
        const segs = d.wobble.length;
        for (let s = 0; s <= segs; s++) {
          const y = binTop + ((FLOOR - binTop) * s) / segs;
          const x = d.x + (s === 0 || s === segs ? 0 : d.wobble[s - 1]);
          if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.moveTo(6, FLOOR + 0.5);
      ctx.lineTo(W - 6, FLOOR + 0.5);
      ctx.strokeStyle = '#8f8f8f';
      ctx.stroke();

      for (const ball of balls.current) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, BALL_R, 0, Math.PI * 2);
        ctx.fillStyle = ball.rest ? '#3a3a3a' : '#1b1b1b';
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    let raf;
    const loop = () => {
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  const drop = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    balls.current.push({
      x: Math.min(W - BALL_R - 2, Math.max(BALL_R + 2, x)),
      y: 14,
      vx: (Math.random() - 0.5) * 0.6,
      vy: 0,
      rest: false,
      bin: -1,
    });
  };

  const clear = () => { balls.current = []; };

  return (
    <div className="App">
      <div className="ballgame-container">
        <div className="subpage-header">ball game</div>
        <div className="ballgame-caption">click anywhere above the pegs to drop a ball</div>
        <canvas
          ref={canvasRef}
          className="ballgame-canvas"
          style={{ width: W, height: H }}
          onPointerDown={drop}
        />
        <button type="button" ref={clearRef} className="ballgame-clear" onClick={clear}>clear</button>
        <Link to="/" className="subpage-back ballgame-back">&#8592;</Link>
      </div>
    </div>
  );
}

export default BallGame;
