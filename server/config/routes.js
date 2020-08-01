let objWithCallbackKeys = require('./../controllers/msgController');

module.exports = app => {
    app.get('/api/fake/message',(req,res)=>{
        res.json([
            {
                userName: "bean",
                likes: 7,
                context:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            },
            {
                userName: "bean",
                likes: 70,
                context:"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem"
            },
            {
                userName: "Amara",
                likes: 2,
                context:"Hi Bean!!!"
            },
            {
                userName: "bean",
                likes: 17,
                context:"Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular"
            },
            {
                userName: "bean",
                likes: 27,
                context:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. "
            },
            {
                userName: "Nini",
                likes: 2,
                context:"Hi Bean"
            },
        ])
    });
    app.get('/api/message',objWithCallbackKeys.index);
    app.post('/api/message',objWithCallbackKeys.create);
    app.get('/api/message/:msgId',objWithCallbackKeys.show);
    app.put('/api/message/:msgId',objWithCallbackKeys.update);
}