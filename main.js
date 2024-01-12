const containerFormEle = document.querySelector('.container-form');
const containerInfoEle = document.querySelector('.container-info');
const fnameEle = document.querySelector('#fnames');
const btnEle = document.querySelector('#btn');

const exBtnMoreEle = document.querySelector('#ex-btn-more');
const exBtnLessEle = document.querySelector('#ex-btn-less');
const experienceEle = document.querySelector('#experience');
const experienceTitleEle = document.querySelector('#experience-title');

const edBtnMoreEle = document.querySelector('#ed-btn-more');
const edBtnLessEle = document.querySelector('#ed-btn-less');
const educationEle = document.querySelector('#education');
const educationTitleEle = document.querySelector('#education-title');

const acBtnMoreEle = document.querySelector('#ac-btn-more');
const acBtnLessEle = document.querySelector('#ac-btn-less');
const activateEle = document.querySelector('#activate');
const activateTitleEle = document.querySelector('#activate-title');

const inBtnMoreEle = document.querySelector('#in-btn-more');
const inBtnLessEle = document.querySelector('#in-btn-less');
const interestsEle = document.querySelector('#interests');
const interestsTitleEle = document.querySelector('#interests-title');

const laBtnMoreEle = document.querySelector('#la-btn-more');
const laBtnLessEle = document.querySelector('#la-btn-less');
const languagesEle = document.querySelector('#languages');
const languagesTitleEle = document.querySelector('#languages-title');

const skBtnMoreEle = document.querySelector('#sk-btn-more');
const skBtnLessEle = document.querySelector('#sk-btn-less');
const skillEle = document.querySelector('#skill');
const skillTitleEle = document.querySelector('#skill-title');

const emailregex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

fnameEle.addEventListener('change', function(){
    
})

btnEle.addEventListener('click', function(){
    if(!fnameEle.value.match(emailregex)){
        alert(' nhập đúng địc chỉ mail');
        fnameEle.value = "";
        return;
    }
    else{
        containerFormEle.style.display = "none";
        containerInfoEle.style.display = "block";
        }
    })

experienceTitleEle.addEventListener('mouseout', function() {
        exBtnMoreEle.style.display = "block";
    });

educationTitleEle.addEventListener('mouseout', function() {
        edBtnMoreEle.style.display = "block";
    });

activateTitleEle.addEventListener('mouseout', function() {
        acBtnMoreEle.style.display = "block";
    });

interestsTitleEle.addEventListener('mouseout', function() {
        inBtnMoreEle.style.display = "block";
    });

languagesTitleEle.addEventListener('mouseout', function() {
        laBtnMoreEle.style.display = "block";
    });

skillTitleEle.addEventListener('mouseout', function() {
        skBtnMoreEle.style.display = "block";
    });


exBtnMoreEle.addEventListener('click', function(){
    exBtnLessEle.style.display = "block";
    experienceEle.style.display = "block";
    exBtnMoreEle.style.display = "none";
    })

exBtnLessEle.addEventListener('click', function(){
    exBtnLessEle.style.display = "none";
    experienceEle.style.display = "none";
    })

edBtnMoreEle.addEventListener('click', function(){
    edBtnMoreEle.style.display = "none";
    edBtnLessEle.style.display = "block";
    educationEle.style.display = "block";
    })
    
edBtnLessEle.addEventListener('click', function(){
    edBtnLessEle.style.display = "none";
    educationEle.style.display = "none";
    })

acBtnMoreEle.addEventListener('click', function(){
    acBtnMoreEle.style.display = "none";
    acBtnLessEle.style.display = "block";
    activateEle.style.display = "block";
    })
        
acBtnLessEle.addEventListener('click', function(){
    acBtnLessEle.style.display = "none";
    activateEle.style.display = "none";
    })

inBtnMoreEle.addEventListener('click', function(){
    inBtnMoreEle.style.display = "none";
    inBtnLessEle.style.display = "block";
    interestsEle.style.display = "flex";
    interestsEle.style.paddingTop = "30px";
    interestsEle.style.justifyContent ="center";
    interestsEle.style.gap = "10px";
    })
            
inBtnLessEle.addEventListener('click', function(){
    inBtnLessEle.style.display = "none";
    interestsEle.style.display = "none";
    })

laBtnMoreEle.addEventListener('click', function(){
    laBtnMoreEle.style.display = "none";
    laBtnLessEle.style.display = "block";
    languagesEle.style.display = "block";
        })
                
laBtnLessEle.addEventListener('click', function(){
    laBtnLessEle.style.display = "none";
    languagesEle.style.display = "none";
    })

skBtnMoreEle.addEventListener('click', function(){
    skBtnMoreEle.style.display = "none";
    skBtnLessEle.style.display = "block";
    skillEle.style.display = "block";
    })
                    
skBtnLessEle.addEventListener('click', function(){
    skBtnLessEle.style.display = "none";
    skillEle.style.display = "none";
    })

function loatform(){
    containerFormEle.style.display = "block";
    containerInfoEle.style.display = "none";

    exBtnMoreEle.style.display = "none";
    exBtnLessEle.style.display = "none";
    experienceEle.style.display = "none";

    edBtnMoreEle.style.display = "none";
    edBtnLessEle.style.display = "none";
    educationEle.style.display = "none";

    acBtnMoreEle.style.display = "none";
    acBtnLessEle.style.display = "none";
    activateEle.style.display = "none";

    inBtnMoreEle.style.display = "none";
    inBtnLessEle.style.display = "none";
    interestsEle.style.display = "none";

    laBtnMoreEle.style.display = "none";
    laBtnLessEle.style.display = "none";
    languagesEle.style.display = "none";

    skBtnMoreEle.style.display = "none";
    skBtnLessEle.style.display = "none";
    skillEle.style.display = "none";
}

loatform();