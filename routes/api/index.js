// Dependencies
const router = require('express').Router();
const path = require('path');

// File Imports
const bookRoutes = require('./books.js');
// const anotherThingRoutes = require('./anotherThing.js')

// Routes -- already at /api
router.use('/books', bookRoutes);  // so this is actually /api/books
// router.use('/anotherThing', anotherThingRoutes) // and this is actually /api/anotherThing

// any other route--send em to the build index.html
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// });

// export it!
module.exports = router;