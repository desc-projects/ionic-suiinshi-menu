import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";

export const Footer: React.FC = () => {
    return (
        <IonFooter translucent={true}>
            <IonToolbar>
                <IonTitle>Footer</IonTitle>
            </IonToolbar>
        </IonFooter>
    )
};