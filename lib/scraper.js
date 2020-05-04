import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}

export async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
}

export async function getInstagramFollowers(html) {
    const $ = cheerio.load(html);
    // 1. get <script type="application/ld+json"></script>
    const instaProfile = JSON.parse($('[type="application/ld+json"]').html());
    // 2. get the followers out of it
    const { mainEntityofPage: { interactionStatistic: { userInteractionCount: followers } } } = instaProfile;
    return followers; //span.data('count');
}


