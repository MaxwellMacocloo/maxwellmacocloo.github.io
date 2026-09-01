---
layout: single
title: "A Hierarchical Tree of Contributors to Computer Model Calibration and Active Learning for Calibration"
collection: posts
permalink: /posts/2026-05-20-computermodelcalibrationcontributors/
date: 2026-05-20
excerpt: "A hierarchical tree organizing the major contributors to computer model calibration, spanning theory, methodology and apllcations."
tags: [computer-experiments, calibration, uncertainty quantification, active learning, gaussian-processes]
mermaid: true
---

Computer model calibration involves using both physical and simulation observations to learn unknown parameters of an expensive simulator while accounting for model discrepancy. This field has grown into a substantial sub-field of statistics and uncertainty quantification over the past two and a half decades. To get a better grasp of the field, I organized the major contributors (to the best of my knowledge) into a hierarchical tree, showing how the field branched out from a single foundational paper and where active learning fits into the picture.

## The lineage at a glance

```mermaid
flowchart TD
    KOH["<b>Kennedy &amp; O'Hagan (2001)</b><br/>Bayesian calibration of computer models"]

    subgraph PRE["Foundational predecessors"]
        direction LR
        P1["Sacks, Welch,<br/>Mitchell, Wynn (1989)<br/><i>GP emulators, DACE</i>"]
        P2["Currin, Mitchell,<br/>Morris, Ylvisaker (1991)<br/><i>Bayesian prediction for codes</i>"]
        P3["Craig, Goldstein,<br/>Rougier, Seheult (2001)<br/><i>Bayes linear, history matching</i>"]
    end

    PRE -.precedes.-> KOH

    KOH --> B1["<b>1. High-dimensional &amp;<br/>multivariate output</b>"]
    KOH --> B2["<b>2. Identifiability &amp;<br/>theoretical analysis</b>"]
    KOH --> B3["<b>3. Validation &amp;<br/>modular calibration</b>"]
    KOH --> B4["<b>4. Scalability, trees<br/>&amp; nonstationarity</b>"]
    KOH --> B5["<b>5. Active learning &amp;<br/>sequential design</b>"]

    B1 --> B1a["Higdon, Kennedy, Cavendish,<br/>Cafeo, Ryne (2004)"]
    B1a --> B1b["Bayarri, Berger, Cafeo et al.<br/>(2007b) — wavelet basis"]
    B1b --> B1c["Higdon, Gattiker, Williams,<br/>Rightley (2008) — SVD basis"]
    B1c --> B1d["Higdon, Gattiker, Lawrence et al.<br/>(2013) — ensemble Kalman"]

    B2 --> B2a["Tuo &amp; Wu (2015, 2016)<br/><i>L₂ calibration, consistency</i>"]
    B2a --> B2b["Brynjarsdóttir &amp; O'Hagan (2014)<br/><i>Informative priors on discrepancy</i>"]
    B2b --> B2c["Plumlee (2017)<br/><i>Orthogonal GP priors</i>"]
    B2c --> B2d["Gu &amp; Wang (2018); Wong, Storlie,<br/>Lee (2017); Tuo (2019); Xie &amp; Xu (2021)"]

    B3 --> B3a["Bayarri, Berger, Paulo,<br/>Sacks et al. (2007a)<br/><i>Validation framework</i>"]
    B3a --> B3b["Liu, Bayarri, Berger (2009)<br/><i>Modularization</i>"]
    B3b --> B3c["Vernon, Goldstein, Bower (2010)<br/><i>History matching, galaxies</i>"]
    B3c --> B3d["Williams, Higdon, Gattiker et al. (2006);<br/>Joseph &amp; Melkote (2009); Goh et al. (2013)"]

    B4 --> B4a["Pratola &amp; Higdon (2016)<br/><i>BART calibration</i>"]
    B4a --> B4b["Konomi, Karagiannis,<br/>Lai, Lin (2017)<br/><i>Bayesian treed calibration</i>"]
    B4b --> B4c["Karagiannis, Konomi, Lin (2019)<br/><i>Input-dependent calibration</i>"]
    B4c --> B4d["Huang, Gramacy et al. (2020)<br/><i>On-site surrogates</i>"]
    B4d --> B4e["Marmin &amp; Filippone (2022);<br/>Brown (2024) — deep GP, nonparam."]

    B5 --> B5a["Damblin, Barbillon, Keller et al. (2018)<br/><i>Adaptive designs, EI</i>"]
    B5a --> B5b["Kandasamy, Schneider,<br/>Póczos (2015)<br/><i>Active posterior learning</i>"]
    B5b --> B5c["Gardner, Lord, Barthorpe (2019)<br/><i>Sequential history matching</i>"]
    B5c --> B5d["Koermer, Loda, Noble,<br/>Gramacy (2023, 2024)<br/><i>IMSPE within KOH</i>"]
    B5d --> B5e["Sürer, Plumlee, Wild (2024)<br/><i>EIVAR for posterior learning</i>"]
    B5e --> B5f["Lartaud, Humbert, Garnier (2024)<br/><i>Weighted IMSPE, inverse problems</i>"]

    AL_ANT["<b>Active-learning antecedents</b><br/>Seo et al. (2000) — ALC<br/>Jones, Schonlau, Welch (1998) — EGO/EI<br/>Binois, Gramacy, Ludkovski (2018) — IMSPE"]
    AL_ANT -.toolkit for.-> B5

    REVIEW["<b>Cross-cutting</b><br/>Gramacy (2020) — textbook<br/>Sung et al. (2024) — review<br/>Storlie — categorical parameters"]
    REVIEW -.synthesizes.-> KOH

    classDef root fill:#EEEDFE,stroke:#534AB7,color:#26215C
    classDef pre fill:#FAECE7,stroke:#993C1D,color:#4A1B0C
    classDef b1 fill:#E6F1FB,stroke:#185FA5,color:#042C53
    classDef b2 fill:#E1F5EE,stroke:#0F6E56,color:#04342C
    classDef b3 fill:#FBEAF0,stroke:#993556,color:#4B1528
    classDef b4 fill:#EEEDFE,stroke:#534AB7,color:#26215C
    classDef b5 fill:#FAEEDA,stroke:#854F0B,color:#412402
    classDef meta fill:#F1EFE8,stroke:#5F5E5A,color:#2C2C2A

    class KOH root
    class P1,P2,P3 pre
    class B1,B1a,B1b,B1c,B1d b1
    class B2,B2a,B2b,B2c,B2d b2
    class B3,B3a,B3b,B3c,B3d b3
    class B4,B4a,B4b,B4c,B4d,B4e b4
    class B5,B5a,B5b,B5c,B5d,B5e,B5f b5
    class AL_ANT,REVIEW meta
```

## The Root: Kennedy and O'Hagan (2001)

Essentially all modern work in this area traces back to Marc Kennedy and Anthony O'Hagan's 2001 paper *[Bayesian Calibration of Computer Models](https://watermark02.silverchair.com/jrsssb_63_3_425.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAA4EwggN9BgkqhkiG9w0BBwagggNuMIIDagIBADCCA2MGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMwwaZD7paLDJ6IyErAgEQgIIDNJtztF61FcoGiheB2Mbp8rq6hNL3iuTDA-R2ArolTy9SGtst1rB9SrFDfoSAJdN4wMNLFbWIFPvwdoPOhy0FD-k3rhKgIZSnae4pm-_WUssvjxay2AW9bSxdzwhIV_OOxzC1m9hXcy1Nu7Mqt-y-1RQm9q-qiLRIKfNqlfAxcFzFlWCFFk_B0OrFwICf1AtPjsOrm7B1g-UdnoHFq6cTxk7YkiU6uu3Ue2aJHrPY8JfXeLjbI0WP1Y9LXwaHdUeZCoAt14QXLPWA9Z6XS1MVwfjYwnX3mJvJSNv5iuTJzv0v9JTSpFzmMwfGB_Id1hGsocov1LkolpetS0mrDpZMGZGrFiuZbxslPuB7tBgA3ggekCtN5fwpWk0mjPIfmnqO9GpeuLvm8gOqsdi-x6EX81K4oywQ3QlUb0cUJtkX7y8PtomroM4uJl97Ct7r5slcs0bSj3r_a1MiAV6hE5LAqqB9bNT1p7TL4c6fLD8PjRt0eNq8sj0PniEY9-Hei7J_vB-XBaflq2AZ3nmRHN5wr9U1tw6ANxlkvMbUVE1RsnNlpg2U9lDJqsk37LcEgpl8jY6cRxYoIEdkpPyrIFwTdw_03J0iioks1C7PpXWROq3KXO-OkrAapuRX_QodpRn975f05XJQUfpcbiE6nrd36uvTK2CyvZ71Kqz36wjbqqaYJqqzAD_cYOb_YVj4UZ19nIEvg-V3dFeopGnW7VEeFg-iUlrVrYVb5ZXVm3FNrrHuxizfSfL98jpZxHBWJTGahi-m0NjzxPMDOENiP1McgtS33ny8wqntBMW8k7EKBvWvS2vmoHK15MPXFahy9Tpl5by0fkZmNOGMtxE1mQlTjv_LMQQ-vIF9Jb8FM97rBdGBlwE07DFEK40AJxvkLmru6Z2MzNM0vhyl17o8pJ0cPY0F2oGe3lHlSeZd8fG47U1pVn3pWj7P4eMPv-ItKmstqb6uUr3_-9yfTF0bCT8xyyOdBWX7-YOMlnPGuBndrQ6ZIqx_ArTUjXExrpehTC4-XRTGd77pA7ntN5dnQyv1DJZUUyvMmmaGOEUyPfdVbLpZ3zvz68O2PwYhnIbhx-RI9FoFKac)* published in  *JRSSB*. They introduced the coupled Gaussian process formulation: one GP as an emulator of the expensive simulator, a second GP for the model-discrepancy (or "bias") term, along with a Bayesian inferential machinery for jointly learning the calibration parameters and the discrepancy. Their earlier [2000 *Biometrika* paper on multi-fidelity codes](https://www.jstor.org/stable/2673557?seq=3) is a direct predecessor.

That paper sits on top of the broader computer-experiments tradition that preceded it:

- **[Sacks, Welch, Mitchell, Wynn (1989)](https://projecteuclid.org/journalArticle/Download?urlId=10.1214%2Fss%2F1177012413)** — Gaussian Process emulation and the design/analysis of computer experiments.
- **[Currin, Mitchell, Morris, Ylvisaker (1991)](https://www2.stat.duke.edu/courses/Spring14/sta961.01/ref/CurrMitcMorrYlvi1991.pdf)** — Bayesian prediction for deterministic computer codes.
- **[Craig, Goldstein, Rougier, Seheult (2001)](https://www.jstor.org/stable/pdf/2670309.pdf?refreqid=fastly-default%3Aec17bd610d3b0b2fb3a1fb2e1f324c65&ab_segments=&initiator=&acceptTC=1)** — Bayes linear updating /History matching lineage  .

## The Five Major Branches

After 2001, the field grew along roughly five threads. Some authors can appear in multiple branches (this is actually quite frequent). The placement below reflects what I think is the headline contribution (mostly papers I have read).

### 1. High-dimensional and multivariate output

This branch tackles how to calibrate when the simulator returns functional, spatial, image-like, or otherwise high-dimensional output. The dominant figures are Dave Higdon and collaborators at Los Alamos, plus the Bayarri–Berger SAMSI group.

- **[Higdon, Kennedy, Cavendish, Cafeo, Ryne (2004)](https://www2.stat.duke.edu/courses/Spring14/sta961.01/ref/HigdKennEtal2004.pdf)** — Combining field data and computer simulations (SIAM J. Sci. Comput.); a seminal follow-up to KOH with a worked engineering example.
- **[Bayarri, Berger, Cafeo, Garcia-Donato, Liu, Palomo, Parthasarathy, Paulo, Sacks, Walsh (2007b)](https://arxiv.org/pdf/0711.3271)** — *Computer Model Validation with Functional Output* (Annals of Statistics); wavelet basis approach.
- **[Higdon, Gattiker, Williams, Rightley (2008)](https://www.tandfonline.com/doi/epdf/10.1198/016214507000000888?needAccess=true)** — *Computer Model Calibration Using High-Dimensional Output* (JASA); SVD basis representations.
- **[Higdon, Gattiker, Lawrence, Jackson, Tobis, Pratola, Habib, Heitmann, Price (2013)](https://www.tandfonline.com/doi/epdf/10.1080/00401706.2013.842936?needAccess=true)** — Ensemble Kalman Filter-based calibration.

### 2. Identifiability and theoretical analysis

A long-standing concern with KOH is that the calibration parameters and the discrepancy function are jointly non-identifiable. This branch establishes the asymptotic theory and proposes corrective estimators.

- **Tuo and Wu ([2015](https://projecteuclid.org/journalArticle/Download?urlId=10.1214%2F15-AOS1314), [2016](https://epubs.siam.org/doi/10.1137/151005841))** — proved that a simplified KOH estimator is L₂-inconsistent and defined the calibration parameter as the L₂ projection.
- **[Brynjarsdóttir and O'Hagan (2014)](https://iopscience.iop.org/article/10.1088/0266-5611/30/11/114007/pdf)** — articulated the role of informative priors on the discrepancy in resolving identifiability in practice.
- **[Plumlee (2017)](https://www.asc.ohio-state.edu/statistics/comp_exp/jour.club/Bayesian_calibration_of_inexact_computer_models_Plumlee_2017.pdf)** — Orthogonal Gaussian Process priors that impose an orthogonality constraint on the bias function.
- **[Gu and Wang (2018)](https://epubs.siam.org/doi/10.1137/17M1159890?__cf_chl_tk=YH53.W71s4cV0O8y7DA6nC3LdWQEMPLO545dBANjSpw-1779598257-1.0.1.1-fLeXj3qI0GgwlrV5.FUFJIQ0sMYwMoiRJHqWi5InZi0)** — Scaled Gaussian Processes that constrain the "size" of the bias function.
- **[Wong, Storlie, Lee (2017)](https://rss.onlinelibrary.wiley.com/doi/epdf/10.1111/rssb.12182?saml_referrer)** — Frequentist theory for KOH-type estimators.
- **[Tuo (2019)](https://epubs.siam.org/doi/10.1137/17M1128769)** — projected kernel calibration with semiparametric efficiency.
- **[Xie and Xu (2021)](https://www.tandfonline.com/doi/epdf/10.1080/01621459.2020.1753519?needAccess=true)** — treats the calibration parameter as a functional of the bias function via a projected Bayesian approach.

### 3. Validation and modular calibration

This branch grew out of the SAMSI computer-models program. It is especially influential among practitioners who want to decouple emulator fitting from calibration inference.

- **[Bayarri, Berger, Paulo, Sacks, Cafeo, Cavendish, Lin, Tu (2007a)](https://www.tandfonline.com/doi/epdf/10.1198/004017007000000092?needAccess=true)** — *A Framework for Validation of Computer Models* (Technometrics).
- **[Liu, Bayarri, Berger (2009)](https://projecteuclid.org/journals/bayesian-analysis/volume-4/issue-1/Modularization-in-Bayesian-analysis-with-emphasis-on-analysis-of-computer/10.1214/09-BA404.pdf)** — modularization of the KOH framework, where the emulator is fit first and held fixed during calibration.
- **[Vernon, Goldstein, Bower (2010)](https://arxiv.org/pdf/1405.4976)** — history matching applied to galaxy formation; a leading non-KOH alternative.
- **[Williams, Higdon, Gattiker, Moore, McKay, Keller-McNulty (2006)](https://projecteuclid.org/journalArticle/Download?urlId=10.1214%2F06-BA125)** — combining simulations with field data for engineering systems.
- **[Joseph and Melkote (2009)](https://www.tandfonline.com/doi/epdf/10.1080/00224065.2009.11917791?needAccess=true); [Goh, Bingham, Holloway, Grosskopf, Kuranz, Rutter (2013)](https://www.tandfonline.com/doi/epdf/10.1080/00401706.2013.838910?needAccess=true)** — engineering-oriented adjustments and calibration with multiple simulators.

### 4. Scalability, trees, and nonstationarity

This branch attacks the cost of calibration when emulators must be large, nonstationary, or otherwise hard to fit with a single global GP.

- **Pratola and Higdon (2016)** — BART (Bayesian Additive Regression Trees) calibration.
- **Konomi, Karagiannis, Lai, Lin (2017)** — Bayesian treed calibration applied to carbon capture (JASA).
- **Karagiannis, Konomi, Lin (2019)** — input-dependent Bayesian model calibration.
- **Huang, Gramacy, Binois, Libraschi (2020)** — on-site surrogates (OSS) that make fully Bayesian calibration feasible at scale.
- **Marmin and Filippone (2022)** — deep GPs for both the emulator and the discrepancy.
- **Brown (2024)** — nonparametric functional calibration.

### 5. Active learning and sequential design

This is the most recently active branch and the one most directly relevant to anyone deciding which simulator run to perform next. The general active-learning machinery (Seo et al. (2000) ALC, Jones, Schonlau, Welch (1998) EGO/EI, Binois, Gramacy, Ludkovski (2018) IMSPE) is the toolkit that this branch adapts to the calibration setting.

- **Damblin, Barbillon, Keller, Pasanisi, Parent (2018)** — adaptive numerical designs for code calibration using an expected-improvement-style criterion (SIAM/ASA JUQ).
- **Kandasamy, Schneider, Póczos (2015)** — Bayesian active learning of the posterior via GP emulation of the log-likelihood.
- **Gardner, Lord, Barthorpe (2019)** — sequential Bayesian history matching for model calibration.
- **Koermer, Loda, Noble, Gramacy (2023, 2024)** — IMSPE criteria specifically within the Kennedy–O'Hagan calibration framework; the paper *Augmenting a Simulation Campaign for Hybrid Computer Model and Field Data Experiments* (arXiv:2301.10228) is the headline reference.
- **Sürer, Plumlee, Wild (2024)** — expected integrated variance (EIVAR) criterion for accurately learning the posterior density of parameters with multivariate output.
- **Lartaud, Humbert, Garnier (2024)** — weighted IMSPE criterion for Bayesian inverse problems.

## Cross-cutting and applied contributors

A handful of authors are best understood as cross-cutting rather than belonging to one branch:

- **Robert Gramacy** — his 2020 textbook *Surrogates: Gaussian Process Modeling, Design, and Optimization for the Applied Sciences* is the standard modern reference, and he is co-author on much of the recent active-learning-for-calibration work.
- **Chih-Li Sung** — first author on the 2024 WIREs Computational Statistics review of the KOH framework, which is the most current synthesis.
- **Curtis Storlie** — calibration with categorical parameters.

Application-driven authors who have shaped methodology through their use cases include Han, Santner, Rawlinson (biomechanics); Murphy et al. (climate prediction); Farah, Birrell, Conti, De Angelis, Presanis, Lopes, Sung & Hung (epidemiology); Wang, Chen, Tsui (manufacturing); Allaire, Zhou (aerospace); and Thelen et al. and Kenett & Bortman (digital twins).

<!-- ## Where active learning fits into the picture

Active learning enters the calibration story specifically as a way to choose simulator inputs to evaluate next, when each simulator run is expensive and only a handful can be afforded. The key distinction from general Bayesian optimization is the *target*: in calibration we are not optimizing the simulator output — we are trying to (a) accurately recover the posterior over calibration parameters, (b) make accurate predictions of the physical system under new conditions, or (c) both. This changes the acquisition function. EI-style criteria (Damblin et al.) push toward the posterior mode but can starve the rest of the posterior surface. IMSPE-style criteria (Koermer et al., Sürer et al., Lartaud et al.) target predictive accuracy across the input space and tend to be the more principled choice when the downstream goal is prediction or posterior inference rather than point estimation. -->

## A single recent survey to anchor further reading

If you want one paper that ties most of the above together, Sung et al. (2024), *[A Review on Computer Model Calibration](https://wires.onlinelibrary.wiley.com/doi/pdf/10.1002%2Fwics.1645)*, WIREs Computational Statistics, is the most current synthesis and was a useful spine for this tree.

## References (selected)

- Kennedy, M. C., & O'Hagan, A. (2001). Bayesian calibration of computer models. *JRSSB*, 63(3), 425–464.
- Higdon, D., Kennedy, M., Cavendish, J. C., Cafeo, J. A., & Ryne, R. D. (2004). Combining field data and computer simulations for calibration and prediction. *SIAM J. Sci. Comput.*, 26, 448–466.
- Higdon, D., Gattiker, J., Williams, B., & Rightley, M. (2008). Computer model calibration using high-dimensional output. *JASA*, 103, 570–583.
- Bayarri, M. J., et al. (2007a). A framework for validation of computer models. *Technometrics*, 49, 138–.
- Bayarri, M. J., et al. (2007b). Computer model validation with functional output. *Annals of Statistics*, 35(5), 1874–1906.
- Tuo, R., & Wu, C. F. J. (2015). Efficient calibration for imperfect computer models. *Annals of Statistics*, 43(6), 2331–2352.
- Plumlee, M. (2017). Bayesian calibration of inexact computer models. *JASA*, 112(519), 1274–1285.
- Brynjarsdóttir, J., & O'Hagan, A. (2014). Learning about physical parameters: the importance of model discrepancy. *Inverse Problems*, 30(11), 114007.
- Damblin, G., Barbillon, P., Keller, M., Pasanisi, A., & Parent, E. (2018). Adaptive numerical designs for the calibration of computer codes. *SIAM/ASA JUQ*, 6(1), 151–179.
- Koermer, S., Loda, J., Noble, A., & Gramacy, R. B. (2024). Augmenting a simulation campaign for hybrid computer model and field data experiments. arXiv:2301.10228.
- Sürer, Ö., Plumlee, M., & Wild, S. M. (2024). Sequential Bayesian experimental design for calibration of expensive simulation models. *Technometrics*.
- Sung, C.-L., et al. (2024). A review on computer model calibration. *WIREs Computational Statistics*, e1645.
- Gramacy, R. B. (2020). *Surrogates: Gaussian Process Modeling, Design, and Optimization for the Applied Sciences*. Chapman & Hall/CRC.
