import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  setupIonicReact,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
} from '@ionic/react';
import React, { useRef, useState } from 'react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import BmiControls  from './components/BmiControls';
import BmiResult from './components/BmiResult';

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

/* Theme variables */
import './theme/variables.css';
import InputControls from './components/InputControls';

setupIonicReact();

const App: React.FC = () => {
  const [result, setResult] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current?.value; //? shortcut for ternary operation to check that the input isn't null
    const enteredWeight = weightInputRef.current?.value;
    if(!enteredHeight || !enteredWeight || +enteredWeight <=0 || +enteredHeight <=0)
    {
      setError('Please enter a vaild (non-negative) input number.')
      return;
    }
    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;
    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;
    const bmi = weight / (height * height);
    setResult(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };

  const clearErrors = () =>{
    setError(' ');
  };

  const selectCalcUnitHandler = (selectedValue: 'mkg' | 'ftlbs') =>{
    setCalcUnits(selectedValue);

  }

  return (
    <React.Fragment>
      <IonAlert
       isOpen={!!error} 
       message={error} 
       buttons={[{text: 'Okay', handler: clearErrors }]}
       />
  <IonApp>
    <IonHeader>
      <IonToolbar color='primary'>
        <IonTitle>
            BMI Calculator
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonGrid>
      <IonRow>
        <IonCol>
          <InputControls selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
        </IonCol>
      </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
            <IonLabel position="floating">Your Height ({calcUnits === 'mkg' ? 'meters': 'feet'})</IonLabel>
              <IonInput type="number" ref={heightInputRef}></IonInput>
            </IonItem>
          </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Weight ({calcUnits === 'mkg' ? 'kg' : 'lbs'})</IonLabel>
              <IonInput type="number" ref={weightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
       <BmiControls onCalculate={calculateBMI} onRest={resetInputs} />
        {result && (<BmiResult result={result}/>
        )}
      </IonGrid>
    </IonContent>
  </IonApp>
  </React.Fragment>
);
}

export default App;
