import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React from 'react';

const BmiControls: React.FC <{onCalculate: () => void; onRest: () => void}>= props =>{
    return (
        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton onClick={props.onCalculate}>
              <IonIcon slot="start" icon={calculatorOutline}/>
              Calculate
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton onClick={props.onRest}>
              <IonIcon slot="start" icon={refreshOutline}/>
              Rest
            </IonButton>
          </IonCol>
        </IonRow>
    );
};

export default BmiControls;