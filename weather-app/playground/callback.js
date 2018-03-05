

var getUser = (id, callback) => {
    var user = {
        id : 13,
        name : 'Guru'
    };

    setTimeout(() => {
        callback(user.id);
    },3000)
}   


getUser(13,(user) => {
    console.log(user);
});