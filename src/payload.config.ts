// // storage-adapter-import-placeholder
// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import {formBuilderPlugin} from '@payloadcms/plugin-form-builder'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },
//   collections: [Users, Media],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || '',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URL || '',
//     },
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     formBuilderPlugin({
//       access:{
//         read: () => true,
//       }
//     }),
//     // storage-adapter-placeholder
//   ],
// })



// storage-adapter-import-placeholder
// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },
//   collections: [
//     Users,
//     Media,

//     // Override access for the Form Builder collections:
//     {
//       slug: 'forms',
//       access: {
//         read: () => true,  // allow public read access to forms
//       },
//       fields: [], // you can leave empty here, plugin manages fields internally
//     },
//     {
//       slug: 'form-submissions',
//       access: {
//         read: () => true,    // allow public read access to submissions (optional)
//         create: () => true,  // allow anyone to submit forms
//       },
//       fields: [],
//     },
//   ],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || '',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URL || '',
//     },
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     formBuilderPlugin({}),
//     // storage-adapter-placeholder
//   ],
// })

// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },
//   collections: [
//     Users,
//     Media,
//     // You will override access here
//   ],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || '',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URL || '',
//     },
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     formBuilderPlugin({}),
//     // Override the default formSubmissions collection access
//     (config) => {
//       const formSubmissions = config.collections?.find(
//         (col) => col.slug === 'form-submissions'
//       )
//       if (formSubmissions) {
//         formSubmissions.access = {
//           create: () => true, // ✅ Allow public submissions
//           read: () => true,   // ✅ Allow public read access to submissions
//         }
//       }
//       return config
//     },
//   ],
// })

import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({}),
    (config) => {
      const formSubmissions = config.collections?.find(
        (col) => col.slug === 'form-submissions'
      )
      if (formSubmissions) {
        formSubmissions.access = {
          create: () => true,
          read: () => true,
        }
      }
      return config
    },
  ],
})