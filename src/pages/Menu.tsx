import { IonCard, IonCardHeader, IonPage } from "@ionic/react";

export const Menu: React.FC = () => {
    return (
        <IonPage>
            <IonCardHeader translucent={true}>
                <div>
                    <h1>Menu Page</h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        overflow: 'scroll',
                        backdropFilter: 'blur(10px)',
                        padding: '1rem 0 1rem 0',
                    }}>
                        <img style={{ marginRight: '0.5rem' }} src="../src/assets/banner.png" loading="lazy" alt="banner"></img>
                        <img src="../src/assets/banner.png" loading="lazy" alt="banner"></img>
                    </div>
                </div>
            </IonCardHeader>
        </IonPage>
    )
};