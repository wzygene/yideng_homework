class PraiseButton {
  constructor (num, element) {
    this.num = num
    this.element = element
  }

  handleClickEvent () {
    this.element.click(() => {
      if(this.num < 10) {
        this.element.css('-webkit-filter', 'grayscale(0)')
      } else{
        this.element.css('-webkit-filter', 'grayscale(1)')
        this.num = 0
      }
      console.log(this.num)
    })
  }
}

class Thumb extends PraiseButton {
  constructor(num, element){
    super(num, element)
  }
}

// let f = new Thumb(0, $('#thumb'))
// f.handleClickEvent()


