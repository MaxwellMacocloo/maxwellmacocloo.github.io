---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---


## Research Overview
My research sits at the intersection of $\color{#00a0d1}{\text{statistical theory,}}$ $\color{#00a0d1}{\text{probabilistic computation,}}$ and $\color{#00a0d1}{\text{scientific inference}}$. I enjoy developing principled frameworks for reasoning under uncertainty in complex, high-dimensional systems. 

Specifically, my research spans the topics of ***uncertainty quantification, surrogate modeling, Bayesian inverse problems and inference, Bayesian optimization*** and ***generative modeling***, with applications in computer experiments, engineering sciences, and mission-critical physical systems.

<!--**Keywords:** <small> $\color{#00a0d1}{\text{Bayesian statistics}}$ · $\color{#00a0d1}{\text{MCMC}}$ · $\color{#00a0d1}{\text{Inverse problems}}$ · $\color{#00a0d1}{\text{Gaussian processes}}$ · $\color{#00a0d1}{\text{Optimisation}}$ · $\color{#00a0d1}{\text{Scientific ML}}$ <small> -->

## Bayesian inverse problems
$\color{#00a0d1}{\text{Inverse problems ask:}}$ given observations $y = \mathcal{G}(u) + \varepsilon$, can we recover the unknown field or parameter $u$? The forward operator $\mathcal{G}$ is typically a differential equation or physical model, making direct inversion ill-posed in the [Hadamard sense](https://www.statisticshowto.com/well-posed-ill/).
 
The Bayesian formulation regularises this naturally: by placing a prior $\pi_0(u)$ over the unknown and conditioning on data, the posterior
 
$$\pi(u \mid y) \propto \mathcal{L}(y \mid u)\, \pi_0(u)$$
 
encodes full uncertainty over plausible reconstructions. My work focuses on developping scalable computational methods for characterising this posterior and frequentist approaches to this problem with uncertainty guarantees.

<!--**function-space settings**, where $u$ lives in an infinite-dimensional Hilbert or Banach space, exploiting structure in the forward operator to make inference tractable.-->
 
**Topics:** Computer Model Calibration  · Tikhonov–Bayes connections · [pCN algorithms](https://en.wikipedia.org/wiki/Preconditioned_Crank–Nicolson_algorithm) · [posterior consistency](https://andrewcharlesjones.github.io/journal/posterior-consistency.html)

## Uncertainty quantification 
Complex computational models, from climate simulators to structural solvers, propagate uncertainty in a way that is rarely tractable analytically. $\color{#00a0d1}{\text{UQ provides the mathematical}}$ $\color{#00a0d1}{\text{toolkit}}$ to characterise how $\color{#00a0d1}{\text{input uncertainty p(x)}} $  maps to $\color{#00a0d1}{\text{output variability p(y)}},$ through a black-box or grey-box model $y = f(x)$.
 
My research addresses both:
- $\color{#00a0d1}{\text{Forward propagation:}}$  using surrogate modelling (typically GPs but trying to learn more about polynomial chaos expansions and neural networks nowadays) to push distributions through expensive simulators.
- $\color{#00a0d1}{\text{Sensitivity analysis:}}$ — via Sobol' indices and variance decompositions to identify which inputs drive output uncertainty, formally expressed as
$$S_i = \frac{\mathbb{V}[\mathbb{E}[Y \mid X_i]]}{\mathbb{V}[Y]}$$
 
I am particularly interested in settings where $f$ is expensive to evaluate, coupling emulator construction with rigorous statistical estimation of uncertainty measures and their confidence intervals.
 
**Topics:** Gaussian Process (and their variants) emulation · Sobol' indices · error propagation · conformal prediction

## Bayesian Optimization & Optimization under uncertainty
When the objective $f: \mathcal{X} \to \mathbb{R}$ is expensive, noisy, or unknown, classical optimisation methods are inapplicable. $\color{#00a0d1}{\text{Bayesian optimisation (BO) maintains a probabilistic}}$ $\color{#00a0d1}{\text{surrogate and sequentially evalautes points that maximise an acquisition }}$ $\color{#00a0d1}{\text{ function balancing exploration and exploitation,}}$ such as expected improvement
 
$$\mathrm{EI}(x) = \mathbb{E}\!\left[\max(f(x) - f^*, 0)\right].$$
 
Beyond standard BO, I am interested in **optimisation under uncertainty**, where the objective itself involves an expectation over stochastic inputs:
 
$$\min_{x \in \mathcal{X}}\; \mathbb{E}_{\xi}\!\left[F(x, \xi)\right]$$
 
requiring joint surrogate models over both inputs variables and "hyperparameters". Applications span experiment design, hyperparameter tuning, and robust engineering design.
 
**Topics:** Sequential design · acquisition functions · [Thompson sampling](https://web.stanford.edu/~bvr/pubs/TS_Tutorial.pdf) · batch BO · 
<!--multi-fidelity methods-->
 
## Active learning (AL)
$\color{#00a0d1}{\text{Active learning addresses the data-efficiency problem:}}$ given a budget of $N$ labelled observations, which input location $x_1, \ldots, x_N \in \mathcal{X}$ should be selected to maximise learning? The Bayesian framing connects directly to optimal experimental design, choosing experiments to maximise expected information gain
 
$$\mathbb{E}\!\left[D_{\mathrm{KL}}\!\left(\pi(\theta \mid y)\;\|\;\pi(\theta)\right)\right].$$
 
I aim to develop AL strategies for scientific and engineering applications where evaluations are costly, including batch-sequential designs and possibly online settings. A recurring theme is the interplay between the surrogate model's epistemic uncertainty and the practical cost associated with new input location , particularly in settings with structured input spaces or physics-based constraints.
 
**Topics:** optimal experimental design · information gain · acquisition functions · surrogates · ALM/ALC/ALD

## Monte carlo inference
Posterior distributions $\pi(\theta \mid y) \propto \pi(y \mid \theta)\,\pi(\theta)$ rarely admit a closed form, and the normalising constant is intractable in high-dimensions (typically $d > 5$). $\color{#00a0d1}{\text{Monte Carlo inference replaces this integral}}$ $\color{#00a0d1}{\text{with an empirical average over samples}}$ drawn from the posterior, so that for $\theta^{(1)}, \ldots, \theta^{(N)} \sim \pi(\theta \mid y)$,

$$\mathbb{E}[g(\theta) \mid y] \approx \frac{1}{N}\sum_{i=1}^N g(\theta^{(i)}),$$

with error decaying at the canonical $O(N^{-1/2})$ rate, independent of the dimension of $\theta$.

My work draws on:
- $\color{#00a0d1}{\text{MCMC:}}$ Metropolis–Hastings, Gibbs, and Hamiltonian Monte Carlo, constructing a Markov chain whose stationary distribution is the target posterior.
- $\color{#00a0d1}{\text{Importance sampling & SMC:}}$ reweighting samples from a tractable proposal $q(\theta)$ via $w(\theta) = \pi(\theta \mid y)/q(\theta)$ when direct sampling is infeasible.

I am particularly interested in surrogate-assisted sampling, where an expensive forward model embedded in the likelihood (for example, a PDE solver is replaced by a Gaussian process emulator), making chains feasible at scale while propagating emulator uncertainty back into the posterior.

**Topics:** MCMC (Metropolis-Hastings, HMC) · importance sampling · sequential Monte Carlo · surrogate-assisted inference · convergence diagnostics

 
---
 
> $\color{#00a0d1}{\text{These areas are deeply interconnected!}}$ Monte Carlo inference underpins Bayesian inverse problems; active learning drives data collection for UQ; Bayesian optimisation uses the same GP machinery as uncertainty propagation.
