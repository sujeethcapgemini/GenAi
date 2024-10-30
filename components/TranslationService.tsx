import axios from "axios";

class TranslationService {
    private static api_key = ''; 
    private static url = 'https://api.openai.com/v1/chat/completions';

    public static async translateText(text: string, targetLanguage: string): Promise<string> {
        try {
            const response = await axios.post(this.url, {
                model: 'gpt-3.5-turbo-0125',
                messages: [
                    {
                        role:'user',
                        content: `Translate the following text to ${targetLanguage}: "${text}"`
                    }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${this.api_key}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        if (response.data.choices && response.data.choices.length > 0){
            return response.data.choices[0].message.content;
        } else {
            throw new Error('No translation available.');
        }
    }
        catch (error:any) {
            console.error('Translation error:',error.response?.data || error.message);
            throw new Error('Translation failed. Please try again later.');
        }
    }
}

export default TranslationService;
