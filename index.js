import express from 'express';
import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';
import './lib/cron';


const app = express();

app.get('/scrape', async (req, res, next) => {

    console.info('🛢🥄 SCRAPING THE BARREL!'); //📝

    const [iCount, tCount] = await Promise.all([
        getTwitterFollowers('jkamphausen93'),
        getInstagramFollowers('jkamphausen')
    ])

    console.log(`You have ${tCount} followers on Twitter.`);
    console.log(`You have ${iCount} followers on Instagram.`);
});

const listener = app.listen(4211, () => {
    console.info(`[Scrapetown] Running on http://localhost:${listener.address().port} 🥄`)
})