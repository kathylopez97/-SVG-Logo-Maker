// Triangle shape
class Triangle {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,50 70,275 330,275" style="fill:${this.color}" />

        <text x="200" y="165" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
        </svg>`}
}

module.exports = { Triangle };


