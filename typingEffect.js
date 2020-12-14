import React, { Component } from 'react';
import './style.css'
class TypingEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const Typing = ()=>{
            const typedTextSpan = document.querySelector(".typed-text");
            const cursorSpan = document.querySelector(".cursor");

            const textArray = ["FRANK", "JUNGLE", "CASHCOLD", "ASEM"];
            const typingDelay = 200;
            const erasingDelay = 100;
            const newTextDelay = 2000; // Delay between current and next text
            let textArrayIndex = 0;
            let charIndex = 0;

            function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } 
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
            }

            function erase() {
            if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
            } 
            else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
            }
            }

            document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textArray.length) setTimeout(type, newTextDelay + 250);
            });
        }
    Typing()
    }
    render() { 
        return ( 
            <div className='typingEffectMain'>
                <section className='typing'>
                <div class="container">
                    <p>MY NAME IS <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default TypingEffect;