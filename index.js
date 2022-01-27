// Your Code Here+
let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if (secondAnswer === 'follow it') {
        let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(secondAnswer === 'stay') {
            let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
        } else if (secondAnswer === 'spread the word') {
            let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

    }
} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a small shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
if (secondAnswer === 'ahead')
{
        let thirdAnswer = window.prompt('You reach the other side of the dragon. You take the small chest and turn around, to see the dragon awake and staring at you. You narrow down your actions to: run, place back the treasure, talk')
        switch(thirdAnswer)
        {
            case 'run':
                window.alert('You make it out with the treasure. You hear the dragon roaring but it is not following you. You make it home with the box, open it, to find a flower, that seems to be preserved very well.')
            break;
            case 'place':
                window.alert('You place the treasure back down. The dragon seems to say something, settles, and lays back down. You walk past it, and run home. You try telling others the dragon spoke, none to believe you.')
            break;
            case 'talk':
                window.alert('You greet the dragon. It seems to understand you. You sit down and start talking with it. This seems to spark joy between both of you.')
            break;
        }
}
else if (secondAnswer === 'away')
{
    let thirdAnswer = window.prompt('You come across a lake within the cave. There seems to be a light in the water. You think if you should dive in or leave')
    if (thirdAnswer === 'dive')
    {
        window.alert('You dive in and reach for the light. It looks like an ordinary stone, but emitting a faint light. You take it home. It is now your indoor light after serveral decades.')
    }
    else if (thirdAnswer === 'leave')
    {
        window.alert('You go home empty handed, to be greeted by a tiny blue bird waiting at your front door. It dissapates, then appears on your head. It seems harmless.')   
    }
}

}