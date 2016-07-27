// Fixture data
if (Posts.find().count() === 0) {

  var now = new Date().getTime();

  var adminId = Meteor.users.insert({
    profile: { name: 'Admin' }
  });

  var admin = Meteor.users.findOne(adminId);

  Posts.insert({
    title: 'Welcome to JamConnect!',
    userId: admin._id,
    author: admin.profile.name,
    url: '',
    message: 'Welcome to JamConnect, we are glad you found us! If you have any questions, please feel free to ask in this thread and we will be happy to help.',
    submitted: new Date(now),
    commentsCount: 0,
    upvoters: [],
    votes: 9999
  });

  // // create two users
  // var tomId = Meteor.users.insert({
  //   profile: { name: 'Tom Coleman' }
  // });

  // var tom = Meteor.users.findOne(tomId);

  // var sachaId = Meteor.users.insert({
  //   profile: { name: 'Sacha Greif' }
  // });

  // var sacha = Meteor.users.findOne(sachaId);

  // var telescopeId = Posts.insert({
  //   title: 'Introducing Telescope',
  //   userId: sacha._id,
  //   author: sacha.profile.name,
  //   url: 'http://sachagreif.com/introducing-telescope/',
  //   submitted: new Date(now - 7 * 3600 * 1000),
  //   commentsCount: 2,
  //   upvoters: [],
  //   votes: 0
  // });

  // Comments.insert({
  //   postId: telescopeId,
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   submitted: new Date(now - 5 * 3600 * 1000),
  //   body: 'Interesting project Sacha, can I get involved?'
  // });

  // Comments.insert({
  //   postId: telescopeId,
  //   userId: sacha._id,
  //   author: sacha.profile.name,
  //   submitted: new Date(now - 3 * 3600 * 1000),
  //   body: 'You sure can Tom!'
  // });

  // Posts.insert({
  //   title: 'Meteor',
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   url: 'http://meteor.com',
  //   submitted: new Date(now - 10 * 3600 * 1000),
  //   commentsCount: 0,
  //   upvoters: [],
  //   votes: 0
  // });

  // Posts.insert({
  //   title: 'The Meteor Book',
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   url: 'http://themeteorbook.com',
  //   submitted: new Date(now - 12 * 3600 * 1000),
  //   commentsCount: 0,
  //   upvoters: [],
  //   votes: 0
  // });

  // for (var i = 0; i < 10; i++) {
  //   Posts.insert({
  //     title: 'Test post #' + i,
  //     author: sacha.profile.name,
  //     userId: sacha._id,
  //     url: 'http://google.com/?q=test-' + i,
  //     submitted: new Date(now - i * 3600 * 1000 + 1),
  //     commentsCount: 0,
  //     upvoters: [],
  //     votes: 0
  //   });
  // }
  
}