﻿function CheckLeader() {
				
				var url = window.location.toString(); //取得當前網址
			    var str = ""; //參數中等號左邊的值
			    var roomID = ""; //參數中等號右邊的值
			    if (url.indexOf("?") != -1) {
			        //如果網址有"?"符號
			        var ary = url.split("?")[1].split("&");
			        //取得"?"右邊網址後利用"&"分割字串存入ary陣列 ["a=1","b=2","c=3"]
			        for (var i in ary) {
			            //取得陣列長度去跑迴圈，如:網址有三個參數，則會跑三次
			            str = ary[i].split("=")[0];
			            //取得參數"="左邊的值存入str變數中
			            if (str == "roomID") {
			                //若str等於想要抓取參數 如:b
			                roomID = decodeURI(ary[i].split("=")[1]); //抓msg
			                //取得b等號右邊的值並經過中文轉碼後存入str_value
			            }
			        }
			    }
			    
		        $.ajax({
		            url: "CheckLeader",
		            data:
		            {
		            	roomID	:	roomID
		            },
		            success: function (response) 
		            {
		            	if(response == '1')
		            		document.getElementById("startButtonArea").innerHTML = '<button class="myButton" style="float:left;" onclick="GameStart()">開始遊戲</button>'	
		            	else
		            		document.getElementById("startButtonArea").innerHTML = '';
		            },
		        	cache: false
		        	});
			}