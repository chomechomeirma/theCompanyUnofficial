/* twine-user-script #49: "defineBackgrounds.js" */
// Scripts pertaining to the age, background, and images for pit slaves

const AGES = ["Teen","Young Adult","Adult","Mature"];
const BACKGROUNDS = [
    ["female","Teen","Sugar Baby"],
    ["female","Teen","Teenage Mother"],
    ["female","Teen","Teenage Prostitute"],
    ["female","Teen","Teenage Runaway"],
    ["female","Teen","Teenage Thief"],
    ["female","Young Adult","College Student"],
    ["female","Young Adult","Low Class Escort"],
    ["female","Young Adult","Stripper"],
    ["female","Young Adult","Influencer"],
    ["female","Adult","Executive Assistant"],
    ["female","Adult","Highschool Teacher"],
    ["female","Adult","High Class Escort"],
    ["female","Adult","Porn Star"],
    ["female","Mature","Housewife"],
    ["female","Mature","Mature Escort"],
    ["female","Mature","Business CEO"],
    ["female","Mature","Mother"],
    ["ts","Teen","Sugar Baby"],
    ["ts","Teen","Teenage Prostitute"],
    ["ts","Teen","Teenage Runaway"],
    ["ts","Teen","Teenage Thief"],
    ["ts","Young Adult","College Student"],
    ["ts","Young Adult","Low Class Escort"],
    ["ts","Young Adult","Stripper"],
    ["ts","Young Adult","Influencer"],
    ["ts","Adult","Executive Assistant"],
    ["ts","Adult","Highschool Teacher"],
    ["ts","Adult","High Class Escort"],
    ["ts","Adult","Porn Star"],
    ["ts","Mature","Housewife"],
    ["ts","Mature","Mature Escort"],
    ["ts","Mature","Business CEO"],
    ["ts","Mature","Mother"],
    ["male","Teen","High School Sports Star"],
    ["male","Teen","Teen Delinquent"],
    ["male","Teen","Teen Thief"],
    ["male","Teen","Teen Prostitute"],
    ["male","Young Adult","University Student"],
    ["male","Young Adult","Newbie Worker"],
    ["male","Young Adult","Heavy Clubgoer"],
    ["male","Young Adult","Streamer"],
    ["male","Adult","Average Salaryman"],
    ["male","Adult","Trophy Husband"],
    ["male","Adult","Pickup Artist"],
    ["male","Adult","Male Porn Star"],
    ["male","Mature","Politician"],
    ["male","Mature","Mature Male Escort"],
    ["male","Mature","Business CIO"],
    ["male","Mature","Father"],
    ["lauren","Special","Company Traitor"],
    ["sarina","Special","Julia's Husband"],
    ["jag","Special","Former Driver"],
    ["elsa","Special","Your Cousin"],
];

// Set the age of a slave from the AGES array
function setAge(slave, age) {
    if (age !== "random") {
        slave.age = age;
    } else {
        slave.age = randomItem(AGES);
    };
};

// Set the background of a slave from the BACKGROUNDS array based on slave's age
function setBackground(slave) {
    //Make special cases for specific slaves
    if (slave.id.contains("lauren")) {
        slave.background = "Company Traitor";
        slave.age = "Adult";
        return;
    } else if (slave.id.contains("sarina")) {
        slave.background = "Julia's Husband";
        slave.age = "Mature";
        return;
    } else if (slave.id.contains("jag")) {
        slave.background = "Former Driver";
        slave.age = "Adult";
        return;
    } else if (slave.id.contains("elsa")) {
        slave.background = "Your Cousin";
        slave.age = "Teen";
        return;
    };
    
    // Set background based on age and gender if not a special case
    slave.background = randomItem(BACKGROUNDS.filter(bg => bg[1] == slave.age && bg[0] == slave.gender))[2];
};

// Generate a description for the slave based on their age and background
function setDescription(s) {
    // Define array to store description and reason possibilities
    var desc = [];
    var reason = [];

    switch (s.background) {
        case "Sugar Baby":
            desc = [
                `${s.name} was a spoiled sugarbaby, regularly using her charm to get whatever she wanted from older men. `,
                `${s.name} started sugaring just out of highschool in an effort to make ends meet for her family. `,
                `${s.name} was addicted to sex in highschool, and soon realized she could make a lot of money acting like old men's girlfriends. `
            ];
            reason = [
                `She was caught running up one of her sugar daddy's credit cards, and was sold to The Company to make up for lost finances.`,
                `After refusing one of her sugar daddy's more depraved wishes, she ended up being drugged, raped, and sold to The Company.`,
                `After one of her more possessive sugar daddies caught her "cheating" on him with her boyfriend, she was kidnapped and sold to The Company.`
            ]
            break;
        case "Teenage Mother":
        	desc = [
        		`${s.name} got involved with the highschool quarterback, ending up pregnant at 18. `,
        		`${s.name} ended up pregnant as a highschool senior, after discovering her sexuality at a church function. `,
        		`After getting drunk at a college party, ${s.name} woke up naked next to her brother, and would later learn she was carrying his baby. `
        	]
        	reason = [
        		`For fear of others finding out, ${s.name} was quietly sold to The Company by her own family. `,
        		`In an act of desperation, ${s.name} foolishly signed a contract ensuring the baby would be taken care of, in exchange for her freedom and humanity. `,
        		`Out of anger and fear, the child's father set up ${s.name} to be kidnapped and enslaved by The Company. `
        	]
            break;
        case "Teenage Prostitute":
        	desc = [
        		`After discovering her sexuality, ${s.name} started selling herself to anyone will to pay for her body. `,
        		`In an effort to help her struggling family, ${s.name} started selling her body to older men. `,
                `As a sexual deviant in highschool, ${s.name} found she could profit off her hobbies by charging older men to fuck her. `
        	]
            reason = [
                `When she accidentally found documents incriminating one of her richer clients, she was kidnapped and sold to The Company. `,
                `One of her clients, unfortunately, happened to work for The Company. After he took a liking to her, she was brought in and sold off. `,
                `After failing to meet one of her more depraved client's demands, she was drugged and sold off to The Company. `
            ]
            break;
        case "Teenage Runaway":
            desc = [
                `After a huge falling out with her family over petty nonsense, ${s.name} decided to pack her bags and try living on her own. `,
                `Bored with life, ${s.name} decided to pack her bags and head off into the world on her own. `,
                `After the death of her mother, ${s.name} couldn't stand to be in the same house as her abusive father, so she ran away. `,
                `Disgusted by the cruel way her parents ran the family business and exploited their workers, ${s.name} abandoned her wealthy family after a heated argument and ran away to start a fresh life. `,
                `Although ${s.name} loved her parents, they could barely afford to take care of themselves, let alone her, so she ran away against their wishes, hoping her absence would make their lives better. `,
            ]
            reason = [
                `An enterprising older man took the vulnerable and homeless ${s.name} in, pretending that she wanted to offer her a place to rest for the night, only to sell her to The Company.`,
                `As it turns out, Company-owned buildings are not safe places to sleep outside of; she was kidnapped in her sleep with relative ease.`,
                `${s.name} was desperate for money, so she applied to a photography gig that promised decent pay; unfortunately, it was secretly a slave kidnapping operation.`,
            ]
            break;
        case "Teenage Thief":
            desc = [
                `Wanting to help support her impoverished family, ${s.name} started stealing whenever she saw an opportunity. `,
                `In high school, ${s.name} had a dream; to make enormous piles of cash. And the most convenient way to get it was to break into houses in that wealthy neighborhood over there. `,
                `${s.name} was bored out of her mind throughout high school. By her senior year, she took up pickpocketing solely to feel some thrills in life. `,
            ]
            reason = [
                `${s.name} made one big mistake, and that mistake was stealing from a Company employee and getting caught, drugged, and sold off.`,
                `She was soon caught stealing, and the police got involved. A corrupt officer took the opportunity to sell the girl off to The Company and pretend that she ran away from the law.`,
                `Eventually, she joined a gang of thieves in the hopes of making even more money, but she was repulsed when she discovered their drug dealing side hustle. She got into an argument with the other gang members, and they decided to knock her out and sell her to the company for a quick buck rather than risk her going to the police.`,
            ]
            break;
        case "College Student":
            desc = [
                `Although she didn't qualify for many scholarships, ${s.name} was still able to get into a decent university by taking more than a few student loans. `,
                `A mix of good grades, family wealth, and nepotism allowed ${s.name} to get into one of the top universities in the country. `,
                `${s.name} wasn't thrilled by college, but she wanted to make her parents happy, so she went anyway. `,
            ]
            reason = [
                `She was unprepared for the rigors of college schoolwork, and her grades declined. Hoping to make some extra credit, she tried seducing one of the professors. Unfortunately, that professor was a Company agent, and it was easy for him to drug her and sell her off.`,
                `There was a huge party one night on campus, and she decided to get completely wasted. Another student desperate for cash took advantage of her condition and led her away from campus. The next morning, she woke up in Company custody.`,
                `One thing led to another, and ${s.name} wound up cheating on an exam. Her professor blackmailed her into becoming his personal plaything, then when he got bored of her, he sold her off to The Company.`,
            ]
            break;
        case "Low Class Escort":
            desc = [
                `After being in a few miserable jobs, ${s.name} found that prostitution was the one thing she felt she was valued in, so she decided to make it her career. `,
                `${s.name} needed the money urgently, so it didn't matter that the pimp took eighty percent of what she earned; she signed on out of desperation. `,
                `If it weren't for the consistently godawful clients, ${s.name} would have liked being a prostitute. It paid the bills and getting pounded was sort of fun. `,
            ]
            reason = [
                `An unexpected medical emergency left her with a huge bill and crippling debt, so she took up shadier work out of desperation. Her luck turned against her again when one of those shady clients drugged and sold her to The Company.`,
                `One evening, a group of clients gangbanged her, and instead of paying as she expected them to, they decided to exploit her further by drugging her and selling her to The Company.`,
                `She was the favorite prostitute of a Company employee, but after his unexpected passing, ${s.name} was kidnapped just in case she had Company secrets.`,
            ]
            break;
        case "Stripper":
            desc = [
                `${s.name} signed up for a one night stripping gig as part of a dare, but had so much fun that she decided to make it her career. `,
                `${s.name} needed money but wasn't willing to become a prostitute, so she settled for becoming a stripper. Even though she didn't have a lot of enthusiasm for the job, she was an almost instant hit among clubgoers. `,
                `An unfortunate misunderstanding led to her accidentally applying to a stripper gig at a club instead of a bartending job as she planned. That was a confusing job interview, but she accepted the position anyway. `,
            ]
            reason = [
                `Her stripper work was peaceful for a while, until she got into a heated conflict with an influential and wealthy club visitor. The club owner decided that it was better to sell her to The Company than to lose his best customer.`,
                `The club was popular among Company staff, and when ${s.name} was caught eavesdropping on them discussing Company business, she was forcibly drugged and kidnapped.`,
                `There was a phone number on one of the dollar bills a clubgoer gave her, along with a promise of cash in exchange for a private dance. When she arrived at his house, she was assaulted by a gang of men, knocked unconscious, and sold off to The Company.`,
            ]
            break;
        case "Influencer":
            desc = [
                `After gaining a little internet fame from an incident known only as the Llama Event, ${s.name} quickly leveraged that to start a decently popular makeup tutorial channel. `,
                `When ${s.name} started a channel for her mediocre at best singing, she discovered that she had an impressive knack for marketing, and managed to get quite a few views and sponsorships on her channel. `,
                `${s.name} found it thrilling to post suggestive videos that were just barely within the terms of service, and so did her quickly growing audience. `,
            ]
            reason = [
                `Her videos eventually shifted towards conspiracy content, and she was almost about to publish a video exposing Company business when she was caught and kidnapped.`,
                `When she rejected a cyberstalker's advances, he eventually kidnapped her, had his way with her, and then disposed of her by selling her to The Company.`,
                `A wealthy Company client was willing to pay top dollar for his favorite influencer, so she was kidnapped and drugged; just before the sale, the client died of natural causes, and she remained in Company custody. `,
            ]
            break;
        case "Executive Assistant":
            desc = [
                `Through sheer luck, ${s.name} managed to get a job at a prestigious accounting firm as an executive assistant. `,
                `It took a lot of work, but ${s.name} eventually climbed through the corporate ranks to land a high paying secretary position. `,
                `When you seduce the owner of a large company, it's easy to get a job as their assistant; and ${s.name} was very good at seducing wealthy businessmen. `,
            ]
            reason = [
                `After taking a peek at some accounting records out of curiosity, she noticed that someone was siphoning money out of the company; before she could dig too deep, she was caught and then sold to The Company to keep her from exposing their secrets. `,
                `She sipped a drink at a corporate party one evening, felt woozy, and then passed out in her car. The next morning, she was in Company custody, and the man who drugged her was quite a bit wealthier.`,
                `However, she soon noticed several high ranking employees groping some of the female staff; when she was caught recording one of the incidents, she was kidnapped and sold to The Company to keep her quiet.`,
            ]
            break;
        case "Highschool Teacher":
            desc = [
                `Born with a love of teaching, ${s.name} did everything she could to become a teacher, and she enjoyed a decently prosperous career. `,
                `${s.name}'s own horrible experiences in high school led her to become a teacher in the hopes of preventing future teenagers from going through the same things she did. `,
                `${s.name} didn't originally want to become a teacher, but her husband insisted she go down that career path, so she did anyway. `,
            ]
            reason = [
                `After being laid off and forced to work at a new school, she instantly noticed the male staff exploiting female students and workers. Her concerns were dismissed, and when she threatened to go to the police, several other teachers kidnapped her in her home and sold her to The Company.`,
                `After a few students went missing, she decided to look into it. But when she found and confronted the kidnapper, she became a victim herself and was sold off to The Company.`,
                `She was extremely strict with her grades, making her unpopular among her students. One former student, angered by how some of his grades denied him a chance to attend his favorite college, decided to get revenge by kidnapping her and selling her to The Company.`,
            ]
            break;
        case "High Class Escort":
            desc = [
                `Having been raised among the city's wealthy elite, ${s.name} found that she could act in the ways a high class escort was expected to act, and she had the looks to back it up as well. `,
                `Originally an impoverished woman looking for extra cash, ${s.name} somehow bumbled her way into the most esteemed escort work in the city. `,
                `A wealthy investor and family friend once told ${s.name} that she would make a great escort; she laughed it off at the time, but eventually tried it out of curiosity and found great success. `,
            ]
            reason = [
                `One day, she got a request from a seemingly low class client who was offering a suspiciously high amount of money; her curiosity got the best of her, and when she arrived at his run down house, she was drugged and sold off to The Company.`,
                `After agreeing to be tied up and gagged as part of a BDSM roleplay, the client took the opportunity to throw the now helpless ${s.name} into a van and sell her to the company.`,
                `She soon got a bit too curious about one of her client's shady dealings with something called The Company, and after he got suspicious of her, he sold her off, letting her experience firsthand what The Company was.`,
            ]
            break;
        case "Porn Star":
            desc = [
                `${s.name}'s boyfriend wanted to make a porn video with her; she reluctantly agreed, and it became a smash hit. After she dumped him, she went on to take some more formal work as a porn star. `,
                `${s.name}'s friend once jokingly said that becoming a porn star would be easy money for someone with her looks, but when she fell on desperate circumstances, she soon found that it was indeed easy money, at least for someone like her. `,
                `Out of the blue one day, ${s.name} received a phone call offering a lot of money to star in a porn film. Against her better judgment, she accepted the offer, and it went surprisingly well. `,
            ]
            reason = [
                `The Company caught wind of both her success and her willingness to take on shady work, so it was easy for them to orchestrate a kidnapping with the hopes of selling her to one of her biggest fans.`,
                `After accidentally biting off someone's dick in a porn shoot gone horribly wrong, the male lead sought revenge and did so by drugging her as soon as she was alone and then selling her to The Company.`,
                `She signed up to be the lead of another porn film one day, only to discover that it was completely fake. There was a mob of men ready to drug, kidnap, and rape her, and then they sold her off to The Company once they were finished.`,
            ]
            break;
        case "Housewife":
            desc = [
                `${s.name} always wanted to settle down with a nice man, and her wish was eventually fulfilled. `,
                `When ${s.name} married the wealthy man of her dreams, she decided to take up a lot of hobbies. `,
                `${s.name}, wanting to have an easier life, seduced a well off individual and quit her job, leaving her with a lot of free time. `,
            ]
            reason = [
                `She soon became suspicious when her husband started spending much less time at home and returning late in the night or early in the morning, so she followed him from his workplace one evening, discovering his secret sex dungeon where he kept several women. She was caught snooping and then sold off to The Company.`,
                `Another woman got jealous of her gorgeous husband, so she kidnapped her and sold her off to The Company so that she could have a chance to seduce him.`,
                `Although her marriage was happy, a lack of children meant that she had very little to do, so she wound up doing urban exploration to relieve the boredom. Unfortunately, that abandoned building turned out to be one of The Company's facilities, and the building's security team subdued her and added her to their stock of slaves.`,
            ]
            break;
        case "Mature Escort":
            desc = [
                `${s.name} was paranoid that her looks would fade as she got older and that she would be undesirable as an escort, but she was proven wrong as the years went by; somehow she looked better than she did in her youth. `,
                `After showing up to a halloween party in a sexy witch outfit, a lot of the wealthy businessmen attending suggested that ${s.name} might be able to make a greater living as an escort, and she eventually tried it out. `,
                `${s.name} was divorced, bored, and horny as hell, so she decided to do escort work on the weekends. `,
            ]
            reason = [
                `Unfortunately, one of her clients followed her home one evening, then kidnapped her in her sleep and sold her off to The Company.`,
                `One day, she went to a wealthy client's apartment for the evening, only for him to slip tranquilizers into her whiskey and then sell her to The Company while she was unconscious.`,
                `She kept hearing about something called The Company, and started looking into it; she arranged to meet with an employee of The Company to learn more about the shady organization, but when she arrived at the meeting destination, he and a few other men simply kidnapped her.`,
            ]
            break;
        case "Business CEO":
            desc = [
                `${s.name} started her company from scratch, eventually carrying it to lofty heights after selling stock in a successful initial public offering. `,
                `As a businesswoman with a history of miracles, ${s.name} was brought into a failing company to revive it, with modest success.  `,
                `${s.name} was second in command of the company her husband owned. After he passed away, she was selected as the next CEO. `,
            ]
            reason = [
                `However, when misfortune befell her company, she wound up borrowing money from powerful criminal organizations to try and prevent the company from going under. When things got even worse and she was unable to repay them, they kidnapped her and sold her to The Company to recoup some of their money.`,
                `However, she had an unfortunate darker side; she sexually assaulted several employees and did everything she could to silence them. After quelling several scandals and defaming her accusers, a few other employees decided to take revenge by kidnapping her and selling her to The Company.`,
                `${s.name} was well aware of The Company from several of her shady past dealings, and decided to move her own corporation up by making several business deals with them. However, after leaking several of The Company's secrets to prostitutes she was sleeping with, she was abducted and added to their stock of slaves to send a message to other would-be leakers.`,
            ]
            break;
        case "Mother":
            desc = [
                `${s.name} was an average stay at home mom, and she was absolutely happy with taking care of the kids while her husband worked a typical 9-5 job. `,
                `Despite a shaky divorce, ${s.name} still managed to keep her kids well-fed and happy, although she did work days, meaning they had to develop some independence early on. `,
                `Although ${s.name} initially planned on just having one kid, she loved her so much that she wound up having a few more. The large family was hectic, but still enjoyable. `,
            ]
            reason = [
                `When she witnessed a gang trying to kidnap one of her college age daughters, she offered herself in her place so that her daughter could go free. Although ${s.name} didn't expect to be sold off to The Company, she is still satisfied with her decision to protect her daughter..`,
                `After her kids graduated high school and moved away, ${s.name} was left with a lot of time on her hands, and she was tempted to sleep around with other men while her husband was at work. Unfortunately, one of those men was looking for women to sell to The Company, and she became his next victim.`,
                `After her most recent baby was born, a crooked doctor took advantage of her vulnerable state to sedate ${s.name} and drag her away for delivery to The Company.`,
            ]
            break;
        case "High School Sports Star":
            desc = [
            `${s.name} grew up obsessed with sports, and when he got into high school, he immediately decided to go into football and had dreams of going pro one day. `,
            `Although ${s.name} was good at soccer and won quite a few games for his team, he was much more interested in his academic pursuits. `,
            `${s.name} wasn't terribly excited about baseball, but his parents forced him into it. However, despite a rocky start, he eventually discovered a love of the game within himself. `,
            ]
            reason = [
            `Near the end of his senior year, he was quite popular and flirted with quite a few of his fellow students, angering quite a few of their boyfriends in the process. After he banged someone's girlfriend, that someone got revenge by drugging him and selling him to The Company.`,
            `Young men with his kind of physique became more highly sought after in recent years, so The Company kidnapped him to increase their supply of male slaves.`,
            `One evening after a game, he went out drinking with some buddies, and he accidentally drank a drugged vodka meant for the girl in the corner. The opportunistic man who drugged it decided to kidnap ${s.name} instead and sell him off.`,
            ]
            break;
        case "Teen Delinquent":
            desc = [
            `${s.name} had no enthusiasm for school throughout his life, so he put in the bare minimum effort needed to keep himself from getting in trouble. `,
            `One of ${s.name}'s favorite things was skipping school to hang out with friends; not because he hated school, but because doing something forbidden with his friends felt great. `,
            `${s.name} went to one of the worst high schools in the state, so he took every possible excuse to not show up. His parents were sympathetic and helped him skip class when they could. `,
            ]
            reason = [
            `While skipping class and exploring some old warehouse, ${s.name} discovered very quickly that it was one of The Company's slave storage facilities. Just before he could escape to call the police, he was apprehended by security and added to their stock of slaves`,
            `Halfway through ${s.name}'s senior year, one of the of the teachers in his school was about to be fired if he didn't improve the average grade of his class; naturally, he decided to do this by kidnapping the worst scoring student and selling them to The Company, and that student happened to be ${s.name}.`,
            `${s.name} was enticed by a prostitute one evening and followed her to a secluded area; unfortunately, she was looking for extra cash and decided to drug him and sell him to The Company.`,
            ]
            break;
        case "Teen Thief":
            desc = [
            `${s.name} occasionally wanted some extra cash so he could have nice things in high school, so he stole money and valuables whenever he was certain he wouldn't be caught. `,
            `${s.name}'s family used to be well-off, but when their finances went downhill, he started stealing to try and save up cash to save his family in case things got worse. `,
            `An unfortunate incident left ${s.name} owing lots of money to a gang; he broke into houses and looted valuables to try and avoid the gang's wrath. `,
            ]
            reason = [
            `After stealing from a perverted older man, he was kidnapped in revenge, used for a few days, and then sold to The Company.`,
            `One day, he tried stealing from a gang, and he was caught, beaten, and sold off to The Company.`,
            `While sneaking around in what he thought was an empty office building, he overheard two people discussing some of The Company's business; he was caught eavesdropping and then taken into slavery to keep him quiet.`,
            ]
            break;
        case "Teen Prostitute":
            desc = [
            `Lots of people thought ${s.name} was good looking, so when he turned eighteen, he became a prostitute so that he could get extra cash for college. `,
            `After being kicked out on his eighteenth birthday, ${s.name} had to resort to prostitution to survive. `,
            `One day, ${s.name} came across a woman who mistook him for a male prostitute: money was money, so he accepted, and then he realized he might be able to make a living as a real prostitute. `,
            ]
            reason = [
            `When he took on a shady client and drank some wine with them after sex, he soon found out that it was drugged, and he was then sold off to The Company.`,
            `After accidentally injuring an influential client during a night gone horribly wrong, the pimp who he was working under sold him off to The Company as punishment.`,
            `After making a nice pile of money and storing it under his bed, another desperate prostitute tried to steal it. When he caught them and threatened to go to the police, the other prostitute knocked him out and sold him to The Company.`,
            ]
            break;
        case "University Student":
            desc = [
            `${s.name} had no idea what he wanted to major in, but he knew one thing; he was gonna have a good time in college! `,
            `${s.name} was at the top of his class in college, and he was hoping that his academic performance would land him an excellent career. `,
            `${s.name}'s parents pressured him to go into college, so he did. Thankfully, he managed to make some new friends and find a major he liked. `,
            ]
            reason = [
            `He got an email asking if he wanted to take part in an experiment on campus; when he followed the instructions and went to a shady alley at the edge of campus, he quickly found out it was fake, and he was knocked out by a gang and sold off to The Company.`,
            `When he got paired up with another student for a group project, they hated each other so much that they tried to get each other sold off to The Company. Through a miracle, they both succeeded at getting the other kidnapped.`,
            `Unfortunately, a paperwork mistake meant he didn't qualify for the good scholarships, so he had to resort to borrowing from shady gangs to pay for his education. When he couldn't pay them back, he was sold off to The Company.`,
            ]
            break;
        case "Newbie Worker":
            desc = [
            `After graduating high school, ${s.name} looked for whatever jobs he could, and was eventually hired at a fast food cashier. `,
            `The local hardware store was hiring, and ${s.name} knew the owner, so it was easy to get a job there after graduating. `,
            `Although the pay wasn't very good, ${s.name} absolutely loved working at the local theme park. `,
            ]
            reason = [
            `When his employer laid him off, he desperately looked for work wherever he could, but unfortunately lost his apartment and became homeless after burning through his meager savings. This made him an ideal target for The Company, who was looking to gather new slaves from the area.`,
            `However, when he overheard his boss discussing their shady side gig of selling people to The Company, he confronted him alone and threatened to go to the police. He was then sold to The Company.`,
            `On the way to work one day, his car broke down and he had to get a ride from a stranger. That stranger, unfortunately, then tied him up and sold him to The Company.`,
            ]
            break;
        case "Heavy Clubgoer":
            desc = [
            `${s.name} had a boring desk job, and to unwind, he would go out and party almost every night. `,
            `${s.name} had a thing for the strippers at the local club, so he visited the place every weekend. `,
            `Although the local club had a lot of women, ${s.name} mostly just went there so he could spend time with his friends, who loved going there more than he did. `,
            ]
            reason = [
            `One night, a stunningly beautiful woman at the club lured him out into the parking lot. When they were alone, she pulled a gun on him, kidnapped him, and then sold him off to The Company.`,
            `He had an unfortunate habit of not paying attention to his drinks, and one night, this got him drugged, taken aside, and then kidnapped and sold to The Company.`,
            `After witnessing a girl being kidnapped by a gang, he tried to rescue her, only to get captured and sold off to The Company instead of her.`,
            ]
            break;
        case "Streamer":
            desc = [
            `${s.name} was lucky enough to make videos on a game just before it got popular, so his channel became a huge success. `,
            `${s.name} was charming, witty, and good looking, so when he started posting film and game criticism online, people paid attention to his content. `,
            `${s.name} had no idea how or why his short meme video took off and got millions of views, but enough people stuck around for him to make a living off it. `,
            ]
            reason = [
            `He somehow wound up with a horde of cyber-stalkers: one of them was crazy enough to kidnap him, have her way with him, and then sell him off to The Company in anger after he didn't show enthusiasm for her.`,
            `Fame unfortunately brought out all of his worst traits, and after sexually assaulting someone who happened to be an employee of The Company, he was kidnapped and enslaved as revenge.`,
            `He managed to enter a partnership with a much more popular influencer, but when he found out about her shady secrets and confronted her, she had him sold off to The Company to protect her image.`,
            ]
            break;
        case "Average Salaryman":
            desc = [
            `${s.name} landed a fairly well paying position at a local business, but it was one of the most boring things he had ever experienced. `,
            `${s.name} got his accounting job the same way he lost his virginity; by lying about his experience. `,
            `The tasks themselves at his old workplace were boring, but ${s.name} loved his job anyway due to his amazing coworkers. `,
            ]
            reason = [
            `After management grew more aggressive, ${s.name} openly advocated for unionization; this was so terrifying to upper management that they had him kidnapped and sold off to The Company.`,
            `Over the years, he started to learn more and more of the business's shady and illicit secrets, but kept quiet anyway. When the board of directors realized how much he knew, they had him sold off to The Company out of paranoia.`,
            `He gained the trust of a coworker who had ties to The Company; the moment he expressed his disgust and desire to go to the police, he was kidnapped and then sold off to The Company.`,
            ]
            break;
        case "Trophy Husband":
            desc = [
            `Having been a male model for a few years, ${s.name} eventually married a wealthy woman who was a fan of his. `,
            `${s.name} wanted to marry into wealth, and thankfully, that millionaire girl at the party wanted to marry a hot guy. It was a match made in heaven. `,
            `${s.name} used to be an ordinary pizza delivery guy, but when a rich heiress proposed to him on a whim due to his looks, he gladly accepted. `,
            ]
            reason = [
            `However, he soon discovered his new spouse was evading millions in taxes, and he did not want to go to prison for being complicit in them. She caught him attempting to contact the authorities over it, and had him sold off to The Company.`,
            `There was a sub-basement he was forbidden from entering; when he snuck in out of curiosity one day, he found a bunch of chained sex slaves that had been purchased from The Company. His wife was furious at his disobedience and had him sold off to The Company as an ironic punishment.`,
            `He was absolutely smitten with his new wife, but unfortunately, he was nothing more than a passing fancy to her. When she found a new favorite man, she sold ${s.name} off to The Company to get him
        out of the way as soon as possible.`,
            ]
            break;
        case "Pickup Artist":
            desc = [
            `${s.name} gradually grew obsessed with online pickup artist content, and he eventually worked up the courage to try it himself. `,
            `${s.name} thought of women as just disposable playthings, so the pickup artist lifestyle was perfect for him. `,
            `${s.name} wanted to have a harem of women he could phone up at any time for casual sex, and he was pretty good at gaslighting, so he took up pickup artistry. `,
            ]
            reason = [
            `He tried seducing a girl in a bar one day, thinking she would be an easy target, but he was surprised when she drugged him and sold him off to The Company.`,
            `After years of manipulating and exploiting women, several of them got together to punish him for his antics by kidnapping him and selling him to The Company.`,
            `At a bar one night, he hit on and groped a woman, unaware that the man sitting next to her was both his boyfriend and an employee of The Company. He was quickly kidnapped and added to The Company's stock of slaves as revenge.`,
            ]
            break;
        case "Male Porn Star":
            desc = [
            `With nice looks and a great dick, it was easy for ${s.name} to land some nice paying porn gigs. `,
            `${s.name} wanted to bang hot women, so he went into porn. Being on a set wasn't as fun, but at least the women were hot. `,
            `${s.name} decided to make some extra
        cash on the side by doing porn shoots with some local
        models. `,
            ]
            reason = [
            `A woman approached him with a lucrative porn gig, but when he accepted it and met her at the filming site, he was instead greeted by a gang of men who knocked him out and sold him off to The Company.`,
            `He unknowingly starred alongside a woman who was doing porn in secret to spite her husband, and when the husband found out, he had both his wife and ${s.name} kidnapped and sold off to The Company.`,
            `A wealthy businessman wanted him to star in a film
        with one of the sex slaves he bought from The Company; after learning that they were slaves and angrily refusing, he was forcibly drugged and sold off to The Company.`,
            ]
            break;
        case "Politician":
            desc = [
            `${s.name} started his political career trying to do good, but over the decades, politics gradually corrupted him and made him lose sight of his original
        goals. `,
            `${s.name} had lots of money and not much to do with it, so he decided to go into politics for fun. `,
            `${s.name} had a highly successful political career, mostly due to his willingness to use any despicable trick in the book to win. `,
            ]
            reason = [
            `After angering every other influential politician in the area through his antics, his opponents collectively decided that ${s.name} should be kidnapped and disposed of, and The Company was the perfect place to send him.`,
            `An activist with a profound hatred of everything ${s.name} stood for ambushed him on a walk one evening, kidnapped him, sold him to The Company, and donated the proceeds to charities opposed to his beliefs.`,
            `Eventually, he learned about The Company; they were too disgusting even for him to stand. He tried leaking their dealings to the public, but was almost immediately kidnapped by The Company's agents and then added to their stock of slaves.`,
            ]
            break;
        case "Mature Male Escort":
            desc = [
            `${s.name} discovered that there was indeed a market for his kind of look, so he happily let younger women pay him to have sexy times with him.`,
            `${s.name} was a male prostitute for most of his life, and his services only became more sought after with age. `,
            `${s.name} lived in an area with lots of rich women who wanted to pay for the “Daddy Experience”, so he decided to make extra cash by offering that. `,
            ]
            reason = [
            `After accidentally injuring a wealthy family's
        daughter during sex, they brutally punished him
        by kidnapping him and selling him off to The Company.`,
            `He heard about something called “The Company” from a client one night, and when he started looking into it, he was kidnapped and put into slavery before he could expose any of their secrets.`,
            `The rich girl who hired him one evening was much crazier than he thought, and she drugged him, tied him up, used him in every way imaginable for weeks, and then sold him off to The Company when she was finally done.`,
            ]
            break;
        case "Business CIO":
            desc = [
            `It took a long career, but ${s.name} managed to reach the top of the corporate ladder and become
        head of an entire company. `,
            `${s.name} was born into wealth, became wealthier through luck, and then bought a successful business that he was woefully underprepared to operate. `,
            `${s.name} inherited his father's company years ago, and he mostly left the business to its own devices as he reaped the rewards. `,
            ]
            reason = [
            `He had a fondness for buying slaves from
        The Company, but when he talked too openly about his dealings with The Company, he was kidnapped and enslaved himself as punishment.`,
            `Nobody else in the upper levels of the company liked him, so several of them hatched a plot to kidnap him and sell him off to The Company.`,
            `After committing several financial crimes and being
        caught, he concluded that his only option was to flee the country; unfortunately, the criminal contact he requested help from kidnapped him and sold him to The Company.`,
            ]
            break;
        case "Father":
            desc = [
            `${s.name} was a proud parent, and he did his best to work hard and make sure his kids were happy. `,
            `${s.name} originally didn't want kids and was terrified when his wife became pregnant, but as soon as he looked into his newborn son's eyes, he suddenly felt love and devotion wash over him. `,
            `${s.name} wanted to spend more time with his kids, but his career meant that he had to spend weeks at a time away from home. `,
            ]
            reason = [
            `When he saw a gang trying to sell drugs to his teenage children, he attempted to unleash his fatherly vengeance on them; after a fight, he was kidnapped and sold to The Company.`,
            `After being falsely diagnosed with a terminal illness, he resorted to crime so that he could leave his family with enough money to sustain them for years. Unfortunately, his criminal exploits led to him being beaten, abducted, and sold off to The Company by a rival gang.`,
            `His ambitious and scheming teenage daughter learned about the life insurance policy he had, so she cunningly faked his death while selling him off to The Company.`,
            ]
            break;
        case "Former Driver":
            desc = [`${variables().jag.name} was one of your former drivers. `]
            reason = [`Out of fear of being followed, you offered to use your TFM serum on him, turning him into a woman. Unfortunately, he found himself here in The Pit as a result. `]
            break;
        case "Company Traitor":
            desc = [`${variables().lauren.name} was sent to replace ${variables().diana.name} as the records clerk for your branch. `]
            reason = [`Once it was learned she was plotting to steal your branches's secrets, she was captured and sold to The Company. `]
            break;
        case "Your Cousin":
            desc = [`${variables().elsa.name} came to visit you for the holidays, and ended up staying for a few days. `]
            reason = [`On her way to the airport, you had her kidnapped and sold to The Company. Incidentally, she seems to be enjoying herself. `]
            break;
        case "Julia's Husband":
            desc = [`${variables().julia.name} was The Company's medical staffer for your branch. `]
            reason = [`After she was caught secretly killing other pitslaves, her husband was feminized by The Company and used as a pit slave. `]
            break;
    };

    // if either array came back as undefined, then we need to use the default description.
    if (desc.length == 0) {desc = [`Invalid description. `]};
    if (reason.length == 0) {reason = [`Invalid reason. `]};

    // Choose a random description and reason and return them as a string.
    s.history = (randomItem(desc) + randomItem(reason));
};

window.getSlaveHistory = function(s) {
    // Initialize dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg =  ``

    dlg += `${name} is ${s.getAge()} ${s.gender} with ${s.getHairLength()}, ${s.hairColor} hair. `;
    //TODO Add background dlg for installed pussy
    if (hasPerk(s, "Augmented Breasts")) {
        if (s.hasPussy) {
            dlg += `${He} has a pair of ${s.getBreastSize()} @@.sf;fake@@ breasts and `;
            if (hasPerk(s, "Get Pussy")) {
                dlg += `an artificial , functional pussy where ${his} penis used to be. `;
            } else {dlg += `a nice, shaved pussy. `};
        } else {
            if (hasPerk(s, "Castrated")) {
                dlg += `${He} has a pair of artificial ${s.getBreastSize()} breasts and a ${s.getPenisSize()} cock. ${His} ${s.getBallSize()} testicles were surgically removed, leaving ${him} unable to produce semen. `;
            } else if (hasPerk(s, "Feminized")) {
                dlg += `${He} has a pair of artificial ${s.getBreastSize()} breasts and a pair of ${s.getBallSize()} balls. ${His} ${s.getPenisSize()} penis was surgically removed, leaving ${him} unable to reach orgasm through conventional means. `;
            } else {
                dlg += `${He} has a pair of artificial ${s.getBreastSize()} breasts and a ${s.getPenisSize()} cock resting on a pair of ${s.getBallSize()} balls. `;
            };
        };
    } else {
        if (s.hasPussy) {
            if (s.hasBreasts) {
                dlg += `${He} has a pair of ${s.getBreastSize()} breasts and `;
            } else {
                dlg += `${He} has a flat chest and `;
            };
            if (hasPerk(s, "Get Pussy")) {
                dlg += `an artificial , functional pussy where ${his} penis used to be. `;
            } else {
                dlg += `a nice, shaved pussy. `;
            };
        } else if (gen == "ts") {
            if (s.hasBreasts) {
                dlg += `${He} has a pair of ${s.getBreastSize()} breasts and a ${s.getPenisSize()} cock resting on a pair of ${s.getBallSize()} balls. `;
            } else {
                dlg += `${He} has a flat chest and a ${s.getPenisSize()} cock resting on a pair of ${s.getBallSize()} balls. `;
            };
        } else {
            dlg += `${He} has a ${s.getPenisSize()} cock resting on a pair of ${s.getBallSize()} balls. `;
        };
    }

    dlg += `\n\n`;
    
    dlg += s.history + ` `;

    switch (s.trait.name) {
        case "Frigid":
            dlg += `Due to ${his} @@.bd;frigid@@ nature, ${name} has no real interest in sex at all, finding the activity completely unappealing. `;
            break;
        case "Bratty":
            dlg += `Due to ${his} @@.xxx;bratty@@ nature, ${name} has a tendancy to misbehave for attention, regardless of how harsh the punishments may be. `;
            break;
        case "Stubborn":
            dlg += `${name} has a tendancy to be @@.bd;stubborn@@ when it comes to getting ${him} to do what you want, requiring more motivation than others for similar results. `;
            break;
        case "Violent":
            dlg += `${name} in known to have @@.bd;violent@@ tendancies which make ${him} a good candidate for a dominant slave, however ${he} can also be quite unpredictable. `;
            break;
        case "Timid":
            dlg += `${name} has exhibited very @@.sf;timid@@ qualities, making ${him} the ideal sub, though extra training may be required to turn ${him} into a decent sex slave. `;
            break;
        case "Inexperienced":
            dlg += `${name} is clearly sexually @@.bd;inexperienced@@, and will need extra time and training to become a quality sex slave. `;
            break;
        case "Hypersexual":
            dlg += `${name} has shown ${him}self to be @@.xxx;hypersexual@@, and open to nearly any kind of training and experiences. However, this also means ${he} will seek pleasure from wherever ${he} can find it, regardless of who ${his} "<<master>>" might be.`;
            break;
        case "People Pleaser":
            dlg += `${name} is obviously a @@.sf;people pleaser@@, making ${him} very pliable in a good training environment. It also means it's unlikely ${he} will ever be able to take on a true dominant role as a slave. `;
            break;
        case "Oral Addict":
            dlg += `${name} has already shown signs of having a strong preference towards @@.xxx;oral sex@@, which is a desirable trait for a slave. However, this preference comes at the expense of experience and talent in other forms of pleasure. `;
            break;
        case "Anal Addict":
            dlg += `${name} has already shown signs of having a strong preference towards @@.xxx;anal sex@@, which is a desirable trait for a slave. However, this preference comes at the expense of experience and talent in other forms of pleasure. `;
            break;
        case "Oral Aversion":
            dlg += `${name} has already shown signs of having a strong @@.bd;aversion@@ towards oral sex, which is a less desirable trait for a slave. It will be difficult to instill this preference into ${him} without significant training. `;
            break;
        case "Anal Aversion":
            dlg += `${name} has already shown signs of having a strong @@.bd;aversion@@ towards anal sex, which is a less desirable trait for a slave. It will be difficult to instill this preference into ${him} without significant training. `;
            break;
        default:
            break;
    };

    if (hasPerks(s, ["Castrated","Feminized","Feminized Voice"])) {
        dlg += `\n\n`;

        if (hasPerk(s,"Get Pussy")) {
            dlg += `${name}'s @@.sf;penis and testicles have both been surgically removed@@, with ${his} ${s.getPenisSize()} cock having been converted into an artificial vagina. Special modifications have been made to ensure ${he} is permanently lubricated. `;
        } else if (hasAllPerks(s, ["Castrated", "Feminized"])) {
            dlg += `${name}'s @@.sf;penis and testicles have both been surgically removed@@. Without ${his} cock, ${name} can no longer orgasm in the conventional ways, instead being forced to learn to cum with other body parts. ${His} testicles have also since been removed, leaving ${him} with very little between ${his} legs, similar to a doll. `;
        } else if (hasPerk(s, "Castrated")) {
            dlg += `${name}'s @@.sf;testicles have been surgically removed@@, making it impossible for ${him} to ejaculate like ${he} used to. ${His} ${s.getPenisSize()} cock is still attached, though without a natural supply of testosterone it's becoming harder and harder for ${him} to maintain an erection. `;
        } else if (hasPerk(s, "Feminized")) {
            dlg += `${name}'s @@.sf;penis has been surgically removed@@, with a small hole for urine being all that remains. Without ${his} cock, ${name} can no longer orgasm in the conventional ways, instead being forced to learn to cum with other body parts. ${His} ${s.getBallSize()} testicles still hang between ${his} legs, serving as a reminder of the man ${he} once was. `;
        };

        if (hasPerk(s, "Augmented Breasts")) {
            dlg += `${name} has been given @@.xxx;fake tits@@, further diminishing what little masculinity ${name} once had. `;
        }

        if (hasPerk(s, "Feminized Voice")) {
            dlg += `Additionally, ${name}'s voice has been modified to sound like a young girl's. Every time ${he} opens ${his} mouth, ${he} can only speak like a slutty college girl, no matter hard ${he} tries not to. `;
        };
    };
    
    if (s.operations > 0) {
        dlg += `\n\n`;

        if (hasPerk(s, "Animal Ears")) {
            dlg += `${name}'s ears have been replaced with functional ${s.animal} ears, and ${he} has been given a permanent ${s.animal} tail to match it. `;
            if (hasPerk(s, "Pet")) {
                dlg += `With ${his} affinity for @@.xxx;acting as a willing pet@@, nothing could excite ${name} more than being modified this way. `;
            }
        };

        if (hasPerk(s, "Permanent Makeup")) {
            dlg += `Permanent makeup has been applied to ${name}'s face, ensuring that ${he} will forever look like a made up whore ready to serve ${his} <<master>>. `;
            if (hasPerk(s, "Nymphomaniac")) {
                dlg += `@@.xxx;As a nymphomaniac,@@ nothing could please ${name} more than being turned into a permanent slut. `;
            };
        };
        
        if (hasPerk(s, "Mute")) {
            dlg += `${name}'s vocal cords have been surgically removed, preventing ${him} from ever being able to speak again. `;
            if (hasPerk(s, "Submissive")) {
                dlg += `As a submissive slave, @@.gd;this forced silence is just another comforting reminder of ${his} place as a thing meant only for pleasing others@@. `
            } else {
                dlg += `Having ${his} voice taken from ${him}, @@.bd;${name} is unlikely to trust or respect you ever again, instead choosing to live in silent disdain@@. `
            };
        };

        if (hasPerk(s, "Clipped Heels")) {
            dlg += `${name}'s heels have been clipped, preventing ${him} from walking upgright anymore. `;
            if (hasPerk(s, "Pet" || hasPerk(s, "Submissive"))) {
                dlg += `As someone who enjoys being treated like a pet, being forced to crawl around on all fours @@.gd;is very erotic and exciting for ${name}@@. `;
            } else {
                dlg += `Now being forced to live life crawling on ${his} hands and knees, @@.bd;a sense of terror and distrust has been instilled in ${name}@@. `;
            };
        } else if (hasPerk(s, "Pulled Heels")) {
            dlg += `${name}'s calves have been surgically shortened, preventing ${him} from ever being able to stand up straight again without tall, slutty high heels. `;
            if (hasPerk(s, "Nymphomaniac")) {
                dlg += `@@.xxx;As a nymphomaniac, ${name} finds this extremely arousing@@, knowing ${he}'ll always been seen as a sex object from now on. `;
            };
        }
    };

    if (s.level > 0) {
        dlg += `\n\n`;

        if (hasPerk(s, "Nymphomaniac")) {
            dlg += `${name} has become a sex-addicted @@.xxx;nymphomaniac@@, finding ${him}self completely unable to ever be satisfied, and always looking for new partners. `;
        }

        if (hasPerk(s, "Dominant")) {
            dlg += `${name} has become very @@.xxx;dominant@@ towards other slaves as a result of ${his} repeated training. `;
        }
        if (hasPerk(s, "Sadistic")) {
            dlg += `As a @@.xxx;sadist@@, ${he} has even begun to enjoy inflicting real pain and suffering on those ${he} is allowed to dominate. `;
        }
        if (hasPerk(s, "Cruel")) {
            dlg += `Further training has instilled a true knack for gleeful @@.xxx;cruelty@@ when torturing other slaves. You can really see the sadistic streak in ${him} now. `;
        }
        if (hasPerk(s, "Evil")) {
            dlg += `Other slaves have started to become terrified of ${name}, going so far as to call ${him} pure @@.xxx;evil@@. You can't help but agree. `;
        }

        if (hasPerk(s, "Submissive")) {
            dlg += `${name} has become very @@.xxx;submissive@@ towards other slaves as a result of ${his} repeated training. `;
        };
        if (hasPerk(s, "Masochist")) {
            dlg += `As a @@.xxx;masochist@@, ${he} has even begun to enjoy inflicting real pain and suffering on ${himself} as a way to get off. `;
        };
        if (hasPerk(s, "Subservient")) {
            dlg += `Further training has instilled a true knack for gleeful @@.xxx;subservience@@ when being tortured by other slaves. You can really see the masochistic streak in ${him} now. `;
        };
        if (hasPerk(s, "Willing Slave")) {
            dlg += `${name} has become a true @@.xxx;willing slave@@, and will do anything to please ${his} <<master>>, whoever that might be at the time. `;
        };

        if (hasPerk(s, "Oral Fixation")) {
            dlg += `${name} has developed a strong @@.xxx;oral fixation@@, and will often seek out other slaves to use ${his} mouth on. `;
        };
        if (hasPerk(s, "Oral Expert")) {
            dlg += `What's more, ${name} has developed a pretty extrordinary talent for servicing others with ${his} mouth, becoming something of an @@.xxx;oral expert@@. `;
        }

        if (hasPerk(s, "Anal Fixation")) {
            dlg += `${name} has developed a strong love of anal sex, giving ${him} something of an @@.xxx;anal fixation@@. When allowed, ${he} will often seek out others to fuck ${him} in the ass with toys or cocks. `;
        };
        if (hasPerk(s, "Anal Expert")) {
            dlg += `What's more, ${name} has become so much of an @@.xxx;anal sex expert@@ that those who fuck ${him} in the ass are quick to say it's the best hole they've ever had. `;
        };

        if (hasPerk(s, "Nipple Fixation")) {
            dlg += `${name}'s nipples have become very sensative and erogenous, giving ${him} something of a @@.xxx;nipple fixation@@. When allowed, ${he} can often be found pinching and rubbing ${his} nipples while in ${his} cell. `;
        };

        if (hasPerk(s, "Breeding Kink")) {
            dlg += `After receiving so many creampies, ${name} has developed something of a @@.xxx;breeding kink@@. Whenever ${he} is getting fucked, ${he}'ll often force ${his} partner to cum inside of ${him}, even if that wasn't the plan. `;
        };

        if (hasPerk(s, "Pet")) {
            dlg += `${name} has started getting used the idea of becoming someone's fulltime @@.xxx;pet@@. The thought of being used and kept like an animal has awoken something inside of ${him}. `;
        };
        if (hasPerk(s, "Submissive Pet")) {
            dlg += `Over time, ${name} has taken on the mindset of a completely @@.xxx;submissive pet@@, and will do anything to please ${his} <<master>>. `;
        }
    };

    if (hasPerk(s, "Room Slave")) {
        dlg += `\n\n`;

        dlg += `Being especially fond of ${him}, you decided to keep ${name} for yourself. ${He} now spends ${his} days living in your bedroom, staying in your large walk-in closet and serving your every whim. `;
    }

    return dlg;
}
