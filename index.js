//터미널에서 node 파일명.확장자 치면 실행됨.
// 후 npm init 사용시 json 패키지 생성되고

//console.log('Hello world!')

// var figlet = require('figlet')
// figlet('Hello World!!', function(err, data){
//     if(err){
//         console.log('Somthing went wrong!');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });
// npm uninstall 라이브러리?명 으로 지워줄 수 있고

//npm i express -> 후 node index.js -> 서버 실행

const express = require('express');
const app = express()
const port = 3000
app.listen(3000) // 요걸 해줘야 서버 실행됨
var cors = require('cors')

app.use(cors())


app.get('/', function(req, res){
    res.send('Hello World')
})
app.get('/user/:id', function(req, res){
    //const q =req.params
    //console.log(q) // { id: 'ybh0821' }
    //console.log(q.id) // ybh0821
    //res.send({'userId' : q.id})

    const q = req.query
    console.log(q) // http://localhost:3000/user/ybh0821?q=ybh0821&name=ybh&age=26
    //res.json({'userId' : q.q})
    //res.json({'userName' : q.name})
    res.json({'userAge' : q.age})
    //res.json 같은경우 console 처럼 사용하는게 아니라 한번만 주는거.
})

app.get('/dog', function(req, res){
    res.send('<a href="#">멍멍</a>')
})
app.get('/cat', function(req, res){
    res.send('먀우')
})


app.get('/sound/:name', (req,res) =>{
    //const name = req.params.name ↓↓↓
    const { name } = req.params
    
    if(name == "dog"){
        res.json({'sound' : '컹컹'})
    }else if(name == "cat"){
        res.json({'sound' : '니야옹'})
    }else{
        res.json({'sound' : 'errr'})
    }
})




