require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:  process.env.API_KEY,

});
const openai = new OpenAIApi(configuration);
async function genrateScript() {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `how are you`,
            max_tokens: 10000,
            temperature: 0.5,
        });
        console.log(response.data.choices[0].text);
    } catch (error) {
        console.log(error)
    }
}

genrateScript();
module.exports = { genrateScript }

