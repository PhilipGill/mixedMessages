const randomMessageArray = [
    'We become what we think about. – Earl Nightingale',
    'People who are crazy enough to think they can change the world, are the ones who do. -Rob Siltanen',
    'Optimism is the one quality more associated with success and happiness than any other. -Brian Tracy',
    'Happiness is not something readymade. It comes from your own actions. -Dalai Lama',
    'All our dreams can come true if we have the courage to pursue them. -Walt Disney',
    'Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill',
    'Believe you can and you’re halfway there. -Theodore Roosevelt',
    'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. –Jimmy Dean',
    'Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new. -Brian Tracy',
    'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. – William James'
];

const randomDay = [
    'Today is a great day.',
    'Today, we need to work to ensure that we succeed.',
    'Today, the choice is yours.'
];

const randomTitle = [
    'Here\'s Something to Think About',
    'What Do You Think of This?',
    'Consider This'
]
/*
console.log(randomMessageArray);
console.log(randomDay);
console.log(randomTitle);
*/

const randomMessage = () => {
    const randomTitleNum = Math.floor(Math.random() * randomTitle.length);
    const randomDayNum = Math.floor(Math.random() * randomDay.length);
    const randomMessageNum = Math.floor(Math.random() * randomMessage.length);
    const title = randomTitle[randomTitleNum];
    const day = randomDay[randomDayNum];
    const message = randomMessageArray[randomMessageNum];
    console.log(title);
    console.log(day);
    console.log(message);
}

randomMessage()

