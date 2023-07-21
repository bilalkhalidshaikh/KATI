// // ** Next Imports
// import Head from 'next/head'
// import { Router } from 'next/router'

// // ** Loader Import
// import NProgress from 'nprogress'

// // ** Emotion Imports
// import { CacheProvider } from '@emotion/react'

// // ** Config Imports
// import themeConfig from 'src/configs/themeConfig'

// // ** Component Imports
// import UserLayout from 'src/layouts/UserLayout'
// import ThemeComponent from 'src/@core/theme/ThemeComponent'

// // ** Contexts
// import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// // ** Utils Imports
// import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// // ** React Perfect Scrollbar Style
// import 'react-perfect-scrollbar/dist/css/styles.css'

// // ** Global css styles
// import '../../styles/globals.css'

// const clientSideEmotionCache = createEmotionCache()

// // ** Pace Loader
// if (themeConfig.routingLoader) {
//   Router.events.on('routeChangeStart', () => {
//     NProgress.start()
//   })
//   Router.events.on('routeChangeError', () => {
//     NProgress.done()
//   })
//   Router.events.on('routeChangeComplete', () => {
//     NProgress.done()
//   })
// }

// // ** Configure JSS & ClassName
// const App = props => {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

//   // Variables
//   const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <title>
//           {/* {`${themeConfig.templateName} - Material Design React Admin Template`} */}
//           KATI
//           </title>
//         <meta
//           name='description'
//       content='Kati'
//           // content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
//         />
//         {/* <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' /> */}
//         <meta name='viewport' content='initial-scale=1, width=device-width' />
//       </Head>

//       <SettingsProvider>
//         <SettingsConsumer>
//           {({ settings }) => {
//             return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
//           }}
//         </SettingsConsumer>
//       </SettingsProvider>
//     </CacheProvider>
//   )
// }

// export default App





// ** Next Imports
import Head from 'next/head'
import { Router,useRouter } from 'next/router'
import NProgress from 'nprogress'
import { CacheProvider } from '@emotion/react'
import themeConfig from 'src/configs/themeConfig'
import UserLayout from 'src/layouts/UserLayout'
import SellerLayout from 'src/layouts/SellerLayout' // Import the SellerLayout component
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import {useState,useEffect} from "react"
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Step 1: Get the current route to determine if it's the seller's page
  const router = useRouter();
  const currentRoute = router.pathname;

  // Step 2: Create state to store the user's role
  const [userRole, setUserRole] = useState('');

  // Step 3: Function to set the user's role
  const handleUserRole = (role) => {
    setUserRole(role);
  };

  // Step 4: Custom getLayout function to conditionally render layouts
  const getLayout = Component.getLayout ?? ((page) => {
    // If the current route is '/services', use SellerLayout
    if (currentRoute === '/services' || currentRoute.startsWith('/services/')) {
      return <SellerLayout>{page}</SellerLayout>;
    }
    // For other URLs, check the userRole and render accordingly
    return userRole === 'seller' ? <SellerLayout>{page}</SellerLayout> : <UserLayout>{page}</UserLayout>;
  });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          KATI
        </title>
        <meta name='description' content='Kati' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App;
