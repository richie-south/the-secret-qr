import { useEffect, useReducer } from "react"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Container from "react-bootstrap/esm/Container"
import Nav from "react-bootstrap/esm/Nav"
import Navbar from "react-bootstrap/esm/Navbar"
import { Route, Switch, useHistory, useLocation } from "react-router"
import { Link } from "react-router-dom"
import {
  getFoundQrCodes,
  isFirstFind,
  QRCodes,
  qrCode1,
  qrCode2,
  qrCode3,
  qrCode4,
  qrCode5,
  qrCode6,
  qrCode7,
  qrCode8,
  qrCode9,
  qrCode10,
  qrCode11,
  qrCode12,
  qrCode13,
  qrCode14,
  qrCode15,
  qrCode16,
  qrCode17,
  qrCode18,
  setFirstFind,
  saveFoundQRCode,
  resetGame,
} from "./lib/localstorage-handler"
import { useQuery } from "./lib/use-query"
import Alert from "react-bootstrap/esm/Alert"

import qr01 from "./01-8ce5e78f-71c6-4827-9f52-0a4762c0e62c.png"
import qr02 from "./02-c6c08b0d-5313-45c3-927f-e32a41122dbf.png"
import qr03 from "./03-4c2cd2fc-d512-4b4c-9605-34bbb96be554.png"
import qr04 from "./04-c2812887-947d-4d82-b8fb-dc1b2e6cd7f6.png"
import qr05 from "./05-315616bb-5870-4562-aeee-4196d62302c9.png"
import qr06 from "./06-df6f98dd-81d2-465f-b658-cd2824eb3444.png"
import qr07 from "./07-43486cc3-7cb7-450c-9321-b56bc38d6b81.png"
import qr08 from "./08-18214c96-9fd5-4d60-a38b-41d4141b5deb.png"
import qr09 from "./09-94336213-c603-42a8-a0e0-caeffc221372.png"
import qr091 from "./091-d614f4d2-6d6a-49af-a412-c28c9dd5d365.png"
import qr092 from "./092-43fada1c-c852-4545-a7f3-c177ddfc8402.png"
import qr093 from "./093-4934161c-d09f-486c-a270-dcf8ec0d4605.png"
import qr094 from "./094-e0fe9928-59f1-45e2-bb7e-f43c81ca5ca1.png"
import qr095 from "./095-758e8eb9-e77f-4b6c-ace7-8aa7a2ed67b2.png"
import qr096 from "./096-38878db0-20fa-4dfe-9bd6-41fe17c811d7.png"
import qr097 from "./097-f5456400-30a5-4072-b871-121f4b3f86b0.png"
import qr098 from "./098-2b2d8b55-448d-42d2-b311-d57e53d7596b.png"
import qr099 from "./099-f8561173-75f3-4009-9d5c-8d8d7604f8e5.png"

const ids = [
  qrCode1,
  qrCode2,
  qrCode3,
  qrCode4,
  qrCode5,
  qrCode6,
  qrCode7,
  qrCode8,
  qrCode9,
  qrCode10,
  qrCode11,
  qrCode12,
  qrCode13,
  qrCode14,
  qrCode15,
  qrCode16,
  qrCode17,
  qrCode18,
]

const qrData = {
  [qrCode1]: {
    title: "Siffran",
    body: "Nummer sju har alltid varit lyckans tal, men här kan det betyda mer än så. Är det en hylla? Ett fack? Början på en kombination?",
    img: qr01,
  },
  [qrCode2]: {
    title: "Kodens hemlighet",
    body: "Siffrorna 3, 9 döljer en hemlighet (kanske en kombination för ett lås eller en kod?).",
    img: qr02,
  },
  [qrCode3]: {
    title: "Platsens hemlighet",
    body: "Du känner på pappret, det är fuktigt.. Skatten måste ligga på en fuktig plats!",
    img: qr03,
  },
  [qrCode4]: {
    title: "Ljusets blickar",
    body: "Platsen måste vara något som både är mörkt och ljust. Var finner man skuggor som avslöjas?",
    img: qr04,
  },
  [qrCode5]: {
    title: "Dörrar",
    body: "Sehär en ledtråd! Den lyder 'Platsen är alltid mörk så länge den inte är öppen'",
    img: qr05,
  },

  [qrCode6]: {
    title: "Lukten",
    body: "Denna QR-kod luktar väldigt gott, hum vad kan det betyda?",
    img: qr06,
  },

  [qrCode7]: {
    title: "Smaken",
    body: "Hmm, denna QR-kod smakade väldigt bra. Varför känns detta så bekant?",
    img: qr07,
  },

  [qrCode8]: {
    title: "Hemlighetens djup",
    body: "Inte på ytan, utan längre in. Gräv djupare för att hitta vad som döljs längst bak.",
    img: qr08,
  },

  [qrCode9]: {
    title: "Bokstav",
    body: "Konstigt, denna QR-kod visar endast bokstaven K",
    img: qr09,
  },

  [qrCode10]: {
    title: "Ljudets herre",
    body: "Här dånar musiken men inget annat spår, det känns som om detta endast är en avledning!",
    img: qr091,
  },

  [qrCode11]: {
    title: "Taket",
    body: "Här lyser endast stjärnorna kan inte vara något viktigt. (Du hör musik? Vart kommer detta ljudet ifrån?)",
    img: qr092,
  },

  [qrCode12]: {
    title: "Paniken",
    body: "Här har någon varit förut! Flera måste vara på jakt efter skatten skynda!!",
    img: qr093,
  },

  [qrCode13]: {
    title: "Smyga",
    body: "Bäst att inte visa för andra vart ledtrådarna är!",
    img: qr094,
  },

  [qrCode14]: {
    title: "Smulorna",
    body: "Denna var smutsig! Inget mera att se här dock.",
    img: qr095,
  },

  [qrCode15]: {
    title: "Bokstäverna",
    body: "Hum denna QR-kod var täckt av smulor och smuts, best jag för blickarna nedåt",
    img: qr096,
  },

  [qrCode16]: {
    title: "Usch",
    body: "Bara en dåre skulle gömma skatten på ett sådant här ställe, bäst jag letar vidare.",
    img: qr097,
  },

  [qrCode17]: {
    title: "Hjulet",
    body: "Oj vad det snurrar",
    img: qr098,
  },

  [qrCode18]: {
    title: "Trappan",
    body: "Denna QR-kod verkar prata om någon form av ordning. Störst längst ned och minst längst upp. Vad kan det betyda?",
    img: qr099,
  },
}

function useForceUpdate(): () => void {
  return useReducer(() => ({}), {})[1] as () => void
}

export function App() {
  const history = useHistory()
  const query = useQuery()
  const forceUpdate = useForceUpdate()

  const id = query.get("id") as QRCodes | null
  const foundQRCodes = getFoundQrCodes()

  const data = new Date()
  const isHoursBeforeFour = data.getHours() < 17

  useEffect(() => {
    if (isHoursBeforeFour) {
      return
    }

    if (id !== null && ids.includes(id)) {
      saveFoundQRCode(id)
    }

    if (isFirstFind()) {
      setFirstFind()
      history.push("first-match")
    } else {
      forceUpdate()
    }
  }, [id, history])

  const handleGohome = () => {
    history.push("/")
  }

  if (isHoursBeforeFour) {
    return (
      <Container className="mt-4">
        <p>Spelet är inte öppet ännu, låt QR koden vara</p>
        <p>Spelet öppnar kl 17:00</p>
      </Container>
    )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Skattjakten</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Hem
            </Link>

            <Link className="nav-link" to="/rules">
              Regler
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Container className="mt-4">
            {foundQRCodes.length >= 18 && (
              <Alert variant={"success"}>
                Vad kan alla ledtrådar betyda? Måste vara något på K som är
                kallt, fuktigt och endast ljust när dörren är öppen!
              </Alert>
            )}
            <p>
              <b>
                Du är en äventyrare som har fått nys om en gömd skatt. För att
                hitta skatten behöver du följa en serie ledtrådar gömda i
                QR-koder.
              </b>
            </p>
            <p>Här samlas alla ledtrådar du redan hittat!</p>

            {foundQRCodes.map((QRCode) => {
              const data = qrData[QRCode]

              return (
                <Card
                  key={QRCode}
                  className="mb-4"
                  bg={QRCode === id ? "success" : "dark"}
                  text="light"
                >
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.body}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </Container>
        </Route>

        <Route path="/rules">
          <Container className="mt-4">
            <h1>Regler</h1>
            <p>
              Reglerna är enkla.
              <br />
              Leta efter de gömda QR koderna och skanna dom med din mobil
              kamera.
              <br />
              <br />
              Du får ej avlägsna QR-koden från sin plats.
              <br />
              <br />
              Berätta inte för någon vart skatten eller QR-koder befinner sig.
            </p>

            <button onClick={resetGame}>Reset game :O</button>
          </Container>
        </Route>
        <Route path="/first-match">
          <Container className="mt-4">
            <h1>Skattjakten!</h1>
            <p>
              Du är en äventyrare som har fått nys om en gömd skatt. För att
              hitta skatten behöver du följa en serie ledtrådar gömda i
              QR-koder.
            </p>

            <p>
              För att skanna en qr kod använder du din mobilkamera eller en qr
              kod app.
            </p>

            <Button variant="primary" onClick={handleGohome}>
              Start!
            </Button>
          </Container>
        </Route>
      </Switch>
    </>
  )
}
