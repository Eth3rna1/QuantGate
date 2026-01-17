# QuantGate
A quantitative decision-support system for intraday market regime detection and trade selectivity.

## About
QuantGate is designed to function as a cognitive decision-filtering system rather than a signal generator. Its purpose is to improve decision coherence by confirming constituent-level market structure and flow before permitting trades, while actively restricting participation during non-tradable or incoherent market regimes.

The system analyzes real-time intraday percent changes of SPY’s top constituent stocks across multiple timeframes. This information is aggregated and visualized through a web-based interface to represent direction, magnitude, and persistence of movement. By externalizing judgment and enforcing selectivity, QuantGate aims to reduce emotional trading, FOMO-driven entries, and overtrading during choppy or transitional conditions.

QuantGate does not attempt to predict price movements. Instead, it provides contextual clarity to help determine whether current market conditions are aligned with a predefined trading strategy.


## Project Overview
This project is a **decision-support system for intraday market regime detection and trade selectivity**, built to reduce noise, restrict low-quality trades, and externalize judgment under uncertainty.

Rather than optimizing for trade frequency or constant engagement, the system is designed to **gate trades**, identify non-tradable conditions, and improve decision coherence through real-time constituent-level market structure analysis.

The core premise is simple:
> **Index price action is only meaningful when supported by constituent flow.**

## Purpose
Most discretionary trading losses do not come from poor technical knowledge, but from:

* Trading in chop or transitional regimes

* Acting on incomplete or misleading signals

* Emotional overrides (FOMO, impatience, overconfidence)

* Overtrading due to unclear market state

This system exists to prevent those failures by answering one primary question:
> **Is the current market environment tradable for my strategy - yes or no?**

If the answer is *no*, the correct action is inaction.

## Core Concept
The system analyzes **real-time intraday percent changes** of top SPY constituent stocks using live market data streams.
It aggregates and visualizes this information to represent:

* **Direction** (buying vs selling pressure)

* **Magnitude** (strength of movement)

* **Persistence** (duration and stability of alignment)

These dimensions are encoded as visual indicators (bubbles) that evolve over time, allowing rapid assessment of:

* Market regime (trend vs chop)

* Breadth confirmation or divergence

* Multi-timeframe alignment

The goal is not prediction, but **contextual clarity**.

## Design Philosophy
* **Selectivity over activity**<br/>
    Fewer, higher-quality decisions outperform frequent marginal ones.

* **Systems over discretion**<br/>
    Rules and filters should veto trades before emotions can rationalize them.

* **Capital-independent discipline**<br/>
    Increased capital should scale position size, not decision frequency.

* **Regime awareness first, entries second**<br/>
    If the environment is wrong, no setup is valid.

* **Human-in-the-loop, not human-as-the-loop**<br/>
    The system informs and constrains decisions; it does not execute trades.

## Intended Outcome

When functioning correctly, the system should:

* Reduce trade frequency

* Increase confidence only when conditions are aligned

* Eliminate trades during chop and unclear regimes

* Lower emotional load during execution

* Improve post-trade clarity and review quality

Profitability is a downstream effect of better decisions, not the primary design metric.

