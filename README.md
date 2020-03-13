# webpack-test-repo

## description

### My npm package has three types of products:
![fold](./img/package.png)

and `package.json`:

![package.json](./img/packageJson.png)

> As can be seen from the above figure, the default export is esm.all.js

> The only difference between esm.vue.js and esm.all.js is that the former excludes the vue library

### Let see when it is normal

I imported this package in two places

![com1](./img/com1.png)
- - - 
![com2](./img/com2.png)


then I run `npm run build`, the build result `15s`:

![build1](./img/build1.png)

### Let see when it is slowly

change the two file to below:

![com11](./img/com11.png)
- - - 
![com22](./img/com22.png)

then I run `npm run build`, the build result `127s`:

![build2](./img/build2.png)