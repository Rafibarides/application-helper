document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners after DOM is loaded
    
    // Contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const email = 'rafibaridesmusic@gmail.com';
            const phone = '9175997448';
            const city = 'Brooklyn, NY';
            
            let textToCopy = '';
            if (this.querySelector('.fa-envelope')) {
                textToCopy = email;
            } else if (this.querySelector('.fa-phone')) {
                textToCopy = phone;
            } else if (this.querySelector('.fa-map-marker-alt')) {
                textToCopy = city;
            }
            
            copyToClipboard(textToCopy, this);
        });
    });
    
    // Portfolio buttons
    const portfolioButtons = document.querySelectorAll('.portfolio-btn');
    portfolioButtons.forEach(button => {
        button.addEventListener('click', function() {
            let url = '';
            if (this.innerHTML.includes('Software/Dev')) {
                url = 'https://rafi-barides.com/software';
            } else if (this.innerHTML.includes('Product/Design')) {
                url = 'https://rafi-barides.com/product';
            } else if (this.innerHTML.includes('Creative Tech')) {
                url = 'https://rafi-barides.com/';
            }
            
            copyToClipboard(url, this);
        });
    });
    
    // LinkedIn copy button
    const linkedinBtn = document.querySelector('.copy-btn:not(.bio-copy-btn)');
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', function() {
            copyToClipboard('https://www.linkedin.com/in/rafibarides/', this);
        });
    }
    
    // Bio copy button
    const bioBtn = document.querySelector('.bio-copy-btn');
    if (bioBtn) {
        bioBtn.addEventListener('click', function() {
            const bioText = "I'm a multidisciplinary creative with a foundation in UI/UX, full-stack development, and a passion for turning raw ideas into polished, user-centered digital experiences. From self-publishing albums to launching apps, I thrive at the intersection of design and technology. I've collaborated with artists, engineers, and entrepreneurs to ship products seen on billboards, in magazines, and on major stages like MSG and Broadway. My training at the Marcy Lab School sharpened my skills in product design, JavaScript, and computer science fundamentals. I bring obsessive attention to detail, strong cross-functional instincts, and a relentless drive to create what doesn't yet exist.";
            copyToClipboard(bioText, this);
        });
    }
    
    // Resume action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('edit')) {
                let url = '';
                if (this.closest('.item').querySelector('.item-title').textContent.includes('Product Design')) {
                    url = 'https://docs.google.com/document/d/131jI1x7anwxL1M7-viAUkNI8Ev5UGLLJ4P1cEfBcps0/edit?usp=sharing';
                } else {
                    url = 'https://docs.google.com/document/d/1NO4tG4eHrDlqGhtoDBd4x_uxfrKdzzNgvHtlitWwxUQ/edit?usp=sharing';
                }
                chrome.tabs.create({ url: url });
            } else if (this.classList.contains('finder')) {
                let filePath = '';
                if (this.closest('.item').querySelector('.item-title').textContent.includes('Product Design')) {
                    filePath = '/Users/ralphbarides/Desktop/Personal/Job Application/Resume/Resumes/_barides_rafi_resume_PD.pdf';
                } else {
                    filePath = '/Users/ralphbarides/Desktop/Personal/Job Application/Resume/Resumes/_barides_rafi-resume_SWD.pdf';
                }
                alert(`File location:\n${filePath}`);
            }
        });
    });
});

function copyToClipboard(text, button) {
    // Use Chrome extension clipboard API
    navigator.clipboard.writeText(text).then(function() {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        // Fallback for clipboard
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
} 