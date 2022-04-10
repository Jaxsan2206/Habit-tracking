const body = document.querySelector('body');

const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed'];

window.addEventListener('hashchange', updateContent);


function updateMain(path) {                 
    body.innerHTML = '';
    if (path) {
        // console.log(path)
        switch(path){
            case '#login':
                renderLoginForm(); break;
            case '#register':
                renderRegisterForm(); break;
            case '#feed':
                renderFeed(); break;
            default:
                render404(); break;
        }
    } else {
        renderHomepage();
    }
}


function updateContent(){
    const path = window.location.hash;
    // console.log(path)
    // console.log(!currentUser())
    // console.log(privateRoutes.includes(path))
    if (privateRoutes.includes(path) && !currentUser() ){  
        window.location.hash = '#';    
        // console.log('fired')    
    } else {                                
        // console.log('Else fired :)')
        // updateNav();
        updateMain(path);       
    }
}


function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

updateContent(); 

    






































    // function createFooter(){
    //     // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE. 
    // }
    
    // function updateNav(){
    //     // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE/ 
    //     //YOU CAN ADD A IF STATEMENT, IF THERE IS A USER, THEN CREATE THIS NAV BAR, IF NOT, CREATE THE PUBLIC ONE. 
    // }