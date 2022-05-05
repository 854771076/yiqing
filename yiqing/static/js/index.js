var navs=document.querySelectorAll('#nav-list>a');
        var contents=document.querySelectorAll('.content');
        var flag=0;
        for(var i=0;i<navs.length;i++){
            //navs[i].setAttribute('data-index',i);
            // if(i<2){
            //     navs[i].addEventListener('mouseover',function(){
            //         this.children[0].style.display='block';
            //     })
            //     navs[i].addEventListener('mouseout',function(){
            //         this.children[0].style.display='none';
            //     })
            // }
            if(i!=2 ){
                navs[i].addEventListener('click',function(e){
                    for(var i=0;i<navs.length;i++)
                    {
                        navs[i].style.backgroundColor='';
                        navs[i].style.color='';
                        contents[i].style.display='none';
                    }
                    this.style.backgroundColor='#edeef0';
                    this.style.color='orange';
                    contents[Number(this.getAttribute('data-index'))].style.display='block';
                    flag=1;
                })
            }else{
                
                navs[i].addEventListener('click',function(e){
                    for(var i=0;i<navs.length;i++)
                    {
                        navs[i].style.backgroundColor='';
                        navs[i].style.color='';
                        contents[i].style.display='none';
                    }
                    this.style.backgroundColor='#edeef0';
                    this.style.color='orange';
                    contents[0].style.display='block';
                    flag=1;
                })
            }
            }
            
        if(flag==0){
            navs[0].style.backgroundColor='#edeef0';
            navs[0].style.color='orange';
            contents[0].style.display='block';
        }    

//knowledges

var knownav=document.querySelectorAll('.knowledges>ul>li')
var allknowledges=document.querySelectorAll('.knowledge')
var know1=document.querySelectorAll('.knowid1')
var know2=document.querySelectorAll('.knowid2')
var know3=document.querySelectorAll('.knowid3')
var know4=document.querySelectorAll('.knowid4')
var know5=document.querySelectorAll('.knowid5')
var know6=document.querySelectorAll('.knowid6')

knownav[0].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='block';
    }
    
}
    
knownav[1].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know1.length;i++){
        know1[i].style.display='block';
    }
    
}
knownav[2].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know2.length;i++){
        know2[i].style.display='block';
    }
}
knownav[3].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know3.length;i++){
        know3[i].style.display='block';
    }
}
knownav[4].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know4.length;i++){
        know4[i].style.display='block';
    }
}
knownav[5].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know5.length;i++){
        know5[i].style.display='block';
    }
}
knownav[6].onclick=function(){
    for(var i=0;i<allknowledges.length;i++){
        allknowledges[i].style.display='none';
    }
    for(var i=0;i<know6.length;i++){
        know6[i].style.display='block';
    }
}


