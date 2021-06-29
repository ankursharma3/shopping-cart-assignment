import withRedux from 'next-redux-wrapper'
import '../styles/globals.css'
import PageLayout from '../components/templates'
import store from '../redux/store'
import App from 'next/app'
import { Provider } from 'react-redux'

class MyApp extends App {
  
  static async getInitialProps({Component,ctx}) {
    const appProps = Component.getInitialProps? await Component.getInitialProps(ctx) : {}
    return {appProps}
  }

  render(){
    const {Component,appProps} = this.props
    return (
      <Provider store={store}>
        <PageLayout>
          <Component {...appProps} />
        </PageLayout>  
      </Provider>
    )
  }


}
/*function MyApp({ Component, pageProps }) {
  return (
    
    <PageLayout>
        <Component {...pageProps} />
    </PageLayout>
     
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
*/
 const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
