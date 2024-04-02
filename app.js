let health = 200;
let amber1 = ` INCOMING COMMUNICATIONS SOURCE: AMBER <=======This entity is classified as a canine. Typically, their behavioral algorithms are programmed towards amicability and social engagement with humans.=======> Current Vitals indicate your health level is at ${health}`;

const prompt = require('prompt-sync')();
console.log(`In the technologically superior civilization of Goya, you are a miner with an unquenchable thirst for discovery, stumbled upon an anomalous signal from a distant galaxy. Despite skepticism from the Goyan Council and the potential personal risks, your curiosity and desire for a monumental discovery propelled you to covertly use the Compressor, a device capable of bending space for travel. Guided by a mix of defiance, curiosity, and ambition you embarked on a clandestine journey towards the signal. 
`);

let username = prompt('What is your name? ');
username = 'Qi' + username + 'ik'
console.log(`

Access Granted. Initializing Compressor Protocol. Welcome, ${username}. Coordinates of the identified signal have been successfully uploaded. Initiating jump preparation sequence. Please align visual receptors with central retinal sensor for commencement.

`);
let prologue = function(){
    let jump = prompt(`All systems are nominal. Press "AZ5" to initialize jump. `);
    jump = jump.toLowerCase();
    if(jump.includes(`az`)) {
        console.log(`
    
    Activating the Compressor, reality blurs into a vortex of colors as Exomat fuels a tunnel through space. A chill hits as you're propelled by ionization into a state where movement and stillness blend, making time and distance irrelevant. The cosmos seems to contract around you, rapidly closing the vast distances. Then, as swiftly as it began, the journey ends; you step out at your destination, the universe seamlessly reknitting behind you, leaving only the memory of an extraordinary voyage. ${username} welcome to earth.
    
    `);
    } else {
        console.log(`${jump} is not the correct Code, this process cannot be reversed without catastrophic consequences. Please enter "AZ5" to initiate or Enter ESD Code to terminate process at your own risk`)
    
    const retry = prompt(`

Please enter "AZ1" to re-initiate Compresson Protocol or Enter ESD Code to terminate process at your own risk. `)
if(retry.includes('az')) {
    prologue()
        
} else {
    console.log(`${username}, you have killed yourself and destroyed half of the city. Game Over`)
}
}
}
    prologue()
    console.clear();
console.log(`Chapter 1: The Arrival`);
console.log(`

The moment of arrival at the destination is both abrupt and serene. As the compressed fabric of space begins its gradual expansion back to its original state, a distinct sensation of deceleration envelops you, the cosmic speedbump at the journey's end. You emerge from the tunnel not with a jolt, but with a gentle release, as if the universe itself exhales, delicately placing you into your new surroundings.

The destination unfolds around you in a cascade of sensory input, each detail crisp and heightened by the contrast to the tunnel's void. Light, color, and sound flood back in, grounding you in the reality of your new location. The transition from the compressed, ionized pathway to the tangible world is seamless, yet the shift in environment is palpable. The air feels richer, gravity asserts itself gently, and the panorama before you adjusts from the abstract beauty of compressed space to the intricate detail of Earth.

As the tunnel dissipates, leaving no physical trace of its existence, you stand at the threshold of exploration, the immediate area offering the first clues to the mysteries that await. 



`);




let chapter1 = function(){
    
    let arrival = prompt(`${username}, you are exhausted from the jump. I recommend you rest but you are free to explore if you so desire. What would you like to do? `)
    if(arrival.includes(`rest`)) {
        console.log(`
        
        Commencing energy replenishment protocol for ${username}. Current analysis deems photosynthesis as the most efficient energy source. Replenishment duration is specified at 180 seconds. Please remain stationary during this process. Post-completion, energy levels will be optimal for exploration activities.
        
        `);

        console.log(`${username}, your energy is sufficient enough for further activity. It is time to explore.`)
        const rested = prompt(`
        
        Type "Let's go" to continue. 
        
        `);
        if(rested.includes('let')) {
            console.log(`
        
        You feel a profound sense of accomplishment. You've ventured where no Goyan has before, propelled by an insatiable curiosity and a daring spirit. There's pride in that, a recognition of your own bravery and determination. Yet, accompanying this pride is a budding sense of responsibility. You're not just an explorer; you're now a representative of Goya, however unofficially, on a planet that doesn't know you exist.`);
    }

        
    } else {
        health += -150;
        console.log(`
        
        You feel a profound sense of accomplishment. You've ventured where no Goyan has before, propelled by an insatiable curiosity and a daring spirit. There's pride in that, a recognition of your own bravery and determination. Yet, accompanying this pride is a budding sense of responsibility. You're not just an explorer; you're now a representative of Goya, however unofficially, on a planet that doesn't know you exist.`);
    }
    console.log(`
    
    You take your first steps on earth, every sound is new to you. You see a strange four legged creature in the distance.`);

    console.log(`
    You have access to a portable artificial intelligence called Amber. You can get info on your vitals and access to information that will facilitate your journey. `);

    let encounter1 = prompt(` 
    A: To Hide;
    B: To Approach;
    C: Consult Amber
    `);
    encounter1 = encounter1.toLowerCase();
    if(encounter1 === "a") {
        console.log(' You take cover behind a near bush hoping the creature will not see you. You wonder what this could possibly be so you decide to consult Amber.');
        console.log(
            
            amber1
            
            );
    } else if(encounter1 === "b") {
        console.log('As a pure Goyan, emotions such as fear are foreign to you. You approach the strange creature and consult Amber to determine what it might be.'
        
        );
        console.log(
            
            amber1
            
            );
    } else {
        console.log(amber1);
    }
console.log();
} 

chapter1();

