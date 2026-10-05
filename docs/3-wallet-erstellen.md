# 3. Erstellung einer Wallet

Der erste Schritt für den Einstieg in die Welt der Kryptowährungen ist die Erstellung einer Wallet. Eine Wallet ist im Grunde dein **persönliches Konto für Kryptowährungen**, mit dem du diese empfangen, speichern und senden kannst. Grundlegend unterscheidet man zwischen **non-custodial Wallets** (du hast selbst die volle Kontrolle über deine Schlüssel) und **custodial Wallets** (ein Drittanbieter, z.B. eine Börse, verwaltet die Schlüssel für dich).

## Private Keys – die Schlüssel zur Wallet

Jede Wallet basiert auf einem **Private Key** (privater Schlüssel). Mit diesem Schlüssel kannst du Transaktionen signieren und beweisen, dass die Coins wirklich dir gehören. Wer deinen Private Key kennt, hat **vollen Zugriff** auf deine Coins. Deshalb ist es entscheidend, ob du den Schlüssel selbst verwahrst (non-custodial) oder ob jemand anderes ihn für dich hält (custodial).

## Mnemonic Seed – das Backup deiner Wallet

Bei der Erstellung einer Wallet wird in der Regel ein **Mnemonic Seed** generiert - eine Liste von 12-24 Wörtern. Diese Wörter sind die *Wurzel* aller deiner Private Keys. Mit dem Seed kannst du deine gesamte Wallet jederzeit in einer **kompatiblen App** oder auf einem **anderen Gerät** wiederherstellen. **Achtung:** Wer deinen Seed kennt, kann ebenfalls deine Coins kontrollieren. Am besten sollte er offline aufbewahrt werden (z.B. aufgeschrieben/ausgedruckt). Einen Passwort-Manager kannst du alternativ natürlich ebenfalls nutzen. Geht der Seed verloren, verlierst du den Zugriff auf deine Wallet unwiederbringlich.

## Welche Wallet ist die richtige für mich?

Die Wahl der Wallet hängt von deinen Bedürfnissen ab. Hier die wichtigsten Unterschiede:

- **Mobile (App) Wallets:** Ideal für den Alltag, da sie einfach zu bedienen sind und oft QR-Codes unterstützen.
- **Desktop Wallets:** Bieten oft mehr Kontrolle und Sicherheit, sind aber teils weniger flexibel als mobile Wallets.
- **Hardware Wallets:** Sehr sicher, da sie deine privaten Schlüssel offline und gut verschlüsselt (meist auf einem USB-Gerät) speichern. Besonders geeignet, wenn du größere Beträge langfristig verwahren möchtest.
- **Custodial Wallets:** Hier hält ein Drittanbieter (z.B. eine Kryptobörse) die privaten Schlüssel für dich. Das ist bequem, aber unsicher, da du von der Plattform abhängig bist. Merksatz: *"Not your keys, not your coins."*

Für Einsteiger sind **non-custodial Mobile Wallets** oft ein guter Startpunkt, da sie leicht zu bedienen sind und dir trotzdem die volle Kontrolle über deine Coins lassen. Es kann sinnvoll sein, verschiedene Wallets auszuprobieren und sowohl auf dem Smartphone als auch auf dem PC eine Wallet zu installieren. So hast du immer eine Backup-Option.

## Unsere Wallet-Empfehlungen

Hier sind unsere Favoriten für verschiedene Plattformen (alle non-custodial):

**Mobil (Android/iOS):**
- ⭐ [Cake Wallet](https://cakewallet.com/)
- [Unstoppable Wallet](https://unstoppable.money/)
- [Atomic Wallet](https://atomicwallet.io/de)

**Desktop (Windows/Linux/macOS):**
- ⭐ [Cake Wallet](https://cakewallet.com/)
- [Atomic Wallet](https://atomicwallet.io/)
- ⭐ [Monero GUI Wallet](https://www.getmonero.org/downloads/) (nur Monero)
- [Feather Wallet](https://featherwallet.org/) (nur Monero)
- [Electrum-LTC](https://electrum-ltc.org/) (nur Litecoin)

Wenn du noch gar **keine Erfahrung** hast, empfehlen wir dir, die **Cake Wallet** auf deinem Handy zu nutzen. Diese ist sehr einfach zu bedienen, hat viele nützliche Features und ist für alle gängigen Plattformen verfügbar. 

::: info
Deine Wallet ist nicht an eine bestimmte App gebunden. Solange du den **Mnemonic Seed** oder **Private Key** hast, kannst du sie mit jeder kompatiblen Wallet-Software wiederherstellen.
:::

<div class="notice notice-danger">
	
Ein Seed aus einer **Multi-Currency-Wallet** funktioniert nicht zwangsläufig in einer **Single-Currency-Wallet** (und umgekehrt), da die **Ableitung der Private Keys** unterschiedlich sein kann. In solchen Fällen müssen dann die Private Keys direkt importiert werden, am besten aber einfach ausprobieren, ob es funktioniert oder nicht. :)

::: spoiler "Was ist der Unterschied?"
Eine **Multi-Currency-Wallet** ermöglich es oft, den gleichen Mnemonic Seed für Wallets verschiedener Kryptowährungen zu nutzen. Dieser Seed ist teils aber App-spezifisch und der Mechanismus für die Ableitung der Private Keys nicht bekannt, so dass die Wallet dann in anderen Apps mit dem Seed nicht wiederhergestellt werden kann. 

Eine **Single-Currency-Wallet** unterstützt i.d.R. nur eine Kryptowährung und generiert entsprechend für jede Wallet auch einen eigenen Seed, dieser ist auch universell kompatibel.
:::
</div>

Im nächsten Abschnitt zeigen wir dir die Einrichtung von zwei beliebten Wallets: der **Cake Wallet** und der **Monero GUI Wallet**. Die Schritte sind bei anderen Wallets ähnlich, sodass du die Anleitung leicht übertragen kannst. Meist sollte die Einrichtung aber fast selbsterklärend sein.

<br>
<a href="https://cakewallet.com/"><img src="/storage/crypto-guide/cakewallet/logo.png" alt="logo.png" width="450"></a>

## 3.1. Cake Wallet

### Einrichtung

Nach der Installation auf "Neue Wallet erstellen" klicken und die Währung auswählen, in unserem Fall Monero. Nun den Namen für die Wallet festlegen, wenn du deine Coins später noch anonymisieren willst, empfiehlt es sich, die Wallets zu nummerieren oder anderweitig kennzuzeichnen. Den nun angezeigten Recovery Seed aufschreiben und an einem sicheren Ort aufbewahren, da sich mit diesem die Wallet wiederherstellen lässt.

::: spoiler "Schritt-für-Schritt Anleitung"
Auf „Neue Wallet erstellen" klicken und anschließend Währung auswählen, in unserem Fall Monero.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-1.png" alt="cake-wallet-xmr-1.png" width="300">
<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-2.png" alt="cake-wallet-xmr-2.png" width="300">

Name für Wallet festlegen, wenn du deine Coins später noch anonymisieren willst, empfiehlt es sich, die Wallets z.B. zu nummerieren.

**Den Recovery Seed aufschreiben und sicher aufbewahren!** Danach auf "Seed verifizieren" klicken und den Seed verifizieren.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-3.png" alt="cake-wallet-xmr-3.png" width="300">
<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-4.png" alt="cake-wallet-xmr-4.png" width="300">
:::

### Funktionen

::: spoiler "Startseite"
Nach der Einrichtung landest du auf der Startseite der Wallet. Mit Rot markiert sind die für dich relevanten Grundfunktionen.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-main.png" alt="cake-wallet-xmr-main.png" width="300">
:::

::: spoiler "Empfangen"
Auf der "Empfangen"-Seite findest du die Adresse deiner Wallet, diese musst du angeben, wenn du z.B. gekaufte Coins auf deine Wallet übertragen willst. Der QR-Code enthält ebenfalls die Adresse und kann z.B. von einer anderen Person eingescannt werden.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-receive.png" alt="cake-wallet-xmr-receive.png" width="300">
:::

<details class="spoiler">
	<summary>Senden</summary>
	<div class="spoiler-content">

Auf der "Senden"-Seite musst du um Coins zu verschicken zuerst die Adresse des Empfängers _einfügen_ (um Tippfehler zu vermeiden), danach den Betrag in der jeweiligen Kryptowährung. Alternativ kann auch ein QR-Code eingescannt werden.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-send.png" alt="cake-wallet-xmr-send.png" width="300">

::: info
Damit das Senden funktioniert, muss die Wallet vollständig synchronisiert sein, der Status ist während der Synchronisierung auf der Startseite sichtbar. Die Synchronisierung kann teilweise ein paar Minuten dauern.
:::

</div>
</details>

::: spoiler "Wallets verwalten"
Auf der "Wallets"-Seite werden alle deine erstellten Wallets in Cake Wallet angezeigt. Hier kannst du auch weitere Wallets hinzufügen, z.B. wenn du mehrere Wallets für die Anonymisierung (Kapitel 5) erstellen möchtest.

Da wir Monero ja i.d.R. nicht direkt kaufen können, müssen wir hier noch eine Litecoin Wallet erstellen, um die Coins von der Börse dorthin transferieren zu können. 

<img src="/storage/crypto-guide/cakewallet/cake-wallet-ltc-new-1.png" alt="cake-wallet-ltc-new-1.png" width="300">
<img src="/storage/crypto-guide/cakewallet/cake-wallet-ltc-new-2.png" alt="cake-wallet-ltc-new-2.png" width="300">
<img src="/storage/crypto-guide/cakewallet/cake-wallet-ltc-new-3.png" alt="cake-wallet-ltc-new-3.png" width="300">
:::

::: spoiler "Einstellungen"
Von der Startseite aus lässt sich oben rechts das Menü öffnen, dort kannst du in den Anzeigeeinstellungen das Theme der App auswählen und auch die Währung festlegen, in welche Kryptowährungen umgerechnet werden.

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-menu-ui.png" alt="cake-wallet-xmr-menu-ui.png" width="300">

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-settings-ui.png" alt="cake-wallet-xmr-settings-ui.png" width="300">
:::

::: spoiler "Probleme bei Synchronisierung beheben"
Wenn die Synchronisierung der Wallet nicht funktioniert oder extrem langsam ist, kann es helfen, die Node zu ändern, über welche die Wallet synchronisiert wird. Dies kannst du in den Einstellungen unter "Nodes" tun. 

<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-menu-nodes.png" alt="cake-wallet-xmr-menu-nodes.png" width="300">
<img src="/storage/crypto-guide/cakewallet/cake-wallet-xmr-settings-nodes.png" alt="cake-wallet-xmr-settings-nodes.png" width="300">
:::
<br>
<a href="https://www.getmonero.org/downloads/"><img src="/storage/crypto-guide/monero/logo.png" alt="logo.png" width="400"></a>

## 3.2. Monero GUI Wallet

::: danger
**Achtung:** Bei der Installation ist es wahrscheinlich, dass Antivirenprogramme wie z.B. der Windows Defender anschlagen, da die Wallet Tools enthält, mit welchen du theoretisch selbst Cryptomining betreiben kannst. Oft sind Cryptominer in Malware enthalten, hier handelt es sich natürlich aber um einen Fehlalarm. Im Antivirenprogramm muss daher also eine Ausnahme für die Monero GUI Wallet hinzugefügt werden.

Achte darauf, die Wallet nur von der offiziellen Internetseite oder dem GitHub Repo herunterzuladen.
:::

### Einrichtung

Nach der Installation den in den Bildern gezeigten Schritten folgen. Im einfachen Modus eine Wallet erstellen, für den Recovery Phrase am besten die Vorlage ausdrucken und ausfüllen. Nur mit diesem lässt sich die Wallet wiederherstellen! Anschließend Passwort setzen und Einrichtung abschließen.

::: spoiler "Schritt-für-Schritt Anleitung"
Als erstes die gewünschte Sprache auswählen und auf "Weiter" klicken. Danach "Einfacher Modus" auswählen und auf der nächsten Seite den Hinweis bestätigen.

<img src="/storage/crypto-guide/monero/monero-1.png" alt="monero-1.png" width="500">
<img src="/storage/crypto-guide/monero/monero-2.png" alt="monero-2.png" width="500">

Nun auf "Erstelle eine neue Wallet" klicken und einen Namen vergeben. Wenn du die Kryptowährung später anonymisieren willst, brauchst du mehrere Wallets, dafür am besten eine Nummerierung o.ä. verwenden.

<img src="/storage/crypto-guide/monero/monero-3.png" alt="monero-3.png" width="500">
<img src="/storage/crypto-guide/monero/monero-4.png" alt="monero-4.png" width="500">

Danach wird der Recovery Phrase bzw. Mnemonic Seed angezeigt. Dieser wird zur Wiederherstellung der Wallet benötigt und muss daher sicher aufbewahrt werden. Am besten auf "Print a template" klicken und in der Vorlage die Wörter eintragen. Im nächsten Schritt den Seed verifizieren. Mit "Weiter" bestätigen.

<img src="/storage/crypto-guide/monero/monero-5.png" alt="monero-5.png" width="500">
<img src="/storage/crypto-guide/monero/monero-6.png" alt="monero-6.png" width="500">

Nun musst du noch ein sicheres Passwort vergeben, welches zur Entsperrung der Wallet benötigt wird. Danach mit "Create wallet" bestätigen, wodurch die Wallet erstellt wird.

<img src="/storage/crypto-guide/monero/monero-7.png" alt="monero-7.png" width="500">
<img src="/storage/crypto-guide/monero/monero-8.png" alt="monero-8.png" width="500">
:::

### Funktionen

<details class="spoiler">
	<summary>Senden</summary>
	<div class="spoiler-content">
Wenn du Monero versenden willst, musst du bei der Seitenleiste auf "Senden" gehen und auf der Seite die Adresse des Empfängers sowie den Betrag eingeben. Anschließend bestätigen.

<img src="/storage/crypto-guide/monero/monero-9.png" alt="monero-9.png" width="600">

::: info
Damit das Senden funktioniert, muss die Wallet vollständig synchronisiert sein, in diesem Fall steht auf der in der App unten links "Verbunden". Die Synchronisierung kann teilweise ein paar Minuten dauern.
:::
</div>
</details>

::: spoiler "Empfangen"
Wenn du auf "Empfangen" gehst, wird dir die Adresse deiner Wallet angezeigt, an welche Geld geschickt werden kann. Der QR-Code lässt sich z.B. mit einer mobilen Wallet einscannen und führt ebenfalls zur Adresse. Du kannst außerdem auch noch weitere Adressen erstellen, Zahlungen an alle von diesen werden deiner Wallet gutgeschrieben.

<img src="/storage/crypto-guide/monero/monero-10.png" alt="monero-10.png" width="600">
:::

---

## Für die nächsten Schritte brauchst du Folgendes:
- [ ] **Eine Monero Wallet**
- [ ] **Eine Litecoin Wallet**

Zum Erstellen befolge bitte die Anleitung oben. Am einfachsten ist es, beide Wallets in Cake Wallet zu erstellen.
