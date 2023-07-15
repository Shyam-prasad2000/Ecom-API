module.exports=function(app){
    app.get('/users', function(request, response){
        response.send("Simple Call users Route from Here!");
     });
}