var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "捷運站",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8072810026165644,
          "pitch": 0.22609562037742315,
          "rotation": 0,
          "target": "1-"
        },
		{
          "yaw": -1.055325756065285,
          "pitch": -0.0013444044003882993,
          "rotation": 7.0685834705770345,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6946381828915502,
          "pitch": -0.14787741521150366,
          "title": "沿著這條路直走",
          "text": ""
        },
		{
          "yaw": -0.7619753799186864,
          "pitch": -0.36042088677818995,
          "title": "亞東醫院捷運站",
          "text": "3號出口"
        }
      ]
    },
    {
      "id": "1-",
      "name": "路口轉彎",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.984303326233963,
          "pitch": 0.05431674942861875,
          "rotation": 0,
          "target": "2-"
        },
		{
          "yaw": -0.0799275965761197,
          "pitch": 0.13691452580729013,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.708478115083004,
          "pitch": 0.024093240635833624,
          "title": "這裡轉彎",
          "text": ""
        },
		{
          "yaw": 2.195368501313075,
          "pitch": -0.12209749740046227,
          "title": "全家",
          "text": ""
        }
      ]
    },
    {
      "id": "2-",
      "name": "過馬路",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.205798613116613,
          "pitch": -0.03258001477235872,
          "rotation": 0,
          "target": "3-"
        },
		{
          "yaw": 1.1978190830552897,
          "pitch": 0.046167423516846995,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1586465496258214,
          "pitch": -0.031975736278882394,
          "title": "停車場",
          "text": ""
        },
        {
          "yaw": -2.371521754319261,
          "pitch": 0.1300042728432249,
          "title": "過馬路",
          "text": ""
        },
		{
          "yaw": 0.09690864374284658,
          "pitch": -0.25379438572670665,
          "title": "消防局",
          "text": ""
        }
      ]
    },
    {
      "id": "3-",
      "name": "停車場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.11351106522293,
          "pitch": -0.05249236620583808,
          "rotation": 0,
          "target": "4-"
        },
		{
          "yaw": 1.5284989620096532,
          "pitch": 0.10147494394149703,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.26226188220758395,
          "pitch": -0.09494839177544456,
          "title": "停車場",
          "text": ""
        }
      ]
    },
    {
      "id": "4-",
      "name": "外面馬路",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7220144555170904,
          "pitch": 0.14136208956239038,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -0.1536657185809851,
          "pitch": 0.11373629996054646,
          "rotation": 10.210176124166829,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9508601256614124,
          "pitch": 0.06643261536788359,
          "title": "圖書館",
          "text": ""
        },
		{
          "yaw": 2.157123584404049,
          "pitch": 0.06352608576775864,
          "title": "愛買停車場",
          "text": ""
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
