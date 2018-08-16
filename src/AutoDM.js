const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const AutoDM = () => {
  var stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  stream.on("user", SendMessage);
};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: Hey guys, 

          My name is Alexander Jackson, and I'm the Founder & CEO of uVium, a specialist content marketing agency for blockchain and cryptocurrency startups and projects.
          
          As you know, more and more companies are starting to adopt blockchain technology to build their products, applications and platforms, which is leading to higher levels of competition.  

          In this environment, having a winning content strategy is imperative, to ensure that you stand out from your competitors.

          I noticed that you could improve your digital presence by focusing on creating and distributing refined, long-form written content and creating sharper images and infographics.

          In particular, you should consider creating a "pillar content" series (a series of related 1,500+ word articles), and subsequently turning that series into a PDF eBook/Report, to give away to your audience.

          In 2018, long-form, pillar content is performing the best.  You should therefore consider creating "content clusters" around a big theme such as the above, and writing multiple 1,500-2,000 word articles on that topic.  

          This will help drive traffic to your site and increase brand engagement, which you can then seek to convert into users.  

          For example, successful long-form pillar series have been created around topics such as "The Beginner's Complete Guide to Understanding Cryptocurrency" and "The Ultimate Guide to Successfully Marketing an ICO in 2018".  I have a number of similar ideas that we could use for your brand.

          At uVium, we create high-quality long form written content and distribute that content on Facebook, Twitter, LinkedIn, Medium, SteemIt, Telegram, and your website's blog.

          We also create images and infographics for Facebook, Linkedin, SteemIt, Telegram, Instagram, and Twitter.  High-quality images can be used both in isolation and alongside written content to engage users and clients and build brand equity.
          
          Let me know if you're interested in setting up a free strategy call to discuss how we can help you design and refine your content strategy, and become a dominant brand.  

          I can't wait to hear back from you!

          Alex
  };
  
