# IdeationAgent - AutoGPT Arena Hackathon Submission

Welcome to **IdeationAgent**, our unique solution for brainstorming potential business ideas, crafted specially for the AutoGPT Arena Hackathon.

![Banner Image](https://github.com/Ideation-Agent/IdeationAgent/blob/master/autogpts/IdeationAgent/img/hackathon_banner.png?raw=true)

## Overview

**IdeationAgent** aims to revolutionize the way entrepreneurs brainstorm business ideas. By just providing a LinkedIn URL and your interests, our platform leverages the power of AI to simulate a brainstorming session with four AI agents:
1. **CASEY(Researcher)** - Provides data and insights related to the idea.
2. **PAT(Devil's Advocate)** - Questions the feasibility and challenges of an idea.
3. **Lily(Angel's Advocate)** - Supports and finds potential in every idea.
4. **Steve(Cheif of Staff)** - Summarize discussions, uncover insights, and deliver them to the CEO - you. .

Together, these AI personas ensure a comprehensive discussion, covering all angles of a potential business idea.

## Features

- **User Profile Analysis**: Extracts user's skills, experiences, and expertise from LinkedIn.
- **Dynamic Discussion Simulation**: AI agents interact with each other to provide a 360° view. 
- **Human in the Loop**: The CEO and the domain expert - you, can step in and lead the discussion.
- **Real-time Insights**: Instantaneous fact-based insights from our Researcher agent.
- **Completed Business Plan**: Summarize discussions to provide a completed business plan.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/Ideation-Agent/IdeationAgent
    ```

2. Navigate to the directory:
    ```bash
    cd IdeationAgent
    ```

3. Copy **autogpts/IdeationAgent/.env.template** to **.env** and fill it out to let your agent surf the internet and login linkedin. 
- OPENAI_API_KEY= can be found in [here](https://platform.openai.com/)
- BROWSERLESS_API_KEY= can be found in [here](https://www.browserless.io/)
- SERP_API_KEY= can be found in [here](https://serpapi.com/)
- LINKEDIN_EMAIL= your linkedin ID
- LINKEDIN_PASSWORD= your linkedin PW


4. Start the program (TBD):
    ```bash
    ./run agent IdeationAgent 
    ```

5. Watch the magic happen!

## Demo

Check out a demo video[here](LINK_TO_LIVE_DEMO). 

## Team

- [Jongwon Park](https://github.com/pjw1)
- [Sumin Hwang](https://github.com/smhwang0109)
- [Juhyun Isaac Lee](https://www.linkedin.com/in/isaac-lee-a68b9931/)

## Feedback and Contribution

Feel free to [raise an issue](https://github.com/Ideation-Agent/IdeationAgent) or submit a pull request!

## Acknowledgements

We thank the organizers of the AutoGPT Arena Hackathon for this amazing opportunity.

## License

This project is licensed under the MIT License.

---

# 🌟 AutoGPT: the heart of the open-source agent ecosystem

[![Discord Follow](https://dcbadge.vercel.app/api/server/autogpt?style=flat)](https://discord.gg/autogpt) [![GitHub Repo stars](https://img.shields.io/github/stars/Significant-Gravitas/AutoGPT?style=social)](https://github.com/Significant-Gravitas/AutoGPT/stargazers) [![Twitter Follow](https://img.shields.io/twitter/follow/auto_gpt?style=social)](https://twitter.com/Auto_GPT) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AutoGPT** is your go-to toolkit for supercharging agents. With its modular and extensible framework, you're empowered to focus on:

- 🏗️ **Building** - Lay the foundation for something amazing.
- 🧪 **Testing** - Fine-tune your agent to perfection.
- 👀 **Viewing** - See your progress come to life.

Be part of the revolution! **AutoGPT** stays at the forefront of AI innovation, featuring the codebase for the reigning champion in the Open-Source ecosystem.

---

<p align="center">
  <a href="https://lablab.ai/event/autogpt-arena-hacks">
    <img src="https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fevents%2Fcll6p5cxj0000356zslac05gg%2Fcll6p5cxj0000356zslac05gg_imageLink_562z1jzj.jpg&w=1080&q=75" alt="AutoGPT Arena Hacks Hackathon" />
  </a>
</p>
<p align="center">
  <strong>We're hosting a Hackathon!</strong>
  <br>
  Click the banner above for details and registration!
</p>

---

## 🥇 Current Best Agent: AutoGPT

Among our currently benchmarked agents, AutoGPT scores the best. This will change after the hackathon - the top-performing generalist agent will earn the esteemed position as the primary AutoGPT 🎊

📈 To enter, submit your benchmark run through the UI.

## 🌟 Quickstart

- **To build your own agent** and to be eligible for the hackathon, follow the quickstart guide [here](https://github.com/Significant-Gravitas/AutoGPT/blob/master/autogpts/forge/tutorials/001_getting_started.md). This will guide you through the process of creating your own agent and using the benchmark and user interface.

- **To activate the best agent** follow the guide [here](https://github.com/Significant-Gravitas/AutoGPT/blob/master/autogpts/autogpt/README.md).

Want to build your own groundbreaking agent using AutoGPT? 🛠️ There are three major components to focus on:

### 🏗️ the Forge

**Forge your future!** The `forge` is your innovation lab. All the boilerplate code is already handled, letting you channel all your creativity into building a revolutionary agent. It's more than a starting point, it's a launchpad for your ideas. All tutorials are located [here](https://github.com/Significant-Gravitas/AutoGPT/tree/master/autogpts/forge/tutorials).

📘 [Learn More](https://github.com/Significant-Gravitas/AutoGPT/tree/master/autogpts/forge)

### 🎯 the Benchmark

**Test to impress!** The `benchmark` offers a stringent testing environment. Our framework allows for autonomous, objective performance evaluations, ensuring your agents are primed for real-world action.

📘 [Learn More](https://github.com/Significant-Gravitas/AutoGPT/blob/master/benchmark)

### 🎮 the UI

**Take Control!** The `frontend` is your personal command center. It gives you a user-friendly interface to control and monitor your agents, making it easier to bring your ideas to life.

📘 [Learn More](https://github.com/Significant-Gravitas/AutoGPT/tree/master/frontend)

---

### 🔄 Agent Protocol

🔌 **Standardize to Maximize!** To maintain a uniform standard and ensure seamless compatibility, AutoGPT employs the [agent protocol](https://agentprotocol.ai/) from the AI Engineer Foundation. This standardizes the communication pathways from your agent to the frontend and benchmark.

### 🤔 Questions? Problems? Suggestions?

#### Get help - [Discord 💬](https://discord.gg/autogpt)

To report a bug or request a feature, create a [GitHub Issue](https://github.com/Significant-Gravitas/AutoGPT/issues/new/choose). Please ensure someone else hasn’t created an issue for the same topic.

<p align="center">
  <a href="https://star-history.com/#Significant-Gravitas/AutoGPT&Date">
    <img src="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date" alt="Star History Chart">
  </a>
</p>
