const fortunes = [
    "🚀 Your dreams of AI and robotics will soon take shape—keep learning, keep building!",
    "💡 Every line of code you write brings you one step closer to your revolutionary creation.",
    "🔥 Stay consistent! The future belongs to those who never give up.",
    "🤖 Your AI-powered future assistant is waiting to be built by you. Don't stop now!",
    "🎯 Challenges are just undiscovered opportunities—keep pushing forward!",
    "⚙️ Learning today, innovating tomorrow! Your hard work will redefine the future.",
    "🌟 Trust your vision! The world will recognize your brilliance soon.",
    "💻 Every bug you fix is a step toward mastery. Debug, learn, grow!",
    "🔋 Recharge, refocus, and keep hustling—the next breakthrough is near!",
    "🧠 Your knowledge in AI and robotics will make a difference. Stay dedicated!",
    "🌍 The world needs more dreamers like you—turn your ideas into reality!",
    "🎶 Just like a perfect algorithm, your success is about to be executed flawlessly!",
    "🦾 One day, your AI will say: 'Thank you for creating me, master!'",
    "🛠️ Every failed attempt is just a prototype for your final masterpiece!",
    "🚦 Keep moving forward—green lights are ahead in your journey!",
    "🚀 The world will soon witness the AI genius in you. Keep coding, keep innovating!",
    "🤖 Your future AI assistant is just waiting for you to finish building it!",
    "⚡ Every keystroke brings you closer to revolutionizing the tech world!",
    "🔬 Your curiosity will lead to groundbreaking discoveries—never stop exploring!",
    "📡 The future belongs to those who dare to create it. You are on the right path!",
    "🌟 Every obstacle you overcome is another level unlocked in your success story!",
    "🎯 One bug at a time, one project at a time—you’re crafting your legacy!",
    "🔥 Nothing is impossible for a mind like yours—keep pushing, keep building!",
    "🦾 Your AI and robotics dream is no longer a dream—it's your destiny!",
    "💡 The next big innovation is hidden in your ideas—bring them to life!",
    "💻 Code, debug, repeat—this cycle will lead you to mastery!",
    "🛠️ The best inventors started just like you—learning, failing, and rising again!",
    "📖 Knowledge is your superpower—keep upgrading your mind like software!",
    "🌍 One day, your tech will make the world a better place—just keep going!",
    "🎶 Your journey is like a perfect algorithm—executing success step by step!",
    "🛰️ Your creations will reach beyond the stars—think big, build bigger!",
    "💪 The grind is tough, but so are you. Your future self will thank you!",
    "🔍 The breakthrough you’re looking for is just one idea away—stay sharp!",
    "🏆 Champions don’t quit. You’re already on the road to greatness!",

  ];
  
  document.getElementById("openCookie").addEventListener('click', function(){
    let randomIndex =Math.floor(Math.random()*fortunes.length);
    document.getElementById('fortuneMsg').
    innerText = fortunes[randomIndex];
  })
  