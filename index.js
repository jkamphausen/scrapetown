import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

async function main() {

    const [iCount, tCount] = await Promise.all([
        getTwitterFollowers('jkamphausen93'),
        getInstagramFollowers('jkamphausen')
    ])

    console.log(`You have ${tCount} followers on Twitter.`);
    console.log(`You have ${iCount} followers on Instagram.`);
}

main();