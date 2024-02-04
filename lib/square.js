// Square shape 
class Square {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render() {
        return `<svg version="1.1" width="300" height="200" viewBox="0, 0, 100, 100" xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height="400" style="fill:${this.color}" />

        <text x="62" y="62" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
      </svg>`
    }
}

module.exports = { Square };