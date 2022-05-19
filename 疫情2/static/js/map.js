function mapdata(){
    //console.log(p)
    $.get(
        "https://lab.isaaclin.cn/nCoV/api/area",
        {
            latest:1
        },
        function (data, status) {
          data=data.results
          res=[]
          for(var i=0;i<data.length;i++){
              if(data[i].countryName=='中国'){
                  //res.push({name:data[i].provinceShortName,value:[data[i].currentConfirmedCount,data[i].confirmedCount,data[i].curedCount,data[i].deadCount]})
                  res.push({name:data[i].provinceShortName,value:[data[i].deadCount,data[i].curedCount,data[i].confirmedCount,data[i].currentConfirmedCount]})
              }
          }
          
          var mydata =res
    var chart = echarts.init(document.getElementById('map'));

    var option = {
        backgroundColor: '#FFFFFF',
        title: {
            text: '中国疫情地图',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: function(params) {
                var res = params.name+'<br/>';
                var myseries = option.series;
                for (var i = 0; i < myseries.length; i++) {
                    for(var j=0;j<myseries[i].data.length;j++){
                        if(myseries[i].data[j].name==params.name){
                            for(var k=3;k>=0;k--){
                                res+=myseries[i].name[k] +' : '+myseries[i].data[j].value[k]+'</br>';
                            }
                            
                        }
                    }
                }
                return res;
            }

        },
        visualMap: {
            //text:'图例',
            show : true,
            x: 'right',
            y: 'bottom',
            splitList: [ 
                {start: 0, end: 1},{start: 500, end: 1000},{start: 1000},{start: 1, end: 10},{start: 10, end: 100},{start: 100, end: 500},
            ],
            color: [ '#976461','#b27372','#cb8382', '#e09694', '#ebb4a8', '#ffffff',],
            
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
        },
        series: [{
            //name: ['现有确诊','积累确诊','治愈','死亡'],
            name: ['死亡','治愈','积累确诊','现有确诊'],
            type: 'map',
            mapType: 'china', 
            roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:mydata
        }]
    };

    chart.setOption(option);
            }
        );
        
    }
    $(document).ready(function () {
        mapdata();
    
  });
