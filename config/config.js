var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Jimmy Huang",
    sex: "male",
    age: "28",
    phone: "18088853757",
    email: "hdj522499@gmail.com",
    address: "Shenzhen,Guangdong,China",
    log: "Happysnaker",
    excpect_work: "JD",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Fall seven times, stand up eight.",
        "Believe you can and you're halfway there.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "You don't have to be great to start, but you have to start to be great.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Hard work beats talent when talent doesn't work hard.",
        "You miss 100% of the shots you don't take.",
        "The only way to do great work is to love what you doing.",
        "When you want something, all the universe conspires in helping you to achieve it.",
        "It's not about being the best, it's about being better than you were yesterday.",
        "Don't give up the ship; for she will bring you safely into port."
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "Your collar is so blue, and my heart is so true.<br>" +
             "But for your sake, I ponder to this day.<br>" +
             "Hi, I'm Jimmy, a blockchain enthusiast and industry follower<br>" +
             "Nice to meet you!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>●Results-driven business development professional with over 5 years of experience in the DeFi ecosystem.</p>" +
    "<p>● Proven track record in driving ecosystem growth, managing TVL, and developing strategic partnerships.</p>" +
    "<p>●Adept at conceptualizing and implementing BD initiatives, building strong relationships with key stakeholders, and collaborating cross-functionally to achieve growth objectives.</p>" +
    "<p>●Highly analytical, with a strong network in the BTC and DeFi communities, and a basic technical understanding of blockchain technologies.</p>" +
        "<p>●A fast learner with exceptional communication and customer service skills, thriving in high-pressure environments.</p>" +
        "<p>●Eager to leverage my diverse skill set and enthusiasm to contribute effectively in a dynamic work setting in web3 industry.</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Blockchain", 80, "red"],
        ["NFT", 77, "blue"],
        ["JavaScript", 75, "#1abc9c"],
        ["SQL", 67, "rgba(0,0,0)"],
        ["Python", 60, "yellow"],
        ["Ai Influencer Marketing", 66, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>I have excellent foundational knowledge of blockchain technology, its various use cases, including supply chain management, and other related concepts. </li>" +
        "     <li>Familiar with the basics of Smart Contracts, Tokens, and DApps.</li>" +
        "     <li>Had experience of completing projects independently</li>" +
        "     <li>Proficient in using office software such as Word, Excel, etc</li>" +
        "     <li>Knowledgeable about the current state of the NFT market, including trends, developments, and key players</li>" +
        "     <li>Familiar with current state-of-the-art knowledge on blockchain, including popular market trends and developments</li>" +
        "     <li>Proficient in HTML, CSS, JavaScript and related front-end technologies</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
   


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

         ["2022/8/1 — 2023/12/10", "<br>Gate Global",
            "<p><strong>Ecosystem Manager </strong></p>" +
            "<p> Maintained partnerships with GateChain projects and ensured effective communication between projects and GateChain </p>" +
            "<p>Assisted GateChain and GateGrants projects in marketing promotions with the operation and marketing teams</p>"+
            "<p>Achieved a successful integration of over 30 projects based on GateChain out of the 100 reached out to</p>"+
            "<p>Reviewed and evaluated over 100 grant projects and facilitated the selection of over 20 projects for grants</p>"
        ],

        ["2022/1/1 — 2022/8/10", "<br>BKEX",
            "<p><strong>Business Manager </strong></p>" +
            "<p>Identified potential B-end KOLs through overseas social media platforms such as YouTube and Twitter, conducted business negotiations, and facilitated partnerships</p>" +
            "<p>Regularly engaged with users acquired through the company's online campaigns and conducted user profiling to develop targeted operational plans</p>"+
            "<p>Responsible for daily client maintenance, optimized SOP processes, and increased client engagement and loyalty</p>"+
            "<p>Facilitated effective communication by regularly sending promotional activities to potential clients' private emails or social media direct messages</p>"+
            "<p>Established personal social media accounts, shared daily news and intraday analysis on social media, and occasionally hosted Twitter Spaces or AMAs</p>"+
            "<p>Kept up-to-date with blockchain industry developments and competitor activities, continuously learning to enhance industry insights</p>"
        ],

        ["2020/1/1 — 2020/12/10", "<br>HTX(Huobi)",
            "<p><strong>Business Development (BD)</strong></p>" +
            "<p>Identified potential clients through social media platforms such as YouTube and Twitter, conducted business negotiations, and facilitated partnerships</p>" +
            "<p>Expanded network and resources through offline cooperation with company partners</p>"+
            "<p>Developed new clients through various company marketing and promotional activities, achieving quarterly performance targets</p>"+
            "<p>Analyzed the virtual currency investment needs of high-net-worth clients, helped clients develop virtual asset allocation plans, and provided professional investment advice to maximize their profit-loss ratio. Recommended suitable investment products based on evaluation results</p>"+
            "<p>Searched for and identified new cooperation resources to explore new business development ideas according to the company's business development needs</p>"+
            "<p>Actively participated in company marketing projects, developed new clients, and maintained existing clients. Provided clients with the latest industry trends and information, maintaining good relationships with clients</p>"+
            "<p>Kept up-to-date with blockchain industry developments and competitor activities, continuously learning to enhance industry insights</p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2022-8-14", "TMGM Community","With my partner co-founded TMGM Telegram community. Currently, it has exceeded 10,000 subscribers."],
          ["2021-06-15", "The Sproutie (GameFi Project)", "Participated in The Sproutie project's first AMA and KOL promotion, and achieved a good response with its first launch"],
        ["2021-05-07", "Everrise (DeFi Cross-Chain Infrastructure)","Participated in this project's first promotional launch, and cooperated with more than 10 million-level KOLs"],
        ["2021-03-07", "MoonRabbit (Yield Aggregation Platform)", "Participated in the project development and webpage design of MoonRabbit"]      
        
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/github.svg", "https://github.com/huangdejun", "GitHub"],
        ["./svg/博客.svg", "https://www.youtube.com/channel/UCpE1ySjMK803AURcRdrKoIg", "YouTube"],
        ["./svg/Telegram.svg", "https://t.me/JimmyHuang518", "Telegram"],
        ["./svg/X.svg", "https://twitter.com/HDJ522499", "Twitter"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
