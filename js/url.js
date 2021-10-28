export class URL {
    constructor() {
        this.token = 'e140056e1fa38174fd71d08c977a52ee724424d4';
    }
    async getLink(link) {

        const respostaBitly = await fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                'Authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "long_url": link, "domain": "bit.ly" })

        })

        const linkJSON = await respostaBitly.json();

        return linkJSON;
    }
}