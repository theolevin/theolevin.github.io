class AboutPage {
    title: string;
    body: string;

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
}

const aboutPage: AboutPage = {
    title : "About me",
    body: `
    <h1>My favorite food is PANCAKES!</h1>
`
}
export default aboutPage;