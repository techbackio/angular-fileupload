ANGULAR FILE UPLOAD
===================

This project is a demo for doing file upload with Angular JS, with a Express Backend. Single Page Applications don't submit the file like traditional HTML pages and thus are little tricky when it comes to multipart data. There's an excellent library <a href="https://github.com/danialfarid/ng-file-upload">
ng-file-upload </a>which solves this issue.

On the other end, Express doesn't support multipart form handling out of the box anymore. Multer is being used here to handle the file upload. It is also configured to rename the file and save it at specified location.

### Start the project
Install the dependencies:
```
npm install
bower install
```

Start the dev server:
```
npm start
```

For production usage:
```
npm install
bower install
```

####  For any querires, send your requests to tanay.mit@gmail.com
