import {useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import {Route, Switch, useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import {
  getFoundQrCodes,
  isFirstFind,
  QRCodes,
  qrCode0,
  qrCode1,
  qrCode2,
  qrCode3,
  qrCode4,
  setFirstFind,
  resetGame,
  saveFoundQRCode
} from './lib/localstorage-handler'
import {useQuery} from './lib/use-query'
import map from './map.jpg'
import qrImage0 from './qr-677d572f-1392-475a-bd70-491b530f6dfd.png'
import qrImage1 from './qr-a47a540d-3713-4270-8b00-a5101ee7be07.png'
import qrImage2 from './qr-cfccb9ab-adab-45f3-9b8c-652815e84fdb.png'
import qrImage3 from './qr-f1f97ade-f59a-4034-9d28-575d587a124d.png'
import qrImage4 from './qr-62937f4e-e76d-4a99-8372-175efc548194.png'
import Alert from 'react-bootstrap/esm/Alert'

const qrData = {
  [qrCode0]: {
    title: 'Oo du hittade mig :O',
    body: 'Så duktigt',
    img: qrImage0
  },
  [qrCode1]: {
    title: 'QR = FUN',
    body: 'Att en liten bild kan betyda så mycket',
    img: qrImage1
  },
  [qrCode2]: {
    title: '',
    body: '',
    img: qrImage2
  },
  [qrCode3]: {
    title: '',
    body: '',
    img: qrImage3
  },
  [qrCode4]: {
    title: '',
    body: '',
    img: qrImage4
  }
}

export function App() {
  const history = useHistory()
  const query = useQuery()

  const id = query.get('id') as QRCodes | null
  const foundQRCodes = getFoundQrCodes()

  useEffect(() => {
    if (id !== null) {
      saveFoundQRCode(id)
    }

    if (isFirstFind()) {
      setFirstFind()
      history.push('first-match')
    }
  }, [id, history])

  const handleGohome = () => {
    history.push('/')
  }

  const handlePlayAgain = () => {
    resetGame()
    history.go(0)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">The secret qr</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Hem
            </Link>

            <Link className="nav-link" to="/rules">
              Regler
            </Link>

            <Link className="nav-link" to="/map">
              Karta
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Container className="mt-4">
            {foundQRCodes.length === 5 && (
              <Alert variant={'success'}>
                Grattis du har hittat alla qr koder {'<3'}
              </Alert>
            )}

            {foundQRCodes.length === 5 && (
              <Button
                variant="danger"
                className="mb-4"
                onClick={handlePlayAgain}
              >
                Play again!
              </Button>
            )}

            <p>Här listas alla QR koder du redan hittat :D</p>

            {foundQRCodes.map((QRCode) => {
              const data = qrData[QRCode]

              return (
                <Card key={QRCode} className="mb-4" bg="dark" text="light">
                  <Card.Img variant="top" src={data.img} />
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
              Leta efter de 5st gömda QR koder och skanna dom med din mobil
              kamera.
              <br />
              <br />
              Om du vill få hjälp finns det en <Link to="/map">karta</Link> som
              visar vilka rum dom är gömda i.
            </p>
          </Container>
        </Route>
        <Route path="/map">
          <Container className="mt-4">
            <img
              src={map}
              alt="karta"
              style={{
                width: '100%'
              }}
            />
            <p>X marks the room</p>
          </Container>
        </Route>
        <Route path="/first-match">
          <Container className="mt-4">
            <h1>Välkommen till QR spelet!</h1>
            <p>
              I ditt hem finns det 5st gömda QR koder. Ditt mål är att hitta och
              skanna alla. Vem vet det kanske finns ett pris?
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
