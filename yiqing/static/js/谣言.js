var page=document.querySelector('#page');
    window.p=Math.floor(Math.random() * 100+1);
    function yaodata(p=1){
        $.get(
            "https://lab.isaaclin.cn/nCoV/api/rumors",
            {
              page:p,
              num: "1",
            },
            function (data, status) {
              var lei=document.querySelector('.lei')
              //console.log(data);
              html=''
              div=''
              data=data.results
              
              for(var i=0;i<data.length;i++){
                  date=new Date(Number(data[i].pubDate))
                  //console.log(data[i])
                  div='<div class="lei"><h3>'+data[i].title+'</h3><div class="main">&nbsp;&nbsp;&nbsp;&nbsp;'+data[i].body+'</div><div class="false">假</div></div>'
                  html+=div;
                  //console.log(html)
                  //console.log(div)
              }
            
              lei.innerHTML=html;
              page.style.display='block';
            }
          );
    }
    $(document).ready(function () {
        yaodata();
        
      });
      function pre_page(p) {
        
        if(p<=1){
            document.querySelector('#pre').style.cursor='no-drop';
            return;
        }else{
            window.p--;
            document.querySelector('#pre').style.cursor='pointer';
        }
        yaodata(window.p);
        
        
      }
      function next_page(p) {
        window.p++;
        document.querySelector('#pre').style.cursor='pointer';
        yaodata(window.p);
        
      }
      //next_page(2)