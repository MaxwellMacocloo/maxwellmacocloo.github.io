---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---


## Research Overview
My research sits at the intersection of $\color{#00a0d1}{\text{statistical methodology,}}$ $\color{#00a0d1}{\text{biostatistics,}}$ $\color{#00a0d1}{\text{causal inference,}}$ and $\color{#00a0d1}{\text{machine learning}}$. I develop flexible but interpretable methods for biomedical and population-health data, where linear models, fixed-effect structures, or off-the-shelf prediction algorithms often miss nonlinear relationships, heterogeneous effects, repeated measurements, and continuous exposures.

My aim is to build methods for the questions these data raise, not just to fit existing models to new datasets. Each method should come with (i) a clear estimand, (ii) an estimator that scales to realistic sample sizes, (iii) theory on consistency, rates, or valid inference, and (iv) software and an application that show it works.

I currently focus on four connected areas: ***penalized nonparametric regression***, ***zero-inflated functional mixed models***, ***causal inference with continuous treatments***, and ***variable selection in varying-coefficient models***. Machine learning appears throughout as a tool for estimation, not only for prediction.

## Penalized nonparametric regression
Rather than assuming $E(Y \mid X) = X^\top \beta$, I work with $E(Y \mid X) = f(X)$ for an unknown smooth $f$. With many predictors, a fully nonparametric $f$ is hard to estimate and to interpret, so I impose structure. The main example is the **sparse additive model**

$$E(Y \mid X) = \beta_0 + \sum_{j=1}^{p} f_j(X_j),$$

where each $f_j$ is expanded in a spline basis and only a few $f_j$ are nonzero. Estimation solves a penalized problem of the form

$$\hat f = \arg\min_{f_1,\ldots,f_p} \; \frac{1}{n}\sum_{i=1}^{n} \Big\(Y_i - \beta_0 - \sum_{j} f_j(X_{ij})\Big\)^2 + \lambda_1 \sum_{j} \|f_j\|_n + \lambda_2 \sum_{j} J(f_j),$$

where $\|f_j\|_n$ is a group-lasso-type sparsity penalty that removes whole components, and $J(f_j) = \int \{f_j''(x)\}^2 dx$ controls roughness.

Questions I work on:
- How to choose $(\lambda_1, \lambda_2)$ in a data-driven way that gives both good prediction and correct selection.
- Convergence rates and selection consistency when $p$ grows with $n$.
- Valid confidence bands for selected components after the data have been used to select them.

**Topics:** sparse additive models · smoothing splines · group lasso · high-dimensional inference · post-selection inference

## Zero-inflated functional mixed models
Many biomedical studies record a response $Y_i(t)$ repeatedly over time with many exact zeros, such as symptom scores, daily physical activity, healthcare use, or microbiome abundances. Standard mixed models handle neither the excess zeros nor the smooth, subject-specific shape of the trajectories.

I use a **two-part (hurdle) functional mixed model** that separates *whether* a response is nonzero from *how large* it is when it is:

$$\text{logit}\, P\{Y_i(t) > 0\} = \alpha_0(t) + X_i^\top \alpha(t) + a_i(t),$$

$$E\{\log Y_i(t) \mid Y_i(t) > 0\} = \mu(t) + X_i^\top \beta(t) + b_i(t).$$

Here $\alpha(t)$ and $\beta(t)$ are smooth functional covariate effects, and $\{a_i(t), b_i(t)\}$ are correlated subject-level random functions, represented through functional principal components. Their correlation captures, for example, that subjects who are active more often also tend to be more active when they are active.

Questions I work on:
- Estimating both parts jointly with penalized splines, using computationally efficient approximations (e.g. Laplace or variational) for the random effects.
- Simultaneous confidence bands for $\alpha(t)$ and $\beta(t)$, and tests of whether a covariate effect varies over time.
- Covariate effects on the overall mean $E\{Y_i(t)\}$, which combines both parts and is often the quantity clinicians care about.

**Topics:** functional data analysis · hurdle and zero-inflated models · functional mixed models · FPCA · longitudinal data

## Causal inference with continuous treatments
Much of causal inference concerns binary treatments, but many exposures in health research are continuous: drug dose, pollution level, time spent in treatment, or neighborhood deprivation. For a continuous treatment $A$ with potential outcomes $Y(a)$, the target is the **dose–response curve**

$$\theta(a) = E\{Y(a)\}, \qquad \text{and contrasts such as} \quad \theta(a_1) - \theta(a_0).$$

Under consistency, no unmeasured confounding ($Y(a) \perp A \mid X$), and positivity (the generalized propensity score $\pi(a \mid x) > 0$), $\theta(a)$ is identified. A doubly robust approach builds the pseudo-outcome

$$\xi(Z) = \frac{Y - \mu(X, A)}{\pi(A \mid X)} \int \pi(A \mid x)\, dP(x) + \int \mu(x, A)\, dP(x),$$

with $\mu(x,a) = E(Y \mid X = x, A = a)$, and then smooths $\xi$ against $A$. The estimate is consistent if either $\mu$ or $\pi$ is estimated well.

Questions I work on:
- **Limited overlap.** Estimating the conditional density $\pi(a \mid x)$ is hard, and small values make estimates unstable. I study covariate-balancing weights for continuous treatments, and estimands such as shift or trimmed interventions that stay stable when overlap is poor.
- **Flexible nuisance estimation.** Using machine learning for $\mu$ and $\pi$ with cross-fitting, while keeping valid pointwise and uniform inference for $\theta(\cdot)$.
- **Heterogeneity.** Estimating how the dose–response curve varies across subgroups, $E\{Y(a) \mid V = v\}$, which matters for precision health and health-disparities research.

**Topics:** dose–response estimation · generalized propensity score · covariate balancing · doubly robust estimation · targeted learning · influence functions · heterogeneous treatment effects

## Variable selection in varying-coefficient models
In many applications the effect of a predictor changes with another variable $Z$, such as age, time since diagnosis, or exposure level. The **varying-coefficient model**

$$Y = \sum_{j=1}^{p} X_j\, \beta_j(Z) + \varepsilon$$

allows this, but when $p$ is large, the main task is to find the active set

$$\mathcal{D} = \{j : \beta_j(\cdot) \not\equiv 0\}.$$

I also want to go further and separate predictors with **varying** effects from those with **constant** effects, since a constant coefficient is simpler to report and estimate. To do this, I expand each $\beta_j(z) = \sum_k \gamma_{jk} B_k(z)$ in a spline basis, split it into a constant part and a varying part, and put separate group penalties on each.

Questions I work on:
- Selection consistency and estimation rates as $p$ grows with $n$.
- Controlling the false discovery rate of the selected set, e.g. through knockoff or data-splitting procedures adapted to functional coefficients.
- Scalable algorithms (block coordinate descent) and screening steps for ultra-high-dimensional settings.

**Topics:** varying-coefficient models · group penalization · false discovery rate control · knockoffs · selection consistency

## Machine learning as a tool for statistical estimation
Machine learning is part of every area above, but mainly as a way to estimate the pieces of a statistical problem rather than as the end goal. A typical example is estimating nuisance functions (outcome regressions, propensity scores, conditional densities) with random forests, gradient boosting, neural networks, or ensembles such as the super learner. These estimates then feed into an estimator that remains valid despite their slow convergence, through Neyman-orthogonal scores and cross-fitting (double/debiased machine learning).

The questions that guide this work are:
- When do flexible learners give $\sqrt{n}$-consistent, asymptotically normal estimates of a causal or structural parameter?
- How can this machinery handle continuous, multi-valued, or time-varying treatments?
- How can we get valid inference after using the data to select a model?
- How can flexibility be combined with interpretable outputs, such as sparse additive components or low-dimensional summaries of heterogeneity?

**Topics:** double/debiased machine learning · cross-fitting · super learner · causal forests · tree ensembles · neural networks

---

> $\color{#00a0d1}{\text{These areas share a common core:}}$ penalized spline estimation of unknown functions, sparsity for high-dimensional problems, and semiparametric theory for valid inference. The long-term goal is methods that are theoretically justified, computationally practical, and useful for clinical research, epidemiology, public health, health disparities, and precision health.
