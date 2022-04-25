var page=document.querySelector('#page');
    window.p=1;
    function data(p=1){
        console.log(p)
        $.get(
            "https://lab.isaaclin.cn/nCoV/api/news",
            {
              page:p,
              num: "15",
            },
            function (data, status) {
              var news=document.querySelector('.news')
              //console.log(data);
              html=''
              div=''
              data=data.results
              
              for(var i=0;i<data.length;i++){
                  date=new Date(Number(data[i].pubDate))
                  div='<tr class="new"><td><a href="'+data[i].sourceUrl+'" class="title">'+data[i].title+'</a></td><td class="date">'+date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8)+'</td></tr>'
                  html+=div;
                  //console.log(html)
                  //console.log(div)
              }
            
              news.innerHTML=html;
              page.style.display='block';
            }
          );
    }
    $(document).ready(function () {
            data();
        
      });
      function pre_page(p) {
        
        if(p<=1){
            document.querySelector('#pre').style.cursor='no-drop';
            return;
        }else{
            window.p--;
            document.querySelector('#pre').style.cursor='pointer';
        }
        data(window.p);
        
        
      }
      function next_page(p) {
        window.p++;
        document.querySelector('#pre').style.cursor='pointer';
        data(window.p);
        
      }
      //next_page(2)