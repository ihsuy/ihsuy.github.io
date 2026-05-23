import React, { useState, useMemo, useEffect, useRef, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';

const randn = () => {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

const computeRanks = arr => {
  const indexed = arr.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);
  const r = new Array(arr.length);
  indexed.forEach((item, rank) => {
    r[item.i] = rank;
  });
  return r;
};

// ============================================================================
//  Styled scaffolding
// ============================================================================

const Wrapper = styled.div`
  margin-top: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #1d1d1f;
`;

// ---------- Teaser ----------
const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const TeaserCard = styled.button`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  padding: 1rem 1.25rem;
  background: linear-gradient(120deg, #FAF6EA 0%, #F1E4D2 35%, #E8D4B3 65%, #FAF6EA 100%);
  background-size: 200% 200%;
  animation: ${shimmer} 14s ease-in-out infinite;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 220ms cubic-bezier(0.32, 0.72, 0, 1), border-color 220ms;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TeaserPreview = styled.div`
  flex-shrink: 0;
  width: 84px;
  height: 36px;
  position: relative;
`;

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

const TeaserEyebrow = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a6f44;
`;

const TeaserTitle = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.005em;
`;

const TeaserSubtitle = styled.span`
  font-size: 0.8125rem;
  color: #6e6e73;
  line-height: 1.35;
`;

const TeaserArrow = styled.span`
  flex-shrink: 0;
  font-size: 1.25rem;
  color: #1d1d1f;
  font-weight: 400;
  transition: transform 200ms cubic-bezier(0.32, 0.72, 0, 1);

  ${TeaserCard}:hover & {
    transform: translateX(3px);
  }
`;

// ---------- Expandable container ----------
const ExpandableArea = styled.div`
  overflow: hidden;
  transition: max-height 700ms cubic-bezier(0.32, 0.72, 0, 1), opacity 500ms ease, margin-top 700ms cubic-bezier(0.32, 0.72, 0, 1);
  max-height: ${p => (p.expanded ? '5000px' : '0px')};
  opacity: ${p => (p.expanded ? 1 : 0)};
  margin-top: ${p => (p.expanded ? '1rem' : '0')};
`;

const DemoSurface = styled.div`
  background: linear-gradient(180deg, #FAFAF7 0%, #F2EEDF 100%);
  padding: 2.5rem 1.75rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.75rem 1rem;
    border-radius: 16px;
  }
`;

const Eyebrow = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #86868b;
  margin-bottom: 0.875rem;
`;

const Headline = styled.h3`
  font-size: clamp(1.75rem, 3vw, 2.625rem);
  font-weight: 700;
  letter-spacing: -0.022em;
  line-height: 1.05;
  margin: 0 0 0.875rem 0;

  span {
    display: block;
    color: #86868b;
  }
`;

const Subhead = styled.p`
  font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
  line-height: 1.5;
  color: #424245;
  max-width: 56ch;
  margin: 0 0 2rem 0;
  font-weight: 400;

  em {
    font-style: normal;
    color: #1d1d1f;
    font-weight: 500;
  }
`;

const PlotCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 10px 28px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const PlotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const PlotTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.005em;
`;

const StateLabel = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${p => (p.active ? '#1d1d1f' : '#86868b')};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-variant-numeric: tabular-nums;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${p => (p.active ? '#34c759' : '#d2d2d7')};
    transition: background 300ms ease;
  }
`;

const PlotLegend = styled.div`
  display: flex;
  gap: 0.875rem;
  font-size: 0.75rem;
  color: #6e6e73;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${p => p.color};
  }
`;

const PlotSvg = styled.svg`
  width: 100%;
  height: auto;
  display: block;
`;

const Annotation = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6e6e73;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  pointer-events: none;
  transition: opacity 400ms ease;
  opacity: ${p => (p.show ? 1 : 0)};
`;

const Controls = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

const PrimaryButton = styled.button`
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  background: #1d1d1f;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.32, 0.72, 0, 1);
  letter-spacing: -0.005em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: #ffffff;
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.14);
  &:hover {
    background: #f5f5f7;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
`;

const Metric = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.25rem;
  font-size: 0.8125rem;
  color: #6e6e73;
  font-variant-numeric: tabular-nums;

  strong {
    color: #1d1d1f;
    font-weight: 600;
    margin-left: 0.4rem;
  }
`;

// ---------- Impact callout ----------
const ImpactCard = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 1.75rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-left: 3px solid rgba(29, 29, 31, 0.4);
  border-radius: 14px;
`;

const ImpactLabel = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #86868b;
  margin-bottom: 0.5rem;
`;

const ImpactBody = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #1d1d1f;
  margin: 0 0 1.25rem 0;
  max-width: 64ch;

  em {
    font-style: italic;
    color: #424245;
  }

  strong {
    font-weight: 600;
    color: #1d1d1f;
  }
`;

const LineageButton = styled.button`
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 0.95rem;
  background: rgba(29, 29, 31, 0.04);
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: all 200ms cubic-bezier(0.32, 0.72, 0, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: rgba(29, 29, 31, 0.08);
    border-color: rgba(0, 0, 0, 0.14);
  }

  &::after {
    content: '→';
    transition: transform 200ms cubic-bezier(0.32, 0.72, 0, 1);
    transform: ${p => (p.open ? 'rotate(-90deg)' : 'rotate(0)')};
  }
`;

// ---------- Lineage graph ----------
const LineageReveal = styled.div`
  overflow: hidden;
  max-height: ${p => (p.open ? '1400px' : '0')};
  opacity: ${p => (p.open ? 1 : 0)};
  margin-top: ${p => (p.open ? '1.5rem' : '0')};
  transition:
    max-height 700ms cubic-bezier(0.32, 0.72, 0, 1),
    opacity 500ms ease,
    margin-top 700ms cubic-bezier(0.32, 0.72, 0, 1);
`;

const LineageCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 1.25rem 1rem 1rem;
    border-radius: 14px;
  }
`;

const LineageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const LineageTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.005em;
`;

const LineageLegend = styled.div`
  display: flex;
  gap: 0.875rem;
  font-size: 0.6875rem;
  color: #6e6e73;
  flex-wrap: wrap;
`;

const LineageLegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.color};
  }
`;

const LineageBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LineageSvg = styled.svg`
  width: 100%;
  height: auto;
  display: block;
  background: linear-gradient(180deg, #fdfcf8 0%, #f7f3ea 100%);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.5rem;
`;

const lineageFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const lineageEdgeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.5; }
`;

// Outer g carries the SVG transform="translate(...)" — never animated.
const LineageNodePos = styled.g`
  cursor: pointer;
`;

// Inner g handles the CSS opacity entrance animation only (no transform).
const LineageNodeAnim = styled.g`
  opacity: 0;
  animation: ${lineageFadeIn} 480ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
  animation-delay: ${p => p.delay}ms;

  circle.dot {
    transition: r 220ms cubic-bezier(0.32, 0.72, 0, 1),
                stroke-width 220ms ease;
  }

  ${LineageNodePos}:hover & circle.dot {
    r: ${p => p.baseRadius + 3};
  }
`;

const LineageEdgePath = styled.path`
  fill: none;
  stroke-linecap: round;
  opacity: 0;
  animation: ${lineageEdgeIn} 600ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
  animation-delay: ${p => p.delay}ms;
`;

const NodeLabel = styled.text`
  font-family: inherit;
  font-size: 9.5px;
  font-weight: 500;
  fill: #1d1d1f;
  text-anchor: middle;
  pointer-events: none;
  user-select: none;
`;

const NodeSubLabel = styled.text`
  font-family: inherit;
  font-size: 8.5px;
  fill: #86868b;
  text-anchor: middle;
  pointer-events: none;
  user-select: none;
`;

const DetailPanel = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 1.125rem 1.125rem 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  align-self: start;
  transition: border-color 200ms ease;

  @media (max-width: 900px) {
    margin-top: 0.5rem;
  }
`;

const DetailMeta = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${p => p.color || '#86868b'};
  margin-bottom: 0.4rem;
`;

const DetailTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.005em;
  line-height: 1.35;
  margin-bottom: 0.4rem;
`;

const DetailAuthors = styled.div`
  font-size: 0.75rem;
  color: #6e6e73;
  margin-bottom: 0.65rem;
`;

const DetailKey = styled.div`
  font-size: 0.78125rem;
  font-style: italic;
  color: #424245;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
  border-left: 2px solid rgba(0, 0, 0, 0.08);
`;

const DetailLink = styled.a`
  font-size: 0.78125rem;
  font-weight: 500;
  color: #1d1d1f;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 1px;
  transition: border-color 180ms ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.45);
    color: #1d1d1f;
  }
`;

const RelationshipTag = styled.span`
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #86868b;
  background: rgba(0, 0, 0, 0.04);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  margin-left: 0.4rem;
  vertical-align: middle;
`;

// ---------- Lineage data ----------
const BRANCH_COLORS = {
  root: '#9e9e9e',
  hardware: '#CC785C',
  theory: '#5BA4E2',
  algorithmic: '#B07ED4',
  adjacent: '#6BA4B8',
};

const BRANCH_LABELS = {
  root: 'NeurIPS 2020',
  hardware: 'Hardware · Kuroda Lab',
  theory: 'Theory',
  algorithmic: 'Algorithmic',
  adjacent: 'Adjacent substrates',
};

const LINEAGE_W = 760;
const LINEAGE_H = 600;

const LINEAGE_NODES = [
  {
    id: 'root',
    branch: 'root',
    x: 380,
    y: 60,
    year: 2020,
    venue: 'NeurIPS 2020',
    title:
      'Train-by-Reconnect: Decoupling Locations of Weights from their Values',
    authors: 'Yushi Qiu · Reiji Suda',
    url: 'https://arxiv.org/abs/2003.02570',
    keyResult:
      'Identified that information learned by SGD lives predominantly in weight ordering, not values (SoWP). Proposed the two-dimensions hypothesis and LaPerm — the first algorithm to train DNNs by permuting initial values without altering them.',
    label: 'Qiu & Suda',
    sub: '2020',
  },
  // Hardware chain — Kuroda lab
  {
    id: 'hsu_22a',
    parent: 'root',
    branch: 'hardware',
    x: 110,
    y: 180,
    year: 2022,
    venue: 'IEEE OJ-CAS',
    title:
      'A 0.61-µJ/Frame Pipelined Wired-logic DNN Processor in 16-nm FPGA Using Convolutional Non-Linear Neural Network',
    authors: 'Hsu, Kosuge, Hamada, Kuroda',
    url: 'https://ieeexplore.ieee.org/document/9657198',
    keyResult: '>100× energy efficiency vs SOTA BNN accelerator on CIFAR-10.',
    label: 'Hsu',
    sub: '2022 · OJ-CAS',
  },
  {
    id: 'hsu_22b',
    parent: 'hsu_22a',
    branch: 'hardware',
    x: 110,
    y: 240,
    year: 2022,
    venue: 'IEEE Hot Chips',
    title:
      'A 13.7-µJ/Prediction 88% Accuracy CIFAR-10 Single-Chip Wired-logic Processor in 16-nm FPGA',
    authors: 'Hsu, Kosuge, Hamada, Kuroda',
    url: 'https://hc34.hotchips.org/',
    keyResult: '88% CIFAR-10 single-chip at 13.7 µJ/prediction.',
    label: 'Hsu',
    sub: '2022 · Hot Chips',
  },
  {
    id: 'li_23',
    parent: 'hsu_22b',
    branch: 'hardware',
    x: 110,
    y: 300,
    year: 2023,
    venue: 'IEEE ISCAS',
    title:
      'A 0.13-mJ/Prediction CIFAR-100 Raster-Scan-Based Wired-Logic Processor Using Non-Linear Neural Network',
    authors: 'Li, Hsu, Sumikawa, Hamada, Kosuge, Kuroda',
    url: 'https://ieeexplore.ieee.org/document/10181427',
    keyResult:
      '238× energy efficiency vs SOTA FPGA; 7× vs SOTA ASIC at 68.6% CIFAR-100.',
    label: 'Li',
    sub: '2023 · ISCAS',
    highlight: true,
  },
  {
    id: 'li_24',
    parent: 'li_23',
    branch: 'hardware',
    x: 110,
    y: 360,
    year: 2024,
    venue: 'IEICE Trans. Electronics',
    title:
      'A 0.13-mJ/Prediction CIFAR-100 Fully Synthesizable Raster-Scan-Based Wired-Logic Processor in 16-nm FPGA',
    authors: 'Li, Zhan, Sumikawa, Hamada, Kosuge, Kuroda',
    url: 'https://www.jstage.jst.go.jp/article/transele/E107.C/6/E107.C_2023LHP0001/_article',
    keyResult: 'Journal version with full synthesis flow and HLS methodology.',
    label: 'Li',
    sub: '2024 · IEICE',
  },
  {
    id: 'pan_25a',
    parent: 'li_24',
    branch: 'hardware',
    x: 110,
    y: 420,
    year: 2025,
    venue: 'ASP-DAC',
    title:
      'A Coarse- and Fine-Grained LUT Segmentation Method Enabling Single FPGA Implementation of Wired-Logic DNN Processor',
    authors: 'Pan, Li, Hamada, Kosuge',
    url: 'https://dl.acm.org/doi/10.1145/3658617.3698484',
    keyResult: 'LUT segmentation enabling larger models in single-chip wired-logic.',
    label: 'Pan',
    sub: '2025 · ASP-DAC',
  },
  {
    id: 'pan_25b',
    parent: 'pan_25a',
    branch: 'hardware',
    x: 110,
    y: 480,
    year: 2025,
    venue: 'IEICE Trans. Electronics',
    title:
      'Analysis and Design of Coarse and Fine Segmented LUT Implementation for FPGA-Based Resource-Efficient Wired-Logic DNN Processors',
    authors: 'Pan, Li, Hamada, Kosuge',
    url: 'https://www.jstage.jst.go.jp/article/transele/E108.C/6/E108.C_2024LHP0002/_article',
    keyResult: 'Extended analysis of LUT segmentation for resource efficiency.',
    label: 'Pan',
    sub: '2025 · IEICE',
  },
  {
    id: 'pan_25c',
    parent: 'pan_25b',
    branch: 'hardware',
    x: 110,
    y: 540,
    year: 2025,
    venue: 'Conference, May 2025',
    title:
      'A 83.7% Resource Reduced FPGA-based Wired-Logic DNN Processor by Using Mixed-Precision Module Embedding Into Non-Linear Function LUT',
    authors: 'Pan, Hamada, Kosuge',
    url: 'https://www.researchgate.net/scientific-contributions/Atsutake-Kosuge-2026827263',
    keyResult: '83.7% resource reduction via mixed-precision LUT embedding.',
    label: 'Pan',
    sub: '2025',
  },
  // Theory
  {
    id: 'zhu_25',
    parent: 'root',
    branch: 'theory',
    x: 300,
    y: 180,
    year: 2025,
    venue: 'Neural Networks (Elsevier)',
    title:
      'Neural Networks Trained by Weight Permutation are Universal Approximators',
    authors: 'Zhu, Liu, Chu, et al.',
    url: 'https://arxiv.org/abs/2407.01033',
    keyResult:
      'First UAP proof for permutation-trained ReLU networks; explicitly motivated by Train-by-Reconnect needing theoretical grounding for hardware adoption.',
    label: 'Zhu',
    sub: '2025 · UAP',
  },
  // Algorithmic
  {
    id: 'padst_25',
    parent: 'root',
    branch: 'algorithmic',
    x: 490,
    y: 180,
    year: 2025,
    venue: 'arXiv',
    title:
      'Efficient Dynamic Structured Sparse Training with Learned Shuffles (PA-DST)',
    authors: 'Anonymous (under review)',
    url: 'https://arxiv.org/abs/2510.14812',
    keyResult:
      'Matches unstructured baselines at 90–95% sparsity on ViT-B/16 (ImageNet) and GPT-2 (WikiText-103); 1.21× train, 2.9× inference speedup.',
    label: 'PA-DST',
    sub: '2025',
    relationship: 'conceptual descendant',
  },
  // Adjacent
  {
    id: 'feldmann_21',
    parent: 'root',
    branch: 'adjacent',
    x: 660,
    y: 180,
    year: 2021,
    venue: 'Nature',
    title:
      'Parallel convolutional processing using an integrated photonic tensor core',
    authors: 'Feldmann, Youngblood, Karpov, et al.',
    url: 'https://www.nature.com/articles/s41586-020-03070-1',
    keyResult:
      'Tera-MAC/s photonic tensor core with phase-change memory. Grouped by Zhu et al. 2025 with Train-by-Reconnect under the same write-vs-route hardware economics.',
    label: 'Feldmann',
    sub: '2021 · Nature',
    relationship: 'adjacent · not direct citation',
  },
];

const LineageGraph = ({ visible }) => {
  const [selectedId, setSelectedId] = useState('root');

  const idMap = useMemo(
    () => Object.fromEntries(LINEAGE_NODES.map(n => [n.id, n])),
    []
  );
  const edges = useMemo(
    () =>
      LINEAGE_NODES.filter(n => n.parent).map(child => ({
        from: idMap[child.parent],
        to: child,
      })),
    [idMap]
  );

  const selected = idMap[selectedId] || idMap.root;

  const edgePath = (a, b) => {
    // Cubic Bézier with control points pulled toward midpoint vertically
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const cy1 = a.y + dy * 0.55;
    const cy2 = b.y - dy * 0.55;
    if (Math.abs(dx) < 0.5) {
      // straight downward (within chain)
      return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
    }
    return `M ${a.x} ${a.y} C ${a.x} ${cy1}, ${b.x} ${cy2}, ${b.x} ${b.y}`;
  };

  return (
    <LineageCard>
      <LineageHeader>
        <LineageTitle>Downstream lineage</LineageTitle>
        <LineageLegend>
          {Object.entries(BRANCH_LABELS).map(([key, label]) => (
            <LineageLegendItem key={key} color={BRANCH_COLORS[key]}>
              {label}
            </LineageLegendItem>
          ))}
        </LineageLegend>
      </LineageHeader>

      <LineageBody>
        <LineageSvg
          viewBox={`0 0 ${LINEAGE_W} ${LINEAGE_H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Edges */}
          {edges.map((edge, i) => {
            const dashed = edge.to.relationship?.includes('adjacent');
            return (
              <LineageEdgePath
                key={`e-${edge.to.id}`}
                d={edgePath(edge.from, edge.to)}
                stroke={BRANCH_COLORS[edge.to.branch]}
                strokeWidth={selectedId === edge.to.id || selectedId === edge.from.id ? 2.5 : 1.5}
                strokeDasharray={dashed ? '4 4' : '0'}
                style={{
                  opacity: selectedId === edge.to.id || selectedId === edge.from.id ? 0.85 : 0.45,
                  transition: 'stroke-width 220ms ease, opacity 220ms ease',
                }}
                delay={200 + i * 60}
              />
            );
          })}

          {/* Nodes */}
          {LINEAGE_NODES.map((n, i) => {
            const r = 9;
            const isSelected = selectedId === n.id;
            return (
              <LineageNodePos
                key={n.id}
                transform={`translate(${n.x} ${n.y})`}
                onClick={() => setSelectedId(n.id)}
              >
                <LineageNodeAnim delay={i * 70} baseRadius={r}>
                  {/* Selection ring */}
                  {isSelected && (
                    <circle
                      r={r + 5}
                      fill="none"
                      stroke={BRANCH_COLORS[n.branch]}
                      strokeWidth="1.5"
                      opacity="0.4"
                    />
                  )}
                  {/* Filled dot — all nodes share the same visual treatment */}
                  <circle
                    className="dot"
                    r={r}
                    fill={BRANCH_COLORS[n.branch]}
                    stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.5)'}
                    strokeWidth={isSelected ? 2 : 1.25}
                  />
                  {/* Labels */}
                  <NodeLabel y={r + 14}>{n.label}</NodeLabel>
                  <NodeSubLabel y={r + 26}>{n.sub}</NodeSubLabel>
                </LineageNodeAnim>
              </LineageNodePos>
            );
          })}
        </LineageSvg>

        <DetailPanel>
          <DetailMeta color={BRANCH_COLORS[selected.branch]}>
            {selected.year} · {selected.venue}
            {selected.relationship && (
              <RelationshipTag>{selected.relationship}</RelationshipTag>
            )}
          </DetailMeta>
          <DetailTitle>{selected.title}</DetailTitle>
          <DetailAuthors>{selected.authors}</DetailAuthors>
          {selected.keyResult && <DetailKey>{selected.keyResult}</DetailKey>}
          {selected.url && (
            <DetailLink
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open paper →
            </DetailLink>
          )}
        </DetailPanel>
      </LineageBody>
    </LineageCard>
  );
};

// ---------- Bottom section ----------
const Footnote = styled.div`
  margin-top: 1.75rem;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: #86868b;

  a {
    color: #1d1d1f;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0.2);
    text-underline-offset: 2px;
    &:hover {
      text-decoration-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const CollapseRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const CollapseLink = styled.button`
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #6e6e73;
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: color 200ms ease;

  &:hover {
    color: #1d1d1f;
  }
`;

// ============================================================================
//  Demo 1 — SoWP collapse
// ============================================================================

const N_PER_VECTOR = 56;
const N_VECTORS = 4;
const Y_RANGE = 3.2;
const PLOT_W = 880;
const PLOT_H = 320;
const PAD_X = 40;
const PAD_Y = 28;

const VECTOR_COLORS = ['#5BA4E2', '#E5765B', '#6BA4B8', '#B07ED4'];
const VECTOR_LABELS = ['Layer 12', 'Layer 27', 'Layer 41', 'Layer 53'];

const SoWPDot = styled.circle`
  transition:
    cx 900ms cubic-bezier(0.32, 0.72, 0, 1),
    cy 900ms cubic-bezier(0.32, 0.72, 0, 1);
  transition-delay: ${p => p.delay}ms;
`;

const generateVectors = () =>
  Array.from({ length: N_VECTORS }, () =>
    Array.from({ length: N_PER_VECTOR }, () => randn())
  );

const SoWPDemo = ({ visible }) => {
  const [sorted, setSorted] = useState(false);
  const [seed, setSeed] = useState(0);
  const [autoPlayed, setAutoPlayed] = useState(false);

  const vectors = useMemo(generateVectors, [seed]);
  const ranks = useMemo(() => vectors.map(computeRanks), [vectors]);

  useEffect(() => {
    if (!visible || autoPlayed) return;
    const t1 = setTimeout(() => setSorted(true), 900);
    const t2 = setTimeout(() => setSorted(false), 3600);
    const t3 = setTimeout(() => setAutoPlayed(true), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [visible, autoPlayed]);

  const xScale = idx => PAD_X + (idx / (N_PER_VECTOR - 1)) * (PLOT_W - 2 * PAD_X);
  const yScale = val => PAD_Y + ((Y_RANGE - val) / (2 * Y_RANGE)) * (PLOT_H - 2 * PAD_Y);

  return (
    <PlotCard>
      <PlotHeader>
        <PlotTitle>① Four weight vectors</PlotTitle>
        <StateLabel active={sorted}>
          {sorted ? 'Sorted within each vector' : 'Original order'}
        </StateLabel>
      </PlotHeader>

      <div style={{ position: 'relative' }}>
        <PlotSvg viewBox={`0 0 ${PLOT_W} ${PLOT_H}`} preserveAspectRatio="xMidYMid meet">
          <line
            x1={PAD_X}
            y1={yScale(0)}
            x2={PLOT_W - PAD_X}
            y2={yScale(0)}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
          {vectors.map((vec, vi) =>
            vec.map((value, valueIdx) => {
              const displayIdx = sorted ? ranks[vi][valueIdx] : valueIdx;
              return (
                <SoWPDot
                  key={`${vi}-${valueIdx}`}
                  cx={xScale(displayIdx)}
                  cy={yScale(value)}
                  r="2.75"
                  fill={VECTOR_COLORS[vi]}
                  opacity="0.72"
                  delay={vi * 90}
                />
              );
            })
          )}
        </PlotSvg>
        <Annotation show={sorted}>All four collapse onto one curve</Annotation>
      </div>

      <PlotLegend>
        {VECTOR_LABELS.map((label, i) => (
          <LegendItem key={i} color={VECTOR_COLORS[i]}>
            {label}
          </LegendItem>
        ))}
      </PlotLegend>

      <Controls>
        <PrimaryButton onClick={() => setSorted(s => !s)}>
          {sorted ? 'Restore original order' : 'Sort within each vector'}
        </PrimaryButton>
        <SecondaryButton
          onClick={() => {
            setSorted(false);
            setSeed(s => s + 1);
          }}
        >
          Draw new sample
        </SecondaryButton>
      </Controls>
    </PlotCard>
  );
};

// ============================================================================
//  Demo 2 — Reconnection alone trains the network (weight-matrix view)
// ============================================================================
//
//  Each cell in the 5×5 grid IS one neural connection between input row i and
//  output column j. Reconnection = a value physically moving from one cell to
//  another. The trained matrix at the end is, visibly, a permutation of the
//  initial random cells — same colors, new positions.

const RC_GRID = 5;
const RC_N_EDGES = RC_GRID * RC_GRID;
const RC_CELL = 40;
const RC_GAP = 5;
const RC_CELL_PITCH = RC_CELL + RC_GAP;
const RC_GRID_PX = RC_GRID * RC_CELL + (RC_GRID - 1) * RC_GAP;
const RC_PAD_LEFT = 48; // room for input labels
const RC_PAD_TOP = 50;  // room for target row
const RC_PAD_RIGHT = 10;
const RC_PAD_BOTTOM = 48; // room for output-sum row
const RC_W = RC_PAD_LEFT + RC_GRID_PX + RC_PAD_RIGHT;
const RC_H = RC_PAD_TOP + RC_GRID_PX + RC_PAD_BOTTOM;
const RC_GRID_X = RC_PAD_LEFT;
const RC_GRID_Y = RC_PAD_TOP;

const RC_INPUT = [1, 1, 1, 1, 1];
const RC_TARGET = [1.6, -1.6, 1.6, -1.6, 1.6];

// Network (bipartite) panel geometry
const BP_W = 300;
const BP_H = RC_H;
const BP_PAD_TOP = 42;
const BP_PAD_BOTTOM = 40;
const BP_IN_X = 62;
const BP_OUT_X = BP_W - 62;
const BP_NODE_R = 12;
const bpNodeY = i =>
  BP_PAD_TOP + (i / (RC_GRID - 1)) * (BP_H - BP_PAD_TOP - BP_PAD_BOTTOM);

// Spring (physical settling) + swap cadence
const SPRING_STIFFNESS = 90;
const SPRING_DAMPING = 14;
// Cable control points — softer + bouncier for an elastic, wobbly (グニョグニョ) feel
const CTRL_STIFFNESS = 70;
const CTRL_DAMPING = 7;
const SWAP_COMMIT_MS = 240; // gap between committing successive swaps
const MAX_SWAPS = 9;

// Two lagging control points per cable (cubic Bézier), springing in y.
const c1x = BP_IN_X + (BP_OUT_X - BP_IN_X) / 3;
const c2x = BP_IN_X + (2 * (BP_OUT_X - BP_IN_X)) / 3;
const initCtrl = positions =>
  positions.map(p => {
    const y1 = bpNodeY(p.row);
    const y2 = bpNodeY(p.col);
    return { c1y: y1 + (y2 - y1) / 3, v1: 0, c2y: y1 + (2 * (y2 - y1)) / 3, v2: 0 };
  });

const hexToRgb = hex => {
  const v = hex.replace('#', '');
  return {
    r: parseInt(v.slice(0, 2), 16),
    g: parseInt(v.slice(2, 4), 16),
    b: parseInt(v.slice(4, 6), 16),
  };
};

const mixColor = (a, b, t) => {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return `rgb(${Math.round(ca.r + (cb.r - ca.r) * t)}, ${Math.round(
    ca.g + (cb.g - ca.g) * t
  )}, ${Math.round(ca.b + (cb.b - ca.b) * t)})`;
};

const valueToColor = v => {
  const t = Math.max(-2, Math.min(2, v)) / 2; // [-1, 1]
  if (t < 0) return mixColor('#EEE5D2', '#3A85C7', -t);
  return mixColor('#EEE5D2', '#CC785C', t);
};

const valueToTextColor = v => (Math.abs(v) > 1.0 ? '#ffffff' : '#1d1d1f');

const generateRcWeights = () =>
  Array.from({ length: RC_N_EDGES }, () => randn() * 1.2);

const identityGridPos = () =>
  Array.from({ length: RC_N_EDGES }, (_, i) => ({
    row: Math.floor(i / RC_GRID),
    col: i % RC_GRID,
  }));

const computeRcOutput = (gridPos, weights) => {
  const out = new Array(RC_GRID).fill(0);
  gridPos.forEach((pos, wId) => {
    out[pos.col] += RC_INPUT[pos.row] * weights[wId];
  });
  return out;
};

const computeRcLoss = (gridPos, weights) => {
  const out = computeRcOutput(gridPos, weights);
  return out.reduce((acc, o, j) => acc + (o - RC_TARGET[j]) ** 2, 0);
};

const cellX = col => RC_GRID_X + col * RC_CELL_PITCH;
const cellY = row => RC_GRID_Y + row * RC_CELL_PITCH;

const DualView = styled.div`
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
  gap: 1rem;
  align-items: start;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ViewCaption = styled.div`
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #86868b;
  text-align: center;
  margin-top: 0.25rem;
  font-weight: 500;
`;

const LossBar = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  margin-bottom: 0.75rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${p => (1 - p.lossNorm) * 100}%;
    background: #34c759;
    opacity: 0.9;
    border-radius: 2px;
    transition: width 540ms cubic-bezier(0.32, 0.72, 0, 1);
  }
`;

const ReconnectDemo = ({ visible }) => {
  const [seed, setSeed] = useState(0);
  const [searching, setSearching] = useState(false);
  const [autoPlayed, setAutoPlayed] = useState(false);
  const weights = useMemo(generateRcWeights, [seed]);
  const [gridPos, setGridPos] = useState(identityGridPos);

  // Animated (float) positions + velocities — the spring's display state.
  const displayRef = useRef(
    identityGridPos().map(p => ({ row: p.row, col: p.col }))
  );
  const velRef = useRef(
    identityGridPos().map(() => ({ row: 0, col: 0 }))
  );
  const ctrlRef = useRef(initCtrl(identityGridPos()));
  const gridPosRef = useRef(gridPos);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const timeoutsRef = useRef([]);
  const [, forceFrame] = useReducer(x => x + 1, 0);

  // ---- Spring loop: ease display positions toward the committed permutation ----
  const startLoop = () => {
    if (rafRef.current != null) return;
    lastRef.current = performance.now();
    const step = now => {
      const dt = Math.min(0.032, (now - lastRef.current) / 1000);
      lastRef.current = now;
      const target = gridPosRef.current;
      const disp = displayRef.current;
      const vel = velRef.current;
      const ctrl = ctrlRef.current;
      let moving = false;
      for (let i = 0; i < disp.length; i++) {
        for (const axis of ['row', 'col']) {
          const x = disp[i][axis];
          const tx = target[i][axis];
          const v = vel[i][axis];
          const a = -SPRING_STIFFNESS * (x - tx) - SPRING_DAMPING * v;
          const nv = v + a * dt;
          const nx = x + nv * dt;
          vel[i][axis] = nv;
          disp[i][axis] = nx;
          if (Math.abs(nx - tx) > 0.0015 || Math.abs(nv) > 0.0015) moving = true;
        }
        // Cable control points lag behind the (moving) endpoints → wobble
        const y1 = bpNodeY(disp[i].row);
        const y2 = bpNodeY(disp[i].col);
        const t1 = y1 + (y2 - y1) / 3;
        const t2 = y1 + (2 * (y2 - y1)) / 3;
        const c = ctrl[i];
        const a1 = -CTRL_STIFFNESS * (c.c1y - t1) - CTRL_DAMPING * c.v1;
        c.v1 += a1 * dt;
        c.c1y += c.v1 * dt;
        const a2 = -CTRL_STIFFNESS * (c.c2y - t2) - CTRL_DAMPING * c.v2;
        c.v2 += a2 * dt;
        c.c2y += c.v2 * dt;
        if (
          Math.abs(c.c1y - t1) > 0.05 ||
          Math.abs(c.v1) > 0.05 ||
          Math.abs(c.c2y - t2) > 0.05 ||
          Math.abs(c.v2) > 0.05
        )
          moving = true;
      }
      forceFrame();
      if (moving) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        for (let i = 0; i < disp.length; i++) {
          disp[i].row = target[i].row;
          disp[i].col = target[i].col;
          vel[i].row = 0;
          vel[i].col = 0;
          const y1 = bpNodeY(target[i].row);
          const y2 = bpNodeY(target[i].col);
          ctrl[i].c1y = y1 + (y2 - y1) / 3;
          ctrl[i].c2y = y1 + (2 * (y2 - y1)) / 3;
          ctrl[i].v1 = 0;
          ctrl[i].v2 = 0;
        }
        rafRef.current = null;
        forceFrame();
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  // Kick the spring whenever the committed permutation changes.
  useEffect(() => {
    gridPosRef.current = gridPos;
    startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridPos]);

  const clearPending = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  // Snap (no animation) — for reset / new init.
  const snapTo = positions => {
    clearPending();
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    displayRef.current = positions.map(p => ({ row: p.row, col: p.col }));
    velRef.current = positions.map(() => ({ row: 0, col: 0 }));
    ctrlRef.current = initCtrl(positions);
    gridPosRef.current = positions;
    setGridPos(positions);
    forceFrame();
  };

  useEffect(() => {
    snapTo(identityGridPos());
    setSearching(false);
    setAutoPlayed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed]);

  useEffect(
    () => () => {
      timeoutsRef.current.forEach(clearTimeout);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  const loss = computeRcLoss(gridPos, weights);
  const output = computeRcOutput(gridPos, weights);
  const lossNorm = Math.min(1, loss / 14);
  const matched = loss < 0.6;

  const reconnect = () => {
    if (searching) return;
    clearPending();

    // Random-swap hill-climb; record improving swaps.
    let curr = gridPos.map(p => ({ ...p }));
    let currLoss = computeRcLoss(curr, weights);
    const trajectory = [];
    for (let iter = 0; iter < 30000 && trajectory.length < MAX_SWAPS; iter++) {
      const w1 = Math.floor(Math.random() * RC_N_EDGES);
      const w2 = Math.floor(Math.random() * RC_N_EDGES);
      if (w1 === w2) continue;
      const cand = curr.map(p => ({ ...p }));
      const tmp = cand[w1];
      cand[w1] = cand[w2];
      cand[w2] = tmp;
      const cLoss = computeRcLoss(cand, weights);
      if (cLoss < currLoss - 1e-9) {
        curr = cand;
        currLoss = cLoss;
        trajectory.push({ w1, w2 });
        if (currLoss < 0.05) break;
      }
    }

    if (trajectory.length === 0) return;
    setSearching(true);

    // Commit swaps one at a time on a calm cadence. The spring is continuous,
    // so positions glide smoothly even while later swaps land.
    trajectory.forEach((swap, idx) => {
      const t = setTimeout(() => {
        setGridPos(prev => {
          const np = prev.map(p => ({ ...p }));
          const tmp = np[swap.w1];
          np[swap.w1] = np[swap.w2];
          np[swap.w2] = tmp;
          return np;
        });
        if (idx === trajectory.length - 1) {
          timeoutsRef.current.push(
            setTimeout(() => setSearching(false), 700)
          );
        }
      }, (idx + 1) * SWAP_COMMIT_MS);
      timeoutsRef.current.push(t);
    });
  };

  const shuffle = () => {
    if (searching) return;
    clearPending();
    setGridPos(prev => {
      const positions = prev.map(p => ({ ...p }));
      for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
      }
      return positions;
    });
  };

  const reset = () => snapTo(identityGridPos());

  useEffect(() => {
    if (!visible || autoPlayed) return;
    const t = setTimeout(() => {
      reconnect();
      setAutoPlayed(true);
    }, 1400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, autoPlayed]);

  // ---------- Render helpers reading the animated display positions ----------
  const disp = displayRef.current;
  const vel = velRef.current;

  return (
    <PlotCard>
      <PlotHeader>
        <PlotTitle>② Reconnection alone trains the network</PlotTitle>
        <StateLabel active={matched}>
          {searching
            ? 'Reconnecting…'
            : matched
            ? 'Trained — output matches target'
            : 'Untrained — output ≠ target'}
        </StateLabel>
      </PlotHeader>

      <LossBar lossNorm={lossNorm} />

      <DualView>
        {/* ===== MATRIX (end-on) ===== */}
        <div>
          <PlotSvg viewBox={`0 0 ${RC_W} ${RC_H}`} preserveAspectRatio="xMidYMid meet">
            {/* Row labels */}
            {Array.from({ length: RC_GRID }, (_, i) => (
              <text
                key={`rl-${i}`}
                x={RC_GRID_X - 14}
                y={cellY(i) + RC_CELL / 2 + 3}
                fontSize="9"
                fill="#86868b"
                textAnchor="end"
                fontFamily="inherit"
              >
                x{i}
              </text>
            ))}
            {/* Target rings */}
            <text
              x={RC_GRID_X + RC_GRID_PX / 2}
              y={RC_GRID_Y - 30}
              fontSize="9"
              fill="#86868b"
              textAnchor="middle"
              fontFamily="inherit"
            >
              target output
            </text>
            {RC_TARGET.map((t, j) => (
              <circle
                key={`tg-${j}`}
                cx={cellX(j) + RC_CELL / 2}
                cy={RC_GRID_Y - 15}
                r="6"
                fill="none"
                stroke={valueToColor(t)}
                strokeWidth="1.75"
                strokeDasharray="3 3"
                opacity="0.75"
              />
            ))}
            {/* Backdrop slots */}
            {Array.from({ length: RC_N_EDGES }, (_, k) => {
              const row = Math.floor(k / RC_GRID);
              const col = k % RC_GRID;
              return (
                <rect
                  key={`bg-${k}`}
                  x={cellX(col)}
                  y={cellY(row)}
                  width={RC_CELL}
                  height={RC_CELL}
                  rx="7"
                  fill="rgba(0,0,0,0.025)"
                />
              );
            })}
            {/* Cells — positioned from animated display state */}
            {weights.map((value, wId) => {
              const d = disp[wId];
              const cx = cellX(d.col) + RC_CELL / 2;
              const cy = cellY(d.row) + RC_CELL / 2;
              const speed = Math.hypot(vel[wId].row, vel[wId].col);
              const scale = 1 + Math.min(0.13, speed * 0.05);
              return (
                <g key={wId} transform={`translate(${cx} ${cy}) scale(${scale})`}>
                  <rect
                    x={-RC_CELL / 2}
                    y={-RC_CELL / 2}
                    width={RC_CELL}
                    height={RC_CELL}
                    rx="7"
                    fill={valueToColor(value)}
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="4"
                    fontSize="10.5"
                    fill={valueToTextColor(value)}
                    textAnchor="middle"
                    fontFamily="inherit"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {value.toFixed(1)}
                  </text>
                </g>
              );
            })}
            {/* Column sums */}
            <text
              x={RC_GRID_X + RC_GRID_PX / 2}
              y={RC_GRID_Y + RC_GRID_PX + 16}
              fontSize="9"
              fill="#86868b"
              textAnchor="middle"
              fontFamily="inherit"
            >
              column sum
            </text>
            {output.map((v, j) => (
              <circle
                key={`os-${j}`}
                cx={cellX(j) + RC_CELL / 2}
                cy={RC_GRID_Y + RC_GRID_PX + 30}
                r="8"
                fill={valueToColor(v)}
                stroke="rgba(0,0,0,0.12)"
                strokeWidth="1"
              />
            ))}
          </PlotSvg>
          <ViewCaption>weight matrix</ViewCaption>
        </div>

        {/* ===== NETWORK (bipartite) ===== */}
        <div>
          <PlotSvg viewBox={`0 0 ${BP_W} ${BP_H}`} preserveAspectRatio="xMidYMid meet">
            <text x={BP_IN_X} y={24} fontSize="9" fill="#86868b" textAnchor="middle" fontFamily="inherit">inputs</text>
            <text x={BP_OUT_X} y={24} fontSize="9" fill="#86868b" textAnchor="middle" fontFamily="inherit">outputs · target</text>

            {/* Cables — soft, wobbly: lagging control points make them bend
                and jiggle as they re-route, like living connections */}
            {weights.map((value, wId) => {
              const d = disp[wId];
              const c = ctrlRef.current[wId];
              const y1 = bpNodeY(d.row);
              const y2 = bpNodeY(d.col);
              const w = Math.min(3.5, Math.abs(value) * 1.4 + 0.5);
              return (
                <path
                  key={wId}
                  d={`M ${BP_IN_X} ${y1} C ${c1x} ${c.c1y} ${c2x} ${c.c2y} ${BP_OUT_X} ${y2}`}
                  fill="none"
                  stroke={valueToColor(value)}
                  strokeWidth={w}
                  strokeLinecap="round"
                  opacity="0.72"
                />
              );
            })}

            {/* Input nodes */}
            {Array.from({ length: RC_GRID }, (_, i) => (
              <circle key={`in-${i}`} cx={BP_IN_X} cy={bpNodeY(i)} r={BP_NODE_R} fill="#2a2a2c" />
            ))}
            {/* Output nodes + target rings */}
            {output.map((v, j) => (
              <g key={`on-${j}`}>
                <circle
                  cx={BP_OUT_X}
                  cy={bpNodeY(j)}
                  r={BP_NODE_R + 4}
                  fill="none"
                  stroke={valueToColor(RC_TARGET[j])}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.55"
                />
                <circle
                  cx={BP_OUT_X}
                  cy={bpNodeY(j)}
                  r={BP_NODE_R}
                  fill={valueToColor(v)}
                  stroke="rgba(0,0,0,0.14)"
                  strokeWidth="1"
                />
              </g>
            ))}
          </PlotSvg>
          <ViewCaption>network connections</ViewCaption>
        </div>
      </DualView>

      <PlotLegend style={{ marginTop: '0.75rem' }}>
        <LegendItem color="#3A85C7">negative weight</LegendItem>
        <LegendItem color="#CC785C">positive weight</LegendItem>
        <span style={{ color: '#86868b' }}>
          same values, reconnected — a cell glides to a new slot; its cable end slides to the new neuron
        </span>
      </PlotLegend>

      <Controls>
        <PrimaryButton onClick={reconnect} disabled={searching}>
          {searching ? 'Reconnecting…' : 'Reconnect to train'}
        </PrimaryButton>
        <SecondaryButton onClick={shuffle} disabled={searching}>
          Random shuffle
        </SecondaryButton>
        <SecondaryButton onClick={reset} disabled={searching}>
          Reset
        </SecondaryButton>
        <SecondaryButton onClick={() => setSeed(s => s + 1)} disabled={searching}>
          New init
        </SecondaryButton>
        <Metric>
          <span>
            Loss<strong>{loss.toFixed(2)}</strong>
          </span>
        </Metric>
      </Controls>
    </PlotCard>
  );
};

// ============================================================================
//  Container — teaser + collapsible body
// ============================================================================

const MiniPreview = ({ phase }) => {
  // 5 dots arranged at fixed x; their y values cycle between scattered and sorted.
  // phase: 0..1 (continuous); 0 = scattered, 1 = sorted
  const baseValues = [0.6, -0.4, 0.2, -0.7, 0.5];
  const sortedValues = [...baseValues].sort((a, b) => a - b);
  return (
    <svg viewBox="0 0 84 36" width="84" height="36">
      {baseValues.map((v, i) => {
        const target = sortedValues[i];
        const interp = v + (target - v) * phase;
        const cx = 8 + i * 17;
        const cy = 18 - interp * 12;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill={VECTOR_COLORS[i % VECTOR_COLORS.length]}
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
};

const useTeaserPulse = () => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = now => {
      const t = ((now - start) / 1000) % 4;
      // Smooth ease in/out: 0 → 1 → 0 over 4s
      const x = t < 2 ? t / 2 : (4 - t) / 2;
      const eased = 0.5 - 0.5 * Math.cos(Math.PI * x);
      setPhase(eased);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return phase;
};

const TrainByReconnectDemo = () => {
  const [expanded, setExpanded] = useState(false);
  const [mountedExpanded, setMountedExpanded] = useState(false);
  const [lineageOpen, setLineageOpen] = useState(false);
  const phase = useTeaserPulse();
  const bodyRef = useRef(null);

  const open = () => {
    setMountedExpanded(true);
    requestAnimationFrame(() => setExpanded(true));
  };

  const close = () => {
    setExpanded(false);
    setTimeout(() => setMountedExpanded(false), 800);
  };

  return (
    <Wrapper>
      <TeaserCard onClick={expanded ? close : open} aria-expanded={expanded}>
        <TeaserPreview>
          <MiniPreview phase={phase} />
        </TeaserPreview>
        <TeaserText>
          <TeaserEyebrow>Interactive · NeurIPS 2020</TeaserEyebrow>
          <TeaserTitle>Train by Reconnect — see the idea in motion</TeaserTitle>
          <TeaserSubtitle>
            Two short demos — the observation, and how reconnection alone trains a network.
          </TeaserSubtitle>
        </TeaserText>
        <TeaserArrow>{expanded ? '↑' : '→'}</TeaserArrow>
      </TeaserCard>

      <ExpandableArea expanded={expanded} ref={bodyRef}>
        {mountedExpanded && (
          <DemoSurface>
            <Eyebrow>① The discovery</Eyebrow>
            <Headline>
              Same values.
              <span>Different positions.</span>
            </Headline>
            <Subhead>
              The information learned by SGD appears to be encoded primarily in the <em>ordering</em>{' '}
              of weights rather than their <em>values</em>. Sort within each vector and the four
              distributions collapse onto a single curve.
            </Subhead>
            <SoWPDemo visible={expanded} />

            <Eyebrow style={{ marginTop: '2.25rem' }}>② The consequence</Eyebrow>
            <Headline>
              Reconnect alone.
              <span>The network trains.</span>
            </Headline>
            <Subhead>
              If the information lives in the order, a different <em>assignment</em> of the same
              initial values to a network's connections should already be enough to train. Below
              is a 5×5 weight matrix — each cell is one connection. Reconnection moves a cell to a
              new position. No value is ever changed; the trained matrix is, visibly, a
              <em> permutation of the random init</em>.
            </Subhead>
            <ReconnectDemo visible={expanded} />

            <ImpactCard>
              <ImpactLabel>Where it led</ImpactLabel>
              <ImpactBody>
                This conceptual decoupling — separating <em>what</em> a weight is from <em>where</em>{' '}
                it sits — contributed to a research direction in fixed-weight physical AI
                substrates. Downstream work in that direction has demonstrated up to <strong>238×
                energy efficiency gains</strong> over conventional FPGA-based inference at matched
                accuracy.
              </ImpactBody>
              <LineageButton
                open={lineageOpen}
                onClick={() => setLineageOpen(o => !o)}
              >
                {lineageOpen ? 'Hide downstream lineage' : 'View downstream lineage'}
              </LineageButton>
              <LineageReveal open={lineageOpen}>
                {lineageOpen && <LineageGraph visible={lineageOpen} />}
              </LineageReveal>
            </ImpactCard>

            <Footnote>
              From{' '}
              <a
                href="https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Train-by-Reconnect: Decoupling Locations of Weights from their Values
              </a>{' '}
              (NeurIPS 2020). Plots in ① use independent draws from a standard normal as a
              stand-in for trained-network weight vectors; the paper shows real layers
              (ResNet, VGG, MobileNet, NASNet) exhibit the same collapse when sorted. The 5×5
              network in ② uses a fixed input pattern; <em>Reconnect to train</em> runs a
              short random-swap search over edge assignments — no weight value ever changes.
            </Footnote>

            <CollapseRow>
              <CollapseLink onClick={close}>Collapse ↑</CollapseLink>
            </CollapseRow>
          </DemoSurface>
        )}
      </ExpandableArea>
    </Wrapper>
  );
};

export default TrainByReconnectDemo;
