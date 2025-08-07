export function initTypingEffect(element) {
    const words = JSON.parse(element.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
        const currentWord = words[wordIndex];
        const displayText = isDeleting 
            ? currentWord.substring(0, charIndex - 1)
            : currentWord.substring(0, charIndex + 1);
        
        element.textContent = displayText;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            wordIndex = (!isDeleting && wordIndex === words.length - 1) 
                ? 0 
                : isDeleting ? wordIndex : wordIndex + 1;
            setTimeout(type, 1000);
        }
    };
    
    type();
}