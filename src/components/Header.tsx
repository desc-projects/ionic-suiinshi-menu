import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export const Header: React.FC = () => {
    return (
        <IonHeader translucent={true}>
            <IonToolbar>
                <IonTitle>Suiinshi</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};