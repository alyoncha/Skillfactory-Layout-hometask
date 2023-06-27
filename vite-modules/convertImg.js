// import imagemin from 'imagemin'
// import webp from 'imagemin-webp'
// import fs from 'fs'

// const PATH = 'src/app/assets'

// function convertImgToWebP() {
//     return imagemin([`${PATH}/*.{jpg,png}`], {
//         destination: `${PATH}/webp`,
//         plugins: [webp({ quality: 60 })],
//     })
// }

// if (process.env.NODE_ENV !== 'production') {
//     fs.watch(PATH, () => {
//         convertImgToWebP()
//     })
// }

// export { convertImgToWebP }
