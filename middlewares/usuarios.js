var user1 = new Usuario({
  nome:'Kelly'
});

user1.save(function(err,user1){
  if(err) return console.error(err);
  console.dir(user1);
});

Usuario.findOne({nome: 'Kelly'}, function(err, user1){
  if(err) return console.error(err);
  console.dir(user1);
});

Usuario.find(function(err, users){
  if(err) return console.error(err);
  console.dir(users);
});
