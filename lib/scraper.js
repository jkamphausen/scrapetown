import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}


export async function getTwitterFollowers(username) {
    // scraping the barrel
    const html = await getHTML(`https://twitter.com/${username}`);

    // 1. spotting the follower count
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    // 2. extracting it
    const followers = span.data('count');
    // 3. return as int
    return parseInt(followers);
}


export async function getInstagramFollowers(username) {
    // scraping the barrel
    const html = await getHTML(`https://instagram.com/${username}`);

    // 1. get <script type="application/ld+json"></script>
    const $ = cheerio.load(html);
    const instaProfile = JSON.parse($('[type="application/ld+json"]').html());
    // 2. get the followers out of it
    const { mainEntityofPage: { interactionStatistic: { userInteractionCount: followers } } } = instaProfile;
    // 3. return as int
    return parseInt(followers);
}


