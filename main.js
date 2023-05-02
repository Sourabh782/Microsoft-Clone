document.addEventListener("DOMContentLoaded", ()=>{
    let navImg = document.querySelector(".navImg");
    var button = 0;
    var microButton = 0;
    let navBtn = document.querySelector(".hamburger");
    let nav = document.querySelector(".nav");

    let subOpt = [];
    subOpt[0] = document.querySelector(".suboption0");
    subOpt[1] = document.querySelector(".suboption1");
    subOpt[2] = document.querySelector(".suboption2");
    subOpt[3] = document.querySelector(".suboption3");
    subOpt[4] = document.querySelector(".suboption4");
    subOpt[5] = document.querySelector(".suboption5");

    let expanded = [0,0,0,0,0,0];
    let expandable = [];
    expandable[0] = document.querySelector(".expandable0");
    expandable[1] = document.querySelector(".expandable1");
    expandable[2] = document.querySelector(".expandable2");
    expandable[3] = document.querySelector(".expandable3");
    expandable[4] = document.querySelector(".expandable4");
    expandable[5] = document.querySelector(".expandable5");

    navBtn.addEventListener("click", ()=>{
        if(button == 0){
            navImg.src = "assets/cross.png";
            button = 1;
            nav.style.display = "block";
        }
        else{
            navImg.src = "assets/hamburger.png";
            button = 0;
            nav.style.display = "none";
        }
    })
    expandable[0].addEventListener("click", ()=>{
        if(expanded[0] == 0){
            expanded[0] = 1;
            subOpt[0].style.display = "block";
        }
        else{
            expanded[0]=0;
            subOpt[0].style.display = "none";
        }
    })
    expandable[1].addEventListener("click", ()=>{
        if(expanded[1] == 0){
            expanded[1] = 1;
            subOpt[1].style.display = "block";
        }
        else{
            expanded[1]=0;
            subOpt[1].style.display = "none";
        }
    })
    expandable[2].addEventListener("click", ()=>{
        if(expanded[2] == 0){
            expanded[2] = 1;
            subOpt[2].style.display = "block";
        }
        else{
            expanded[2]=0;
            subOpt[2].style.display = "none";
        }
    })
    expandable[3].addEventListener("click", ()=>{
        if(expanded[3] == 0){
            expanded[3] = 1;
            subOpt[3].style.display = "block";
        }
        else{
            expanded[3]=0;
            subOpt[3].style.display = "none";
        }
    })
    expandable[4].addEventListener("click", ()=>{
        if(expanded[4] == 0){
            expanded[4] = 1;
            subOpt[4].style.display = "block";
        }
        else{
            expanded[4]=0;
            subOpt[4].style.display = "none";
        }
    })
    expandable[5].addEventListener("click", ()=>{
        if(expanded[5] == 0){
            expanded[5] = 1;
            subOpt[5].style.display = "block";
        }
        else{
            expanded[5]=0;
            subOpt[5].style.display = "none";
        }
    })

    allMicrosoft = document.querySelector(".allMicrosoft");
    allMicro = document.querySelector(".microContainer");

    allMicrosoft.addEventListener("click", ()=>{
        if(microButton == 0){
            microButton = 1;
            allMicro.style.display = "inline-block";
            allMicro.style.zIndex = "60"
            allMicrosoft.style.backgroundColor = "#f2f2f2";
        }
        else{
            microButton=0;
            allMicro.style.display = "none";
            allMicrosoft.style.backgroundColor = "#fff";
        }
    })

    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const largeImg = document.querySelector(".largeImage");
    const medImg = document.querySelector(".mediumImage");
    const titlebox = document.querySelector(".Titlebox");
    const title = document.querySelector(".title365");
    const para = document.querySelector(".para365");
    const leftBullet = document.querySelector(".leftBullet");
    const rightBullet = document.querySelector(".rightBullet");
    const minecraft = document.querySelector(".minecraftBtn");
    const notMinecraft = document.querySelector(".notMinecraft");
    const notMinecraft2 = document.querySelector(".notMinecraft2");
    var isOffice = 0;

    leftBtn.addEventListener("click", changeImage);
    rightBtn.addEventListener("click", changeImage);
        
    function changeImage(e){
        if(isOffice == 0){
            largeImg.src = "assets/largeMicrosoftLegends.png";
            medImg.src = "assets/microsoftlegends.png";
            minecraft.style.display = "inline-block";
            notMinecraft.style.display = "none";
            notMinecraft2.style.display = "none";
            titlebox.style.backgroundColor = "white";
            title.textContent = "Unite the Overworld in Minecraft Legends";
            para.textContent = "Explore lush biomes, make alliances with new friends and familiar mobs, then face the piglins in epic battles. But be warned—they always fight back";
            rightBullet.style.backgroundColor = "black";
            leftBullet.style.backgroundColor = "white";
            isOffice = 1;
        }
        else{
            largeImg.src = "assets/largemicrosoftoffice.png";
            medImg.src = "assets/microsoftoffice.png";
            minecraft.style.display = "none";
            notMinecraft.style.display = "inline-block";
            notMinecraft2.style.display = "inline-block";
            titlebox.style.backgroundColor = "transparent";
            title.textContent = "Microsoft 365";
            para.textContent = "Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps";
            rightBullet.style.backgroundColor = "white";
            leftBullet.style.backgroundColor = "black";
            isOffice = 0;
        }
    }

    let start = true;

    const pause = document.querySelector(".pause");
    const play = document.querySelector(".play");

    pause.addEventListener("click", ()=>{
        if(start){
            start = false;
            play.src = "assets/play.png";
        }
        else{
            start = true;
            play.src = "assets/pause.png";
        }
    })

    setInterval(()=>{
        if(start){
            changeImage();
        }
    }, 5000);
    
    const btn = document.querySelector(".button");
    
    btn.addEventListener("click", ()=>{
        window.scrollTo({top: 0, behavior: "smooth"});
    })
})