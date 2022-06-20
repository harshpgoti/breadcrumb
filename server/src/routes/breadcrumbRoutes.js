const express = require('express'),
 router = express.Router()
//  cors = require('cors'),

router.get('/', function (req, res) {
    res.json('Hello World!');
});

router.get('/path/:path', function (req, res) {
    let tempObject = {
        "type": "dir",
        "children": {
            "home": {
                "type": "dir",
                "children": {
                    "myname": {
                        "type": "dir",
                        "children": {
                            "filea.txt": {
                                "type": "file"
                            },
                            "fileb.txt": {
                                "type": "file"
                            },
                            "projects": {
                                "type": "dir",
                                "children": {
                                    "mysupersecretproject": {
                                        "type": "dir",
                                        "children": {
                                            "mysupersecretfile": {
                                                "type": "file"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    let params = String(req.params.path).split('/').filter(data=>data)

    let path = tempObject;
    
    params.forEach(item=>{
        if(!path){return;}

        let temp=path["children"][item]
        if(!temp){
            return;
        }
        
        path = temp
    })

    if(path.children){
        path=Object.keys(path['children'])
    }
    
    res.status(200).json({path});
});


module.exports = router;