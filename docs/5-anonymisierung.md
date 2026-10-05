# 5. Anonymisierung

Bei den meisten Kryptowährungen sind die **Transaktionen nicht anonym,** sondern sogar öffentlich einsehbar und somit **nachverfolgbar**. Daher ist es sinnvoll, die Coins, welche du zum Zahlen nutzt, zu "anonymisieren", insbesondere wenn du damit nicht ganz legale Sache bezahlen willst, was im Bereich des Filesharing öfters mal der Fall sein könnte... ;)

Ziel ist es, dass wenn du z.B. LTC gekauft hast und etwas damit bezahlen möchtest, du die Coins **nicht von einer Wallet sendest**, welche z.B. in **Verbindung mit deinem BitPanda oder Kraken Account** gebracht werden kann. In diesem Fall bringt es also auch wenig, die Coins einfach an eine andere Wallet von dir zu senden, da man öffentlich einsehen kann, an welche Adresse du die Coins gesendet hast.

Um dies zu verhindern, **tauschen** wir die Coins mit einer **Swap Exchange** von Litecoin zu **Monero**.

::: warning
Viele Swap Exchanges **loggen die IP-Adresssen**, von welchem der Tausch getätigt wird. Daher am besten einen **VPN nutzen**!
:::

Der Ablauf funktioniert ganz einfach:
1. Ausgangs- und Zielwährung auswählen
2. Zu tauschenden Betrag eingeben
3. Adresse eingeben (+ ggf. Rückerstattungsadresse)
4. Tausch bestätigen
5. Ausgewählten Betrag an angezeigte Adresse senden
6. Zielwährung wird and deine Adresse gesendet

## 5.1. Trocador

Da die Wechselkurse stark schwanken können und es zeitaufwendig ist, die Kurse verschiedener Seiten zu vergleichen, nutzen wir dafür die Plattform [Trocador](https://trocador.app), welche genau das für uns macht.

::: danger
In letzter Zeit gibt es vermehrt **Phishing-Versuche** über gefälschte Seiten in **gesponserten Suchergebnissen** bei u.a. Google mit sehr ähnlich aussehenden Domains.

Daher unbedingt aufpassen, dass du die **richtige Domain** eingibst bzw. auswählst: https://trocador.app

Vermeiden kannst du solche Suchergebnisse übrigens auch durch die Verwendung eines AdBlocker wie z.B. [uBlock Origin](https://github.com/gorhill/uBlock).
:::

<details class="spoiler">
	<summary>Ablauf in Trocador (LTC -> XMR)</summary>
<div class="spoiler-content">

Zunächst musst du als Ausgangs- und Zielwährung auswählen. In diesem Fall Litecoin und Monero, bei Litecoin darauf achten, dass "Mainnet" ausgewählt ist! Dann den Betrag auswählen, den du tauschen willst. 

<img src="/storage/crypto-guide/trocador/trocador-1.png" alt="trocador-1.png" width="700">

Nun die Zieladresse von deiner Monero-Wallet eingeben, welche du zuvor erstellt hast. Optional kann auch eine Rückzahlungsadresse (von deiner Litecoin-Wallet) angegeben werden, worauf im Fall von Problemen die Coins zurückgesendet werden können. Nicht zwingend notwendig, kann aber auch nicht schaden. 

Auf der rechten Seite kann die Swap Exchange ausgewählt werden, wo der Tausch durchgeführt ist. Standardmäßig ist die mit den geringsten Gebühren bzw. dem besten Kurs ausgewählt, welche ich auch empfehle zu nutzen. 
	
Anschließend auf "Austausch Bestätigen" klicken.
<img src="/storage/crypto-guide/trocador/trocador-2.png" alt="trocador-2.png" width="700">

Nun werden dir die Zahlungsinformationen angezeigt, wohin du die Litecoins senden sollst. Mit den markierten Buttons kannst du die Wallet-Adresse kopieren oder als QR-Code zum einscannen anzeigen lassen, was ich empfehle.
	
::: info
Wenn du etwas mehr oder weniger als den eingegebenen Betrag sendest, wird der zu erhaltene Betrag in XMR vom Anbieter neu kalkuliert, Abweichungen sind also kein Problem. 
:::
<img src="/storage/crypto-guide/trocador/trocador-3.png" alt="trocador-3.png" width="700">
	
Sobald die Coins beim Anbieter eingegangen sind und die Transaktion oft genug bestätigt wurde, wird das Monero an deine Wallet losgeschickt. 
<img src="/storage/crypto-guide/trocador/trocador-4.png" alt="trocador-4.png" width="700">
</div>
</details>

::: warning
Bei Cake Wallet gibt es zwar eine direkte Integration von Trocador und anderen Swap Exchanges, jedoch habe ich schon mehrfach die Erfahrung gemacht, dass Anbieter mit sehr schlechten Kursen ausgewählt wurden. Daher empfehle ich, am besten immer die Website von Trocador zu nutzen.
:::

## 5.2. Hinweise

Zur Anonymisierung sollte man **verschiedene Wallets** nutzen, am besten **je nach "Anonymisierungs-Stufe"** benannt. Konkret heißt das also, dass man z.B. eine "Stufe 1" Wallet hat für nicht getauschte Coins, welche direkt von BitPanda, Kraken o.ä. kommen. "Stufe 2" wäre dann bereits einmal getauscht, "Stufe 3" zweimal usw...

::: spoiler "Beispielnaming"
So handhabe ich das, kannst du aber natürlich beliebig anders machen:

`litecoin-01` - Coins von der BitPanda/Kraken

`monero-01` - 1x getauschte Coins

`litecoin-02` - 2x getauschte Coins

`monero-02` - 3x getauschte Coins
:::

Zudem sollten zum Tauschen immer **Währungen mit geringen Transaktionsgebühren** verwendet werden, Monero und Litecoin bieten sich daher an.

Konkret läuft es so ab: Du schickst deine gekauften Coins – z.B. LTC – auf deine "Stufe 1" Wallet. Bei Trocador bzw. bei einer Swap Exchange gibst du als Zieladresse die Adresse deiner "Stufe 2" Wallet an, welche natürlich eine andere Währung als "Stufe 1" sein muss – in diesem Fall XMR. Wenn die Transaktion abgeschlossen ist, kannst du den Schritt beliebig oft wiederholen, also z.B. wieder über eine Exchange auf deine "Stufe 3" Wallet (LTC) schicken, danach auf die "Stufe 4" Wallet (XMR) usw.

Generell ist es empfehlenswert, deine **Coins mind. einmal zu tauschen**, die **Zahlungen** falls möglich aber **immer über Monero** abzuwickeln, also XMR als Zielwährung zu nehmen. Wenn du also **LTC** kaufst, **mind. einmal tauschen** zu XMR. Falls du direkt XMR kaufst, ist das tauschen nicht ganz so wichtig wie bei LTC, **erhöht jedoch die Sicherheit**. 

Da bei **Monero** die **Zahlungen anonym** sind, verschleiern auch einfache Transaktionen die Herkunft zusätzlich. Man kann also z.B. einfach **Monero auf eine andere Monero Wallet senden**, um die Coins noch mehr zu anonymisieren. Der Weg **LTC -> XMR -> XMR** kann sich hier also anbieten, wenn man nur einen Swap machen, aber noch etwas mehr Sicherheit haben möchte.

Je öfter du tauschst, desto anonymer. Wichtig ist dabei aber, dass du **niemals die gleichen Wallets für verschiedene Anonymisierungs-Stufen** nutzt. Bei mehrfachem Tauschen sollten zudem idealerweise auch unterschiedliche Swap Exchanges ausgewählt werden.

Hier nochmal eine kleine Grafik zur Visualisierung:

<img src="/storage/crypto-guide/trocador/exchange-infographic.png" alt="exchange-infographic.png" style="max-width: 800px">

::: info
**Für die meisten User reicht einmaliges Tauschen zu Monero**, also **LTC -> XMR** oder ggf. **LTC -> XMR -> XMR** vollkommen aus. Das meiste darüber hinaus ist zur Anonymisierung eher "Overkill", falls man nicht gerade illegale Geschäfte im Darknet macht. ;)

Falls du eine andere Zielwährung als Monero hast, kannst du z.B. auch den Weg **LTC -> XMR -> BTC** nehmen.
:::

## 5.3. Andere Swap Exchanges

Abseits von Trocador sind hier einige Anbieter, mit denen wir gute Erfahrungen gemacht haben:

- [ChangeNOW](https://changenow.io/)
- [SimpleSwap](https://simpleswap.io/)
- [Houdini Swap](https://houdiniswap.com/)*
- [FixedFloat](https://ff.io)*
- [SideShift.ai](https://sideshift.ai/)* - kein XMR
- [UnstoppableSwap](https://unstoppableswap.net/) - nur BTC → XMR
- Weitere Seiten sind auf [KYCnot.me](https://kycnot.me/?categories=exchange&currency-mode=or&currencies=xmr) zu finden

_* höherer Mindestbetrag als auf den anderen Seiten_

Es sollte bevorzugt **"Variable Rate"** oder "Dynamic Rate" ausgewählt werden, da so **weniger Gebühren** (meist 0,5% statt 1%) anfallen. Zwar wird so immer der aktuelle Marktwert als Berechnungsgrundlage genutzt, die Schwankungen sind jedoch meist eher geringfügig. Der **feste Betrag** bietet sich eigentlich nur an, wenn man mit dem Tausch direkt eine **Zahlung tätigen** möchte und entsprechend sicherstellen muss, dass exakt der richtige Betrag ankommt.

::: warning
**Achtung:** Vermeide es, die Coins direkt von einer Börse wie z.B. BitPanda oder Kraken oder einer Swap Exchange an eine Swap Exchange zu senden, da solche Transaktionen oft als "verdächtig" eingestuft werden (höheres AML-Risiko) und die **Transaktion ggf. abgelehnt** wird oder zusätzliche **Verifikation** nötig ist. Daher immer **erst auf die eigene Wallet** senden und von dort aus an die Swap Exchange.
:::

