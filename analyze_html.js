const fs = require('fs');
const cheerio = require('cheerio');

function analyzeFile(filename) {
    console.log(`\n\n--- Analyzing ${filename} ---`);
    const html = fs.readFileSync(filename, 'utf-8');
    const $ = cheerio.load(html);

    console.log('\nGlobal Colors (from Elementor inline CSS):');
    $('style').each((i, el) => {
        const css = $(el).html();
        if (css.includes('--e-global-color-') || css.includes('--e-global-typography-')) {
            const matches = css.match(/--e-global-[^:]+:\s*[^;]+;/g);
            if (matches) {
                console.log(matches.slice(0, 20).join('\n') + (matches.length > 20 ? '\n...and more' : ''));
            }
        }
    });

    console.log('\nAnimations & Motion Effects:');
    $('[data-settings]').each((i, el) => {
        const settings = $(el).attr('data-settings');
        if (settings && (settings.includes('animation') || settings.includes('motion'))) {
            console.log('Settings:', settings);
            console.log('Classes:', $(el).attr('class'));
        }
    });
    
    $('[class*="elementor-animation-"]').each((i, el) => {
        const cls = $(el).attr('class');
        console.log('Hover Animation Class:', cls.split(' ').find(c => c.startsWith('elementor-animation-')));
    });

    console.log('\nSliders (Swiper):');
    $('.swiper-container, .swiper').each((i, el) => {
        console.log('Slider found with classes:', $(el).attr('class'));
        const parentSettings = $(el).closest('[data-settings]').attr('data-settings');
        if (parentSettings) {
            console.log('Slider Settings:', parentSettings);
        }
    });
    
    console.log('\nHeader / Sticky behavior:');
    $('header, .elementor-location-header').each((i, el) => {
        console.log('Header Classes:', $(el).attr('class'));
        console.log('Header Settings:', $(el).attr('data-settings') || $(el).parent().attr('data-settings'));
    });
    
    console.log('\nWidgets / Plugins:');
    $('[id*="chaty"], [class*="chaty"]').each((i, el) => {
        console.log('Chaty widget found:', $(el).attr('id'), $(el).attr('class'));
    });
}

analyzeFile('vmind_home.html');
analyzeFile('vmind_service.html');
analyzeFile('vmind_contact.html');
