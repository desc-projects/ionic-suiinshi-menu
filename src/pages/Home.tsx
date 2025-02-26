import { IonButton, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <div style={{ background: '#F9F4E4', height: '100vh', padding: '1rem' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#F47631',
            fontSize: '55px',
            fontWeight: 'bold',
          }}>Suiinshi</h1>
          <IonButton routerLink='/menu' color={'dark'}>Открыть меню</IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
