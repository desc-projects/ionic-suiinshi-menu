import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './pages/Menu';
import { AnimatePresence, motion } from 'framer-motion';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <Header />
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <AnimatePresence mode='wait'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/menu">
                  <Menu />
                </Route>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </motion.div>
            </AnimatePresence>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
      <Footer />
    </IonApp>
  )
};

export default App;
