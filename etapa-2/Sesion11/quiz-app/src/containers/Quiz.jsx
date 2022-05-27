import { FormControl, RadioGroup, Spinner, Stack } from '@chakra-ui/react'
import React, { Component } from 'react'
import { questionGeek } from "../data/preguntas"
import { ButtonStyled, DivForm, FormStyle, RadioStyled, SpinnerStyled, Titulo } from '../styles/StylesGlobal'

export default class Quiz extends Component {

  constructor() {
    super()
    this.state = {
      loader: true,
      numberQuestion: 0,
      question: {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        correct: ''
      },
      answerSelect: '',
      score: 0
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loader: false
      })
    }, 2000);

    this.getCurrentQuizData()
  }

  getCurrentQuizData = () => {
    const currentQuizData = questionGeek[this.state.numberQuestion]
    this.setState({
      question: {
        question: currentQuizData.question,
        a: currentQuizData.a,
        b: currentQuizData.b,
        c: currentQuizData.c,
        d: currentQuizData.d,
        correct: currentQuizData.correct
      }
    })
  }

  handleChange = ( e ) => {
    this.setState({
      answerSelect: e
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    if (this.state.answerSelect === this.state.question.correct && this.state.numberQuestion < questionGeek.length) {
      this.setState({
        score: this.state.score + 1
      })
    }

    if (this.state.numberQuestion < questionGeek.length) {
      this.setState({
        numberQuestion: this.state.numberQuestion + 1
      })
      this.getCurrentQuizData()
    }
  }

  render() {
    return (
      this.state.loader 
      ?
      <SpinnerStyled>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
         />
      </SpinnerStyled>
      :
      <>
        <DivForm>
          <FormStyle onSubmit={this.handleSubmit}>
              <FormControl as="fieldset">
                <Titulo as="legend">{this.state.question.question}</Titulo>
                <RadioGroup onChange={this.handleChange}>
                  <Stack>
                    <RadioStyled value={this.state.question.a}>
                      {this.state.question.a}
                    </RadioStyled>
                    <RadioStyled value={this.state.question.b}>
                      {this.state.question.b}
                    </RadioStyled>
                    <RadioStyled value={this.state.question.c}>
                      {this.state.question.c}
                    </RadioStyled>
                    <RadioStyled value={this.state.question.d}>
                      {this.state.question.d}
                    </RadioStyled>
                  </Stack>
                </RadioGroup>
                <ButtonStyled type="submit">Enviar</ButtonStyled>
                <h2 style={{ textAlign: 'center' }}>{this.state.score} / {questionGeek.length}</h2>
              </FormControl>           
          </FormStyle>
        </DivForm>
      </>
    )
  }
}
