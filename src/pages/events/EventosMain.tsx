import type React from "react"
import { IonContent, IonHeader, IonToolbar, IonPage, IonIcon, IonFab, IonFabButton } from "@ionic/react"
import { calendarOutline, wifiOutline } from "ionicons/icons"
import styles from "./EventosMain.module.css"

const EventosMain: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="primary" className={styles.headerToolbar}>
          <div className={styles.logoContainer}>
            <h1>V-LINK</h1>
            <img src="/imgs/LogoTopBar.png" alt="V-Link Logo" className={styles.topbarLogo} />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Separator Line */}
        <div className={styles.separator}></div>

        {/* Date */}
        <div className={styles.dateContainer}>
          <h2 className={styles.dateText}>Today, 25/11/2024</h2>
        </div>

        {/* Event Card */}
        <div className={styles.eventCardContainer}>
          <img src="/placeholder.svg?height=400&width=400" alt="Pet Show Event" className={styles.eventImage} />
        </div>

        {/* Separator Line */}
        <div className={styles.separator}></div>

        {/* Event Title */}
        <div className={styles.eventTitleContainer}>
          <h3 className={styles.eventTitle}>Pet Show Event</h3>
        </div>

        {/* Event Description */}
        <div className={styles.eventDescription}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true
          </p>
        </div>

        {/* Floating Action Button */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed" className={styles.fab}>
          <IonFabButton>
            <IonIcon icon={calendarOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default EventosMain

