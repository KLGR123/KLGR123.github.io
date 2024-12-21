---
title: "WEPO: Web Element Preference Optimization for LLM-based Web Navigation"
collection: publications
permalink: /publication/wepo
excerpt: "The rapid advancement of autonomous web navigation has significantly benefited from grounding pretrained Large Language Models (LLMs) as agents. However, current research has yet to fully leverage the redundancy of HTML elements for contrastive training. This paper introduces a novel approach to LLM-based web navigation tasks, called Web Element Preference Optimization (WEPO). WEPO utilizes unsupervised preference learning by sampling distance-based non-salient web elements as negative samples, optimizing maximum likelihood objective within Direct Preference Optimization (DPO). We evaluate WEPO on the Mind2Web benchmark and empirically demonstrate that WEPO aligns user high-level intent with output actions more effectively. The results show that our method achieved the state-of-the-art, with an improvement of 13.8% over WebAgent and 5.3% over the visual language model CogAgent baseline. Our findings underscore the potential of preference optimization to enhance web navigation and other web page based tasks, suggesting a promising direction for future research."
date: 2024-12-14
venue: '39th AAAI Conference on Artificial Intelligence (AAAI-25)'
paperurl: 'https://arxiv.org/pdf/2412.10742'
citation: 'Jiarun Liu, Jia Hao, Chunhong Zhang and Zheng Hu. 2025. WEPO: Web Element Preference Optimization for LLM-based Web Navigation. In Proceedings of the 39th AAAI Conference on Artificial Intelligence (AAAI-25), Philadelphia, Pennsylvania, USA.'
---

The rapid advancement of autonomous web navigation has significantly benefited from grounding pretrained Large Language Models (LLMs) as agents. However, current research has yet to fully leverage the redundancy of HTML elements for contrastive training. This paper introduces a novel approach to LLM-based web navigation tasks, called Web Element Preference Optimization (WEPO). WEPO utilizes unsupervised preference learning by sampling distance-based non-salient web elements as negative samples, optimizing maximum likelihood objective within Direct Preference Optimization (DPO). We evaluate WEPO on the Mind2Web benchmark and empirically demonstrate that WEPO aligns user high-level intent with output actions more effectively. The results show that our method achieved the state-of-the-art, with an improvement of 13.8% over WebAgent and 5.3% over the visual language model CogAgent baseline. Our findings underscore the potential of preference optimization to enhance web navigation and other web page based tasks, suggesting a promising direction for future research.

<div class="paper-image">
    <img src="/images/wepo.png" alt="WEPO Concept" style="border-radius: 10px; width: 800px;">
</div>