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

    function data(){
        //console.log(p)
        $.get(
            "https://lab.isaaclin.cn/nCoV/api/news",
            {
              page:1,
              num: "10",
            },
            function (data, status) {
              var news=document.querySelector('.hotnew')
              //console.log(data);
              html=''
              div=''
              data=data.results
              
              for(var i=0;i<data.length;i++){
                  date=new Date(Number(data[i].pubDate))
                  div='<li><a href="'+data[i].sourceUrl+'" class="title">'+data[i].title+'</a></li>'
                  html+=div;
                  //console.log(html)
                  //console.log(div)
              }
            
              news.innerHTML=html;

            }
          );
    }
    $(document).ready(function () {
            data();
        
      });

//最新新闻

