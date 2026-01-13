import {GoogleGenerativeAI} from '@google/generative-ai'


const GenAi = new GoogleGenerativeAI(
    process.env.REACT_APP_GEMINI_API_KEY
)


export const model = GenAi.getGenerativeModel({
    model:"gemini-pro"
})  
