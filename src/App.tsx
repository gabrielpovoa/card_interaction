import { Right } from "./components/right"
import { Container } from "./AppCss."
import { Side } from "./components/side"
import { FormProvider } from './contexts/formContenxt'
import { Modal } from "./components/modal"
import { BrowserRouter } from "react-router-dom"
import { RouterList } from "./routes"


const App = () => {
  return <>
    <FormProvider>
      <BrowserRouter>
        <RouterList />
        <Container>
          <Side />
          <Right />
          {/* <Modal /> */}
        </Container>
      </BrowserRouter>
    </FormProvider>
  </>
}

export default App