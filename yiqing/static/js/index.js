var navs=document.querySelectorAll('#nav-list>a');
        var contents=document.querySelectorAll('.content');
        var flag=0;
        for(var i=0;i<navs.length;i++){
            navs[i].setAttribute('data-index',i);
            // if(i<2){
            //     navs[i].addEventListener('mouseover',function(){
            //         this.children[0].style.display='block';
            //     })
            //     navs[i].addEventListener('mouseout',function(){
            //         this.children[0].style.display='none';
            //     })
            // }
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
        }
        if(flag==0){
            navs[0].style.backgroundColor='#edeef0';
            navs[0].style.color='orange';
            contents[0].style.display='block';
        }    

//tab栏

    


