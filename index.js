import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

async function main() {
    const tCount = await getTwitterFollowers('jkamphausen93');
    const iCount = await getInstagramFollowers('jkamphausen');

    console.log(`You have ${tCount} followers on Twitter.`);
    console.log(`You have ${iCount} followers on Instagram.`);
}

main();