const ddd = document.getElementById('ddd')
const phoneNum = document.getElementById("phone-number")
const message = document.getElementById("message")
const btn = document.getElementById("send")
const linkField = document.getElementById("input-show-link")

let arr = []
const insert = "%"

btn.onclick= ()=>{
  const words = message.value.split(" ")
  let wordsChange = words.map((word, index) => {
    if (index !== words.length -1){
      return word+insert
    } else return word
  })
  const msg = wordsChange.join("")
  const link = `https://wa.me/55${ddd.value}${phoneNum.value}?text=${message.value}`
  
  if(message.value.length < 1 || phoneNum.value.length < 9 || phoneNum.value.length >9 || ddd.value < 11) {
    alert("Verifique se todos os campos DDD, TELEFONE e MENSAGEM estão preenchidos corretamente antes de enviar!")
    return
  } else {
    console.log(link)
    linkField.innerText = link
    // window.location.assign(link)
    window.open(link, '_blank')
  }
}