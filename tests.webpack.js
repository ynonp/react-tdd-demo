var context = require.context('./spec', true, /-test\.js$/);
context.keys().forEach(context);
