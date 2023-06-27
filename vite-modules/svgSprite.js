// import SVGSpriter from 'svg-sprite'
// import path from 'path'
// import fs from 'fs'

// const PATH = './src/app/assets/svg/'

// const config = {
//     dest: './src/app/assets',
//     mode: {
//         stack: true,
//     },
//     log: null,
//     shape: {
//         dimension: {
//             maxWidth: 2000,
//             maxHeight: 2000,
//             precision: 2,
//             attributes: false,
//         },
//         spacing: {
//             padding: 0,
//             box: 'content',
//         },
//         transform: ['svgo'],
//         meta: null,
//         align: null,
//         // dest: 'svg-sprite'
//     },
//     svg: {
//         xmlDeclaration: true,
//         doctypeDeclaration: true,
//         namespaceIDs: true,
//         namespaceIDPrefix: '',
//         namespaceClassnames: true,
//         dimensionAttributes: true,
//     },
//     variables: {},
// }

// const spriter = new SVGSpriter(config)

// async function svgSp() {
//     const files = fs.readdirSync(PATH)
//     for (let file in files) {
//         spriter.add(
//             PATH + files[file],
//             null,
//             fs.readFileSync(PATH + files[file], { encoding: 'utf-8' }),
//         )
//     }
//     const { result } = await spriter.compileAsync()
//     for (const mode in result) {
//         for (const resource in result[mode]) {
//             fs.mkdirSync(path.dirname(result[mode][resource].path), {
//                 recursive: true,
//             })
//             fs.writeFileSync(
//                 result[mode][resource].path,
//                 result[mode][resource].contents,
//             )
//         }
//     }
// }

// if (process.env.NODE_ENV !== 'production') {
//     fs.watch(PATH, () => {
//         svgSp()
//     })
// }

// export { svgSp }
