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
          "yaw": -1.8246470225307228,
          "pitch": 0.07755434715549114,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.014098593410412974,
          "pitch": -0.11554605430651677,
          "title": "亞東醫院捷運站",
          "text": "從三號出口走出來"
        },
        {
          "yaw": -1.5202893098757464,
          "pitch": 0.0013241573048112798,
          "title": "沿著這條路直走",
          "text": ""
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
          "yaw": -1.8187253392734561,
          "pitch": 0.31152383085452584,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4643272342859923,
          "pitch": 0.028546268901420646,
          "title": "這裡轉，沿著這條路走",
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
          "yaw": -1.3603917489839539,
          "pitch": -0.012280002882519625,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.012469777031445,
          "pitch": -0.194152974573079,
          "title": "圖書館",
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
          "yaw": -1.8228984344329575,
          "pitch": 0.0738291834799778,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3033759380747849,
          "pitch": -0.051169479116852656,
          "title": "停車場",
          "text": "如果有開車來，可以停這裡"
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
          "yaw": -0.35253932839208346,
          "pitch": 0.25378006465119185,
          "rotation": 0.7853981633974483,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.633010471359995,
          "pitch": 0.052576056795764714,
          "title": "圖書館",
          "text": ""
        }
      ]
    }
  ],
  "name": "routine",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
