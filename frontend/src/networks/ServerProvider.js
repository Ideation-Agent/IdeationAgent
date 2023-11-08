import axios from "axios";

const baseUrl = "http://localhost:8010";

class ServerProvider {
  async checkBio({ url }) {
    try {
      const api = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await api.post("/check_bio/", {
        linkedin_url: url,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      // return false;
      return {
        // profileImage: "https:",
        profileName: "string",
        linkedin_summary: "string",
      };
    }
  }

  async genInitIdea({ sum, interests }) {
    try {
      const api = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Gen Idea Method");
      console.log("sum", sum);
      console.log("interests", interests);

      const reponse = await api.post("/generate_initial_ideas/", {
        linkedin_summary: sum,
        interests,
      });

      console.log(reponse.data);
      console.log("=========================");
      return reponse.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async dialog({ log, input, speaker }) {
    try {
      const api = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `http://localhost:3000`,
          "Access-Control-Allow-Credentials": "true",
        },
      });
      console.log("Dialog Method");
      console.log("log", log);
      console.log("input", input);
      console.log("speaker", speaker);

      const response = await api.post("/discuss/", {
        log,
        human_input: input,
        speaker_list: speaker,
      });

      console.log(response.data);
      console.log("==========================");

      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async conclusion({ log }) {
    try {
      const api = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await api.post("/generate_business_plan/", {
        log,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default ServerProvider;
