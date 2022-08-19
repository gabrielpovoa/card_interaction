import { Right } from "./components/right"
import { Container } from "./AppCss."
import { Side } from "./components/side"
import { FormProvider } from './contexts/formContenxt'

const App = () => {
  return <>
    <FormProvider>
      <Container>
        <Side />
        <Right />
      </Container>
    </FormProvider>
  </>
}

export default App