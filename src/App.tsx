import {
  IonApp,
  setupIonicReact,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonCard,
} from '@ionic/react';
import React, { useState } from 'react';


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
import './theme/style.css'

setupIonicReact();

const App: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [discount, setDiscount] = useState<number>();
  const [personBill, setpersonBill] = useState<number>(0.00);
  const [personTip, setpersonTip] = useState<number>(0.00);


  const discountCalculate = (discount:number) => {
    if(people == 0)
    {
      setpersonBill(0);
      setpersonTip(0);
    }
    else{
        setDiscount(discount);
        const totalBill = (bill! + bill! * discount);
        setpersonBill(totalBill / people!);
        setpersonTip((totalBill - bill!) / people!);
    }

  }

  const resetValues = () =>{
    setDiscount(0);
    setBill(0);
    setPeople(0);
    setpersonBill(0);
    setpersonTip(0);
  }
 
  return (
  <IonApp>
    <IonContent className="ion-color-main-app ion-padding-top">
      <h2 className="ion-color-very-dark-cyan ion-text-uppercase ion-text-center">Spli <br/>
      ttr</h2>
      <IonCard className="ion-card ion-margin-top">
        <IonGrid className='ion-first-col'>
          <IonRow>
            <IonLabel className="ion-label ion-margin-bottom" position='fixed'>Bill</IonLabel>
          </IonRow>
          <IonRow>
          <IonInput id="bill-input" value={bill} className="ion-input" type="number" onIonChange={e => setBill(parseFloat(e.detail.value!))} clearInput>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" className="ion-margin"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/></svg>
          </IonInput>
          </IonRow>
          <IonRow>
          <IonLabel className="ion-label ion-margin-top ion-margin-bottom ion-text-nowrap" position='fixed'>Selcet Tip %</IonLabel>
          </IonRow>
          <IonGrid class='ion-grid-buttons'>
          <div>
            <div>
              <IonButton className="ion-button discount-1" onClick={() =>discountCalculate(0.05)}>5%</IonButton>
            </div>
            <div>
              <IonButton className="ion-button discount-2" onClick={() => discountCalculate(0.10)}>10%</IonButton>
            </div>
          </div>
          <div>
            <div>
              <IonButton className="ion-button discount-3" onClick={() => discountCalculate(0.15)}>15%</IonButton>
            </div>
            <div>
              <IonButton className="ion-button discount-4" onClick={() => discountCalculate(0.25)}>25%</IonButton>
            </div>
          </div>
          <div>
            <div>
              <IonButton className="ion-button discount-5" onClick={() => discountCalculate(0.50)}>50%</IonButton>
            </div>
            <div>
             <IonInput type="number" className="ion-input ion-custom-input ion-margin-top custom" placeholder='Custom' onIonChange={(e) => discountCalculate(parseFloat(e.detail.value!))} clearInput></IonInput>
            </div>
          </div>
          </IonGrid>
          <IonRow>
            <IonLabel className="ion-label ion-margin-bottom ion-margin-top ion-text-nowrap" position='fixed'>No of people</IonLabel>
          </IonRow>
          <IonRow>
          <IonInput className="ion-input" value={people} type="number" onIonChange={(e) => {setPeople(Math.floor(parseFloat(e.detail.value!))); discountCalculate(parseFloat(e.detail.value!))}} clearInput>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" className="ion-margin"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg>
          </IonInput>
          </IonRow>
        </IonGrid>
        <IonCard className="ion-result-card ion-padding ion-second-col">
          <IonGrid>
            <IonRow className="ion-margin-bottom">
              <IonCol className="icon-color-very-light-grayish-cyan">
                Tip Amount <br/>
                <span className="ion-color-grayish-cyan">/ Person</span>
              </IonCol>
                <div className="ion-result">{"$" + personTip.toFixed(2)}</div>
            </IonRow>
            <IonRow className="ion-margin-bottom">
              <IonCol className="icon-color-very-light-grayish-cyan">
                 Total <br/>
                <span className="ion-color-grayish-cyan">/ Person</span>
              </IonCol>
              <div className="ion-result">{"$" + personBill.toFixed(2)}</div>
            </IonRow>
            <IonRow>
              <IonButton className="ion-text-uppercase ion-rest-button"  onClick={() => resetValues()}>Reset</IonButton>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonCard>
    </IonContent>
  </IonApp>
)
}

export default App;
